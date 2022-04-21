var express = require("express");
var router = express.Router();

const jsonDataObj = require("./jsonData");

const huboListData = jsonDataObj.huboListData;
const huboInfoData = jsonDataObj.huboInfoData;
const promiseFieldList = jsonDataObj.promiseFieldList;
const huboPromiseData = jsonDataObj.huboPromiseData;

/* GET home page. */
router.get("/", function (_req, res) {
  res.render("index", { title: "Express" });
});

router.get("/hubolist", function (_req, res) {
  res.status(200).json({ huboListData });
});

router.get("/huboinfo", function (_req, res) {
  res.status(200).json({ huboInfoData });
});

router.get("/field/list", function (_req, res) {
  res.status(200).json({ promiseFieldList });
});

router.get("/hubo/promise", function (_req, res) {
  res.status(200).json({ huboPromiseData });
});

module.exports = router;
