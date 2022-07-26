const express = require("express");
const cors = require("cors");
const db = require("../config/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8001;

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Connection has been established successfully");
    } catch (error) {
      console.log("Unable to connect to the database:", error);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api", require("../routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server in http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
