const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createNFT } = require("./services/createNFT");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors("*"));

app.post("/create-keypair", (req, res) => {
  try {
    const DiamSdk = require("diamante-sdk-js");
    const keypair = DiamSdk.Keypair.random();
    res.json({
      publicKey: keypair.publicKey(),
      secret: keypair.secret(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/fund-account", async (req, res) => {
  try {
    const { publicKey } = req.body;
    const fetch = await import("node-fetch").then((mod) => mod.default);
    const response = await fetch(
      `https://friendbot.diamcircle.io/?addr=${publicKey}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to activate account ${publicKey}: ${response.statusText}`
      );
    }
    const result = await response.json();
    res.json({ message: `Account ${publicKey} funded successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/make-payment", async (req, res) => {
  try {
    const { senderSecret, receiverPublicKey, amount } = req.body;
    const DiamSdk = require("diamante-sdk-js");
    const { Keypair, TransactionBuilder, Operation, Asset, Networks } = DiamSdk;
    const server = new DiamSdk.Horizon.Server(
      "https://diamtestnet.diamcircle.io/"
    );
    const senderKeypair = Keypair.fromSecret(senderSecret);
    const senderPublicKey = senderKeypair.publicKey();

    const account = await server.loadAccount(senderPublicKey);
    const transaction = new TransactionBuilder(account, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.payment({
          destination: receiverPublicKey,
          asset: Asset.native(),
          amount: amount,
        })
      )
      .setTimeout(30)
      .build();

    transaction.sign(senderKeypair);
    const result = await server.submitTransaction(transaction);
    res.json({
      message: `Payment of ${amount} DIAM made to ${receiverPublicKey} successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/manage-data", async (req, res) => {
  try {
    const { senderSecret, key, value } = req.body;
    const DiamSdk = require("diamante-sdk-js");
    const { Keypair, TransactionBuilder, Operation, Networks } = DiamSdk;
    const server = new DiamSdk.Horizon.Server(
      "https://diamtestnet.diamcircle.io/"
    );
    const senderKeypair = Keypair.fromSecret(senderSecret);
    const senderPublicKey = senderKeypair.publicKey();

    const account = await server.loadAccount(senderPublicKey);
    const transaction = new TransactionBuilder(account, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.manageData({
          name: key,
          value: value || null,
        })
      )
      .setTimeout(30)
      .build();

    transaction.sign(senderKeypair);
    const result = await server.submitTransaction(transaction);
    res.json({ message: `Data for key ${key} managed successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/set-options", async (req, res) => {
  try {
    const {
      senderSecret,
      inflationDest,
      homeDomain,
      lowThreshold,
      medThreshold,
      highThreshold,
    } = req.body;
    const DiamSdk = require("diamante-sdk-js");
    const { Keypair, TransactionBuilder, Operation, Networks } = DiamSdk;
    const server = new DiamSdk.Horizon.Server(
      "https://diamtestnet.diamcircle.io/"
    );
    const senderKeypair = Keypair.fromSecret(senderSecret);
    const senderPublicKey = senderKeypair.publicKey();

    const account = await server.loadAccount(senderPublicKey);
    const transaction = new TransactionBuilder(account, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.setOptions({
          inflationDest: inflationDest || undefined,
          homeDomain: homeDomain || undefined,
          lowThreshold: lowThreshold ? parseInt(lowThreshold) : undefined,
          medThreshold: medThreshold ? parseInt(medThreshold) : undefined,
          highThreshold: highThreshold ? parseInt(highThreshold) : undefined,
        })
      )
      .setTimeout(30)
      .build();

    transaction.sign(senderKeypair);
    const result = await server.submitTransaction(transaction);
    res.json({ message: "Options set successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/mint-nft", async (req, res) => {
  try {
    const {
      issuerSecret,
      receiverSecret,
      receiverPublicKey,
      nftName,
      nftMetadata,
      filePath,
    } = req.body;
    const result = await createNFT(
      issuerSecret,
      receiverSecret,
      receiverPublicKey,
      nftName,
      nftMetadata,
      filePath
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Diamante backend listening at http://localhost:${port}`);
});
