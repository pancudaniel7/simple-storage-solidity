const fs = require("fs");

const contractName = process.argv[2];

const contractJson = require("../build/contracts/" + contractName + ".json");
const abi = contractJson.abi;

fs.writeFileSync(contractName + "ABI.json", JSON.stringify(abi, null, 2));
