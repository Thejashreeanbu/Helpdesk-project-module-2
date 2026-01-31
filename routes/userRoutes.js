const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/create", controller.createUser);
router.get("/", controller.getUsers);
router.put("/:id", controller.updateUser);
router.put("/deactivate/:id", controller.deactivateUser);

module.exports = router;
