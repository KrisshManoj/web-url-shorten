const QuickDB = require("quick.db");
const JSONDatastore = new QuickDB.JSONDriver("./store.json");

module.exports = JSONDatastore;