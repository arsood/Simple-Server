const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("OK");
});

const PORT = 80;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
