const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routers/index");
const bodyParser = require("body-parser");
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Everything is ok");
  });

  app.use("/api", apiRouter);

  app.listen(PORT, () => {
    console.log(`server is started ${PORT}`);
  });
};

setupAndStartServer();
