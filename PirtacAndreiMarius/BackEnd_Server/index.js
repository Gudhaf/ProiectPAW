const express = require("express");
const server = express();
const port = 3000;
const {getWishListFromUser,editItemFromUser} = require("./controller");
const cors = require("cors");

var corsOptions = {
    origin: '*',
  }
server.options("*", cors());
server.get("/database",cors(corsOptions), getWishListFromUser);
server.post("/database/:id/:game",cors(corsOptions), editItemFromUser);
server.listen(port, () => { console.log("Server is listening on port 3000"); });
