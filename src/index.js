require("dotenv").config();

const express = require("express");
const knex = require("./conexao.js");
const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {
  try {
    const response = await knex("deployaula").select("*");
    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
});

app.get("/", async (req, res) => {
  return res.json("API ok");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
