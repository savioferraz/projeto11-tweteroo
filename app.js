import express from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
  if (!req.body.username || !req.body.avatar) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    users.push(req.body);
    res.status(201).send("OK");
  }
});

server.post("/tweets", (req, res) => {
  const username = req.headers.user;
  const avatar = users.map((user) => user.avatar);
  const tweet = req.body.tweet;
  const newTweet = { username, avatar, tweet };

  if (!username || !tweet) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    tweets.push(newTweet);
    res.status(201).send("OK");
  }
});

server.get("/tweets", (req, res) => {
  const page = parseInt(req.query.page);

  if (page < 1) {
    return res.status(400).send("Informe uma página válida!");
  }
  if (page === 1) {
    res.send(tweets.slice(-10));
  } else {
    res.send(tweets.slice(-10 * page, -(10 * page - 10)));
  }
});

server.get("/tweets/:username", (req, res) => {
  const username = req.params.username;
  const userTweets = tweets.filter((value) => value.username === username);

  res.status(201).send(userTweets);
});

server.listen(5000, () => console.log("Listening on port 5000"));
