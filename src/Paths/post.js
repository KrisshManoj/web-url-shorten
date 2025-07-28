const Router = require("express").Router()
const Database = require("../../database/main")
const PasswordGenerator = require("generate-password")

/* 
Sample Backend Route
Returns a JSON Data
*/

function getSecurePassword() {
    var Password = PasswordGenerator.generate({ length: 5, numbers: true });
    if (Database.store.get(Password)) {
        return getSecurePassword()
    } else {
        return
    }
}

Router.post("/post/:URL", (Request, Response) => {
    const URL = Request.params.URL;
    const ID = getSecurePassword();

    Database.store.set(ID, URL);
    Response.send({ shortenedURL: `/r/${ID}` });
})

module.exports = Router