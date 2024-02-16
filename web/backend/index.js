import express from "express";
import cors from "cors";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "spartify",
  password: "phear123",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/register", async (req, res) => {
  const username = req.body.uname;
  const result = await db.query(
    "INSERT INTO users (username) VALUES ($1)",
    [username]
  );
  console.log(result);
  res.json({'register': 'True'})
});

app.listen(port, () => {
  console.log("App running on port 8080");
});
