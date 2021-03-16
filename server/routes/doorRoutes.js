const router = require("express").Router();
const {
  handleDoor,
  openLock,
  reset,
} = require("../controllers/doorController");

// Landing page route
router.put("/door/", handleDoor);
router.put("/openLock/", openLock);
router.put("/reset/", reset);
module.exports = router;
