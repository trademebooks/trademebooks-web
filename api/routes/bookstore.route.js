const express = require("express");
const router = express.Router();

const bookstoreController = require("../controllers/bookstore.controller");

router.get("/:username", bookstoreController.getBookstoreByUsername);
router.put("/:bookstoreId", bookstoreController.updateBookstore);

module.exports = router;
