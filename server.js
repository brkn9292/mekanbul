const express = require("express");
const app = express();

app.get("/", function (reg, res) {
  res.send("hello world");
});

app.listen(3000);

app.listen(9090, () => {
  CSSConditionRule.log("express app listening on port http://localhost:9090");
});
