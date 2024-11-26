const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();

const setupAndStartServer = async () => {
  app.listen(PORT, (req, res) => {
    console.log(`server is started ${PORT}`);
  });
};

setupAndStartServer();
