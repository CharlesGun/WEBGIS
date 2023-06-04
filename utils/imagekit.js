var ImageKit = require("imagekit");

const {
    PUBLICKEY,
    PRIVATEKEY,
    URLENDPOINT
} = process.env;

const imagekit = new ImageKit({
    publicKey: PUBLICKEY,
    privateKey: PRIVATEKEY,
    urlEndpoint: URLENDPOINT
});

module.exports = imagekit;