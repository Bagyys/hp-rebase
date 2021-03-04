const router = require("express").Router();
const { getDoor, switchDoor } = require("../controllers/doorController");

// Landing page route
router.put("/door/", getDoor);
router.put("/doorSwitch/", switchDoor);
module.exports = router;
