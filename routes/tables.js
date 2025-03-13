const express = require("express");
const router = express.Router();
const { getTables, createTable } = require("../controllers/tableController");

router.get("/", getTables); // Dohvati sve stolove
router.post("/", createTable); // Dodaj novi sto

module.exports = router;
