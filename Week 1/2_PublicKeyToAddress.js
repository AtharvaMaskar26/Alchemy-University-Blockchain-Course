const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const sliceFirstByte = publicKey.slice(1, );
    const keccakHash = keccak256(sliceFirstByte);
    return keccakHash.slice(-20);

    // return keccak256(publicKey.slice(1 ,)).slice(-20);
}

module.exports = getAddress;