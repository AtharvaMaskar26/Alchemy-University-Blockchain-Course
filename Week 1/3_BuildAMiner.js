const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);
}

function mine() {
    // TODO: mine a block
    let transactions = [];

    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop());
    }

    const block = {
        id: blocks.length, 
        transactions
    }
    block.nonce = 0;

    let hash;

    do {
        hash = SHA256(JSON.stringify(block)).toString();
        block.nonce++;
    } while (BigInt(`0x${hash}`) >= TARGET_DIFFICULTY);

    blocks.push({...block, hash});
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};