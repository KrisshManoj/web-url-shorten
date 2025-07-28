const Router = require("express").Router()
const Database = require("../../database/main")
/* 
Sample Backend Route
Returns a JSON Data
*/
Router.get("/r/:ID", (Request, Response) => {
    const ID = Request.params.ID;
    if (ID && Database.store.get(ID)) {
        const Data = Database.store.get(ID);
        Response.redirect(Data);
    } else {
        Response.send({ error: "Invalid URL!" });
    }
})

module.exports = Router