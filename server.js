import express from "express";
import { config } from "dotenv";
import connectToDb from "./lib/connectDb.js";
import todoroute from "./routes/todoroutes.js";
import cors from "cors";

config({
  path: "./data/config.env",
});

// CONNECTING SERVER
const server = express();

// connecting DB
connectToDb();

// USING MIDDLEWARE
server.use(express.json());
server.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// get DATA ON SERVER
server.get("/", (req, res) => {
  res.send("Hello World from Server Prapti Here");
});

// using routes
server.use(todoroute);

// Listening server on port
server.listen(process.env.PORT, () => {
  console.log(`Server is connected and running on PORT : ${process.env.PORT}`);
});
