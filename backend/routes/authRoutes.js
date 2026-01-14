const router = require("express").Router();
const c = require("../controllers/authController");
const auth = require("../middleware/auth");

router.post("/register",c.register);
router.post("/login",c.login);
router.get("/profile",auth,c.profile);

module.exports = router;