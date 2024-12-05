const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupAndStartServer = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`server is started ${PORT}`);
  });
  app.get("/", (req, res) => {
    res.send("Everything is ok");
  });
};

setupAndStartServer();
