const { Lock } = require("../../models/lockModel");
const { reset } = require("./utils/lock");
let debug = require("debug");

exports.resetLock = async (req, res) => {
  console.log("reset");
  console.log("req.query");
  console.log(req.query);
  const { id } = req.query;

  const resetLock = await Lock.findOneAndUpdate(
    { lockId: id },
    {
      $set: {
        o1: 0,
        o2: 0,
      },
      $push: { [`closed.o1`]: new Date(), [`closed.o2`]: new Date() },
    },
    { new: true }
  );
  if (resetLock === undefined || resetLock === null) {
    return res.status(404).send("No lock found by ID");
  }
  return res.status(200).send(resetLock);
};
