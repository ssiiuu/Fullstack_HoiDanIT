import express from "express";

let cofigViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = cofigViewEngine;
