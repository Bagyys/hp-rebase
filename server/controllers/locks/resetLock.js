const { Lock } = require("../../models/lockModel");
const { reset } = require("./utils/lock");
let debug = require("debug");

exports.resetLock = async (req, res) => {
  console.log("reset");
  console.log("req.query");
  console.log(req.query);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3932397
  const data = req.query;

  if (!data.h || data.h !== "A3%nm*Wb") {
    return res.status(404).send("netu metki");
  }
  if (data.id === undefined || data.id.length !== 24) {
    console.log("data id undefined or too short");
    console.log("send error");
    return res.status(404).send("nepravelnyj id");
  }
  try {
    const resetLock = await Lock.findByIdAndUpdate(
      data.id,
      {
        $set: {
          o1: 0,
          o2: 0,
        },
        $push: {
          [`lockClosed.o1`]: { time: new Date(), user: "reset button click" },
          [`lockClosed.o2`]: { time: new Date(), user: "reset button click" },
        },
      },
      { new: true }
    );
    if (resetLock === undefined || resetLock === null) {
      return res.status(404).send("e11");
    } else {
      return res.status(200).send(resetLock);
    }
  } catch (err) {
    console.log("send error");
    console.log(err);
    return res.status(404).send("nepravelnyj id");
  }
<<<<<<< HEAD
=======
=======
  const { id } = req.query;
=======
  const data = req.query;
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)

  if (!data.h || data.h !== "A3%nm*Wb") {
    return res.status(404).send("netu metki");
  }
  if (data.id === undefined || data.id.length !== 24) {
    console.log("data id undefined or too short");
    console.log("send error");
    return res.status(404).send("nepravelnyj id");
  }
  try {
    const resetLock = await Lock.findByIdAndUpdate(
      data.id,
      {
        $set: {
          o1: 0,
          o2: 0,
        },
        $push: {
          [`lockClosed.o1`]: { time: new Date(), user: "reset button click" },
          [`lockClosed.o2`]: { time: new Date(), user: "reset button click" },
        },
      },
      { new: true }
    );
    if (resetLock === undefined || resetLock === null) {
      return res.status(404).send("e11");
    } else {
      return res.status(200).send(resetLock);
    }
  } catch (err) {
    console.log("send error");
    console.log(err);
    return res.status(404).send("nepravelnyj id");
  }
<<<<<<< HEAD
  return res.status(200).send(resetLock);
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
};
