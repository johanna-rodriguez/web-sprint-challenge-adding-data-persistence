const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.post("/", (req, res, next) => {
  helpers
    .createProjects(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  helpers
    .getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

module.exports = router;
