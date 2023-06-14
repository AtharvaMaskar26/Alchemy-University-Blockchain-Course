const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

colorHex = (color) => {
    return toHex(sha256(utf8ToBytes(color)));
}

// given a hash, return the color that created the hash
function findColor(hash) {
    const len = COLORS.length;

    for (let i = 0; i < len; i++) {
        if (colorHex(COLORS[i]) === toHex(hash)) {
            return COLORS[i];
        }
    }

    return 0;
}

module.exports = findColor;