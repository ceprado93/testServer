const express = require("express");
const { join } = require("path");

module.exports = (app) => {
  app.use(express.static(join(__dirname, "..", "public")));
};
