export async function uploadFileToPinata(file) {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  let data = new FormData();
  data.append("file", file);

  const headers = {
    pinata_api_key: "66b871c91c1137d97b82",
    pinata_secret_api_key:
      "71ad43206bd6b413d1bdcb0d839e3cc52f09591f1940e7bddefc4fe1947d335f",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: data,
  });

  if (!response.ok) {
    throw new Error(`IPFS pinning error: ${response.statusText}`);
  }

  return response.json();
}

export async function uploadJSONToPinata(jsonData) {
  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  const headers = {
    "Content-Type": "application/json",
    pinata_api_key: "66b871c91c1137d97b82",
    pinata_secret_api_key:
      "71ad43206bd6b413d1bdcb0d839e3cc52f09591f1940e7bddefc4fe1947d335f",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(jsonData),
  });

  if (!response.ok) {
    throw new Error(`IPFS pinning error: ${response.statusText}`);
  }

  return response.json();
}

export async function viewIPFSData(ipfsHash) {
  const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch IPFS data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error retrieving data from IPFS:", error);
    throw error;
  }
}
