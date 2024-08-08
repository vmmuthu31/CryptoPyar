const diamSdk = require("diamante-sdk-js");
const { uploadFileToIPFS } = require("./ipfsService");
const { createTrustline } = require("./trustlineService");

async function createNFT(
  issuerSecret,
  receiverSecret,
  receiverPublicKey,
  nftName,
  nftMetadata,
  filePath
) {
  try {
    const ipfsHash = await uploadFileToIPFS(filePath);
    const issuerKeypair = diamSdk.Keypair.fromSecret(issuerSecret);

    await createTrustline(
      receiverSecret,
      receiverPublicKey,
      nftName,
      issuerKeypair.publicKey()
    );

    const server = new diamSdk.Horizon.Server(
      "https://diamtestnet.diamcircle.io"
    );
    const issuerAccount = await server.loadAccount(issuerKeypair.publicKey());

    const nftAsset = new diamSdk.Asset(nftName, issuerKeypair.publicKey());

    const cidString = ipfsHash;

    const memoText = (
      nftMetadata +
      " | " +
      ipfsHash.substring(0, 16)
    ).substring(0, 28);

    const transaction = new diamSdk.TransactionBuilder(issuerAccount, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: diamSdk.Networks.TESTNET,
    })
      .addOperation(
        diamSdk.Operation.payment({
          destination: receiverPublicKey,
          asset: nftAsset,
          amount: "1",
        })
      )
      .addOperation(
        diamSdk.Operation.manageData({
          name: `${nftName}_CID`,
          value: cidString,
        })
      )
      .addMemo(diamSdk.Memo.text(memoText))
      .setTimeout(30)
      .build();

    transaction.sign(issuerKeypair);

    const result = await server.submitTransaction(transaction);

    return { message: "NFT created successfully", result };
  } catch (error) {
    throw error;
  }
}

module.exports = { createNFT };
