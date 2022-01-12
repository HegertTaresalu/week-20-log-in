const express = require('express');
const router = express.router();
const mainController = require("../controller/mainController");

router.get("/", mainController.getLoginpage); 
router.get("/register", mainController.getRegisterPage);
router.post("/register",mainController.postRegister);
router.get("/login",mainController.getLoginpage);
router.post("/login",mainController.postLoginPage);
router.get("/secrets",mainController.getSecretsPage);

router.get("/logout",mainController.getLogOut);

module.exports = router;
