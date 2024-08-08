const diamSdk = require("diamante-sdk-js");

async function createTrustline(
  userSecret,
  userPublicKey,
  assetCode,
  assetIssuer
) {
  try {
    const server = new diamSdk.Horizon.Server(
      "https://diamtestnet.diamcircle.io"
    );
    const userAccount = await server.loadAccount(userPublicKey);

    const asset = new diamSdk.Asset(assetCode, assetIssuer);

    const transaction = new diamSdk.TransactionBuilder(userAccount, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: diamSdk.Networks.TESTNET,
    })
      .addOperation(
        diamSdk.Operation.changeTrust({
          asset: asset,
        })
      )
      .setTimeout(30)
      .build();

    const userKeypair = diamSdk.Keypair.fromSecret(userSecret);
    transaction.sign(userKeypair);

    const result = await server.submitTransaction(transaction);

    return `Trustline for ${assetCode} created successfully!`;
  } catch (error) {
    throw error;
  }
}

module.exports = { createTrustline };
