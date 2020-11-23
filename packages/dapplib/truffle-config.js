require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind attitude hope arena outer ghost'; 
let testAccounts = [
"0x99e2bedb4c12b7734529d1a5b9a44da09ecd274a2043b666eb337177175e5524",
"0xd6d6fb64d6d8011abded0e56ff62d882877d5a5de222eb0c99426bea7396c4b9",
"0x2188d5f387f6eed8715139b4ac8a49c5f53733682f3eddd3711012931f0c4277",
"0x4087d799cda0cbff15bf8509005667ceec93b0d32ebd0ac1fe8ffa4835f6b40e",
"0xe4fcedb92510c03af38004f172026bf0fcc5119e9fc3432bdcba31e3346b990d",
"0x5b954227252e3afa004756f4380686aff750d6da61c7cdd6821b03bc870ae2ca",
"0xc2e63ef3c595b776b76f329d473a5c6f1fe910e0d8024119762dfdfc50cfaaf3",
"0x0f96f1b72c5b439e0911013853a3113cc42fbda14a03f05bc6b9350ed09a5a97",
"0xa9e394e1a3e753f4bce7bf5fe7c65ece3eeb03e7bdcb1c6fec3c60aea7598576",
"0x57cc43de49c47b8cfa8d0b7e9fc0e9a16bb730653959a151b6e40b74fa7e503c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
