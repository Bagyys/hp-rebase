const { Lock } = require("../../models/lockModel");
// const { resetLock } = require("./utils/lock");
// let debug = require("debug");

exports.openLock = async (req, res) => {
  console.log("openDoor");
  console.log("req.query");
  console.log(req.query);
  const data = req.query;

  if (!data.h || data.h !== "A3%nm*Wb") {
    return res.status(404).send("netu metki");
  }
  try {
    let openedLock;

    // ar reikia apsidrausti, kai jau esama o1 open = true? arba o2 open = true?
    if (data.o1 != undefined && data.o1 == 1) {
      // ar praeina
      // openedLock = await Lock.findOneAndUpdate(
      openedLock = await Lock.findByIdAndUpdate(
        // { lockId: data.id },
        data.id,
        {
          $set: { o1: +data.o1 },
          $push: {
            [`lockOpened.o1`]: { time: new Date(), user: "button click" },
          },
        },
        { new: true }
      );
      if (openedLock === undefined || openedLock === null) {
        return res.status(404).send("No doors found by ID");
      }
    }
    if (data.o2 != undefined && data.o2 == 1) {
      // openedLock = await Lock.findOneAndUpdate(
      openedLock = await Lock.findByIdAndUpdate(
        // { lockId: data.id },
        {
          $set: { o2: +data.o2 },
          $push: {
            [`lockOpened.o2`]: { time: new Date(), user: "button click" },
          },
        },
        { new: true }
      );
      if (openedLock === undefined || openedLock === null) {
        return res.status(404).send("No doors found by ID");
      }
    }

    if (openedLock === undefined || openedLock === null) {
      return res.status(404).send("e11");
    }
    return res.status(200).send(openedLock);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
