const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRouter = require("./routers/index");
const bodyParser = require("body-parser");
const { Airpot, City } = require("./models/index");
const db = require("./models/index");
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Everything is ok");
  });

  app.use("/api", apiRouter);

  app.listen(PORT, async () => {
    console.log(`server is started ${PORT}`);
    // db.sequelize.sync({ alter: true });
    // const city = await City.findOne({
    //   where: {
    //     id: 10,
    //   },
    // });
    // const airpot = await city.getAirpots();
    // console.log(airpot);
  });
};

setupAndStartServer();
