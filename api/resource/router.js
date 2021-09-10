// build your `/api/resources` router here
const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.post("/", (req, res, next) => {
  helpers
    .createResources(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.get("/", async (req, res, next) => {
  helpers
    .getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

module.exports = router;
