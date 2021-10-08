const { Lock } = require("../../../models/lockModel");
// let debug = require("debug");

<<<<<<< HEAD
<<<<<<< HEAD
exports.reset = async (lockId, n1, n3, error) => {
  // updatedLock = await Lock.findOneAndUpdate(
  updatedLock = await Lock.findByIdAndUpdate(
    // { lockId: data.id },
    lockId,
<<<<<<< HEAD
=======
exports.reset = async (lockId, n1, n3) => {
=======
exports.reset = async (lockId, n1, n3, error) => {
>>>>>>> 2bd527a (handleDoor controller errors fixed)
  const updatedLock = await Lock.findOneAndUpdate(
    { lockId: lockId },
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
>>>>>>> 6cda7ff (controller errors fixed)
    {
      $set: {
        // i1: data.i1,
        // i2: data.i2,
        // i3: data.i3,
        // i4: data.i4,
        // i5: data.i5,
        // i6: data.i6,
        // i7: data.i7,
        // i8: data.i8,
        // i9: data.i9,
        o1: 0,
        o2: 0,
        o3: 0,
<<<<<<< HEAD
<<<<<<< HEAD
        e: error,
      },
      $push: {
        [`lockClosed.o1`]: { time: new Date(), user: "system reset" },
        [`lockClosed.o2`]: { time: new Date(), user: "system reset" },
      },
<<<<<<< HEAD
=======
=======
        e: error,
>>>>>>> 2bd527a (handleDoor controller errors fixed)
      },
      $push: { [`closed.o1`]: new Date(), [`closed.o2`]: new Date() },
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
>>>>>>> 650741c (minor fixes)
    },
    { new: true }
  );
  // get values to return from updated door
  const {
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    o1,
    o2,
    o3,
<<<<<<< HEAD
<<<<<<< HEAD
    timeInterval: t,
=======
    interval: t,
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
    timeInterval: t,
>>>>>>> 2bd527a (handleDoor controller errors fixed)
    e,
  } = updatedLock;
  const n2 = 0;
  const result = `A3%nm*Wb&ID=Lg18299RHS10MxSh&i1=${i1}&$i2=${i2}&i3=${i3}&i4=${i4}&i5=${i5}&i6=${i6}&i7=${i7}&i8=${i8}&i9=${i9}&n1=${n1}&n2=${n2}&n3=${n3}&o1=${o1}&o2=${o2}&o3=${o3}&t=${t}&e=${e}`;
  return result;
};
