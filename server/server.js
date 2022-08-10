import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("gogo lolo say hi");
});

app.listen(PORT, console.log(`server up in ${PORT}`));
