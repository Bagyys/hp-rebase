const router = require("express").Router();
const { getDoor } = require("../controllers/doorQuery");

// Landing page route
router.put("/door/", getDoor);

module.exports = router;
