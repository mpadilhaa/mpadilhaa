require("dotenv").config

const express = require("express");
const path = require("path")
const cors = require("cors");

const app = express();
const port= process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () =>{
    console.log(`o servidor esta rodando na porta ${port}`)
})