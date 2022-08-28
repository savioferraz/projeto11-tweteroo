import express from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
  users.push(req.body);
  res.send("OK");
});

server.post("/tweets", (req, res) => {
  const avatar = users.map((user) => user.avatar);
  const newTweet = req.body;
  newTweet.avatar = avatar;

  tweets.push(newTweet);
  res.send("OK");
});

server.get("/tweets", (req, res) => {
  res.send(tweets.slice(-10));
});

server.listen(5000, () => console.log("Listening on port 5000"));
