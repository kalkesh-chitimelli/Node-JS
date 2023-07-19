import express from "express";

const app = express();

const userFunc = (req, res) => {
  res.status(200).json({ message: "Hello! World..." });
};

app.get("/helloApi", userFunc);

export default app;
