const express = require("express");
const server = express();
const path = require("path");
const PORT = 8000;

const log = express.Router();
log.get("/", (req, res, next) => {
  console.log("log: trigger");
  console.log(req.originalUrl, req.baseUrl);
  next();
});

const auth = express.Router();
auth.get("/", (req, res, next) => {
  console.log("auth: trigger");
  next();
});

const cms = express.static(path.join(__dirname, "cms", "build"));
const app = express.static(path.join(__dirname, "app", "build"));

server.use([log, auth], cms);

server.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
