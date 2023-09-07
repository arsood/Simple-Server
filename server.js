const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Server response successful!");
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
