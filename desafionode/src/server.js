const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

class App {
  constructor() {
    this.express = express();
    this.views();
    this.routes();
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: false }));
  }

  views() {
    nunjucks.configure(path.resolve(__dirname, "app", "views"), {
      watch: true,
      express: this.express,
      autoescape: true
    });

    this.express.set("view engine", "njk");
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
