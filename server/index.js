require("dotenv").config();
const express = require("express");
const app = express();

app.get("/getRestaurants", (req, res) => {
    res.status(200).json({
      status: "success",
      restaurant: "wendys"
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
