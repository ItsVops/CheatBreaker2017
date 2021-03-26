"use strict"

const hasha = require("hasha")

const hashaOptions = {
	algorithm: "sha1"
}

module.exports = filepath => hasha.fromFile(filepath, hashaOptions)
module.exports.sync = filepath => hasha.fromFileSync(filepath, hashaOptions)
