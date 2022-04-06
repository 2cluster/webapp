const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

const r1 = express.Router();
r1.get("/", (req, res, next) => {
  console.log("r1: trigger");
  next();
});

const r2 = express.Router();
r2.get("/", (req, res, next) => {
  console.log("r2: trigger");
  next();
});

const client1 = express.static(path.join(__dirname, "client1", "build"));
const client2 = express.static(path.join(__dirname, "client2", "build"));

if (0) {
  app.use([r1], client1);
} else {
  app.use([r2], client2);
}

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
