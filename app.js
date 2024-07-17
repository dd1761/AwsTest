const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, "test/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "test/build/index.html"));
});

app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});
