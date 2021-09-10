const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.post("/", (req, res, next) => {
  helpers
    .createTasks(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  helpers
    .getTasks()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

module.exports = router;
