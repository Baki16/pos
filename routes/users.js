const express = require("express");
const router = express.Router();
const { loginWithPin, getWaiterTables } = require("../controllers/userController");

router.post("/login", loginWithPin); // Prijava konobara
router.get("/:userId/tables", getWaiterTables); // Dohvati stolove konobara

module.exports = router;
