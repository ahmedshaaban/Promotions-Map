import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import path from "path";
import container from "./inversify.config";
import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";

// Controllers
import "./controllers/PromoController";

// Load promos in memory
import { startPromoPulling } from "./services/PromoService";
startPromoPulling();

// create server
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.set("port", process.env.PORT || 3000);
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "pug");
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });

  app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
  );
});

export default server.build();