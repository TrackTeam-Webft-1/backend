const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// auth router handles register and login, providing JWT
const authRouter = require("../auth/authRouter");
const authenticate = require("../auth/authMiddleware");

// sepearate routers for users, posts, and images
const usersRouter = require("../users/usersRouter");
const postsRouter = require("../posts/postsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: `Up and running!` });
});

server.use("/api/auth", authRouter);

// require token to enter through authenticate middleware
server.use("/api/users", authenticate, usersRouter);
server.use("/api/posts", authenticate, postsRouter);

module.exports = server