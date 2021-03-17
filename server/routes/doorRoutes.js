const router = require("express").Router();
const { handleLock } = require("../controllers/locks/handleLock");
const { addLock } = require("../controllers/locks/addLock");
const { openLock } = require("../controllers/locks/openLock");
const { resetLock } = require("../controllers/locks/resetLock");

// Landing page route
router.put("/door/", handleLock);
router.put("/openLock/", openLock);
router.put("/lock/add/", addLock);
router.put("/reset/", resetLock);
module.exports = router;
