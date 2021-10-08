const router = require("express").Router();
const { handleLock } = require("../controllers/locks/handleLock");
const { addLock } = require("../controllers/locks/addLock");
const { openLock } = require("../controllers/locks/openLock");
const { resetLock } = require("../controllers/locks/resetLock");
<<<<<<< HEAD
<<<<<<< HEAD
const { deleteLock } = require("../controllers/locks/deleteLock");
=======
>>>>>>> 346a3f3 (new controller getAllLocks created)
=======
const { deleteLock } = require("../controllers/locks/deleteLock");
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
const { getAllLocks } = require("../controllers/locks/getAllLocks");

// Landing page route
router.put("/door/", handleLock);
router.put("/openLock/", openLock);
router.put("/lock/add/", addLock);
router.put("/reset/", resetLock);
<<<<<<< HEAD
<<<<<<< HEAD
router.delete("/delete/", deleteLock);
=======
>>>>>>> 346a3f3 (new controller getAllLocks created)
=======
router.delete("/delete/", deleteLock);
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
router.get("/allLocks/", getAllLocks);
module.exports = router;
