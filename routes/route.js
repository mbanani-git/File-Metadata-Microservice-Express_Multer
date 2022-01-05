const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./public/data/uploads/" });
const router = express.Router();

const { getInfo } = require("../controllers/controller");

router.post("/api/fileanalyse", upload.single("file"), getInfo);

module.exports = router;
