const { Lock } = require("../../models/lockModel");
// const { resetLock } = require("./utils/lock");
// let debug = require("debug");

exports.getAllLocks = async (req, res) => {
  console.log("getAllLocks");
  console.log("req.query");
  console.log(req.query);
  const data = req.query;

  if (!data.h || data.h !== "A3%nm*Wb") {
    return res.status(404).send("netu metki");
  }

  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
    const locks = await Lock.find(
      {},
      { lockOpened: 0, lockClosed: 0, createdAt: 0, updatedAt: 0, __v: 0 }
    );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const locks = await Lock.find({}, { o1: 1, o2: 1, o3: 1 });
>>>>>>> 346a3f3 (new controller getAllLocks created)
=======
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
    if (locks !== undefined || locks !== null) {
      return res.status(200).send(locks);
    } else {
      console.log("send error");
      return res.status(404).send("oshibka");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
