import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

server.post("/sign-up", (req, res) => {
  console.log("chegou no console");
  res.send("chegou na tela");
});

server.post("/tweets", (req, res) => {
  console.log("chegou no console");
  res.send("chegou na tela");
});

server.get("/tweets", (req, res) => {
  console.log("chegou no console");
  res.send("chegou na tela");
});

server.listen(5000, () => console.log("Listen on 5000"));
