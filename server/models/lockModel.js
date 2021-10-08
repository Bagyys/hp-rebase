const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3932397
const lockSchema = new Schema(
  {
    // lock id
    // lockId: { type: String, required: false },
    
<<<<<<< HEAD
=======
=======
const lockSchema = new Schema(
  {
    // lock id
<<<<<<< HEAD
    lockId: { type: String, required: false },
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
    // lockId: { type: String, required: false },
    
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
    // interval for lock
    timeInterval: { type: Number, default: 1 },
    // parameters
    i1: { type: Number, default: 0 },
    i2: { type: Number, default: 0 },
    i3: { type: Number, default: 0 },
    i4: { type: Number, default: 0 },
    i5: { type: Number, default: 0 },
    i6: { type: Number, default: 0 },
    i7: { type: Number, default: 0 },
    i8: { type: Number, default: 0 },
    i9: { type: Number, default: 0 },
    // states
    o1: { type: Number, default: 0 },
    o2: { type: Number, default: 0 },
    o3: { type: Number, default: 0 },
    // error
    // do we need to save error?
<<<<<<< HEAD
    e: { type: String, default: "0" },
=======
<<<<<<< HEAD
<<<<<<< HEAD
    e: { type: String, default: "0" },
=======
    e: { type: Number, default: 0 },
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
    e: { type: String, default: "0" },
>>>>>>> 2bd527a (handleDoor controller errors fixed)
>>>>>>> 3932397
    lockOpened: new Schema(
      {
        o1: [
          new Schema(
            {
              time: { type: Date },
              user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
            },
            { _id: false }
          ),
        ],
        o2: [
          new Schema(
            {
              time: { type: Date },
              user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
            },
            { _id: false }
          ),
        ],
      },
      { _id: false }
    ),
    lockClosed: new Schema(
      {
        o1: [
          new Schema(
            {
              time: { type: Date },
<<<<<<< HEAD
              // user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
              user: { type: String }, // if closed by system - what user???
=======
<<<<<<< HEAD
<<<<<<< HEAD
              // user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
              user: { type: String }, // if closed by system - what user???
=======
              user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
              // user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
              user: { type: String }, // if closed by system - what user???
>>>>>>> 650741c (minor fixes)
>>>>>>> 3932397
            },
            { _id: false }
          ),
        ],
        o2: [
          new Schema(
            {
              time: { type: Date },
<<<<<<< HEAD
              // user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
              user: { type: String }, // if closed by system - what user???
=======
<<<<<<< HEAD
<<<<<<< HEAD
              // user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
              user: { type: String }, // if closed by system - what user???
=======
              user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
=======
              // user: { type: Schema.Types.ObjectId, ref: "User" }, // if closed by system - what user???
              user: { type: String }, // if closed by system - what user???
>>>>>>> 650741c (minor fixes)
>>>>>>> 3932397
            },
            { _id: false }
          ),
        ],
      },
      { _id: false }
    ),
  },
  { timestamps: true }
);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
const lockSchema = new Schema({
  // lock id
  lockId: { type: String, required: true },
  // interval for lock
  interval: { type: Number, default: 1 },
  // parameters
  i1: { type: Number, default: 0 },
  i2: { type: Number, default: 0 },
  i3: { type: Number, default: 0 },
  i4: { type: Number, default: 0 },
  i5: { type: Number, default: 0 },
  i6: { type: Number, default: 0 },
  i7: { type: Number, default: 0 },
  i8: { type: Number, default: 0 },
  i9: { type: Number, default: 0 },
  // states
  o1: { type: Number, default: 0 },
  o2: { type: Number, default: 0 },
  o3: { type: Number, default: 0 },
  // error
  // do we need to save error?
  e: { type: Number, default: 0 },
  opened: new Schema(
    {
      o1: [{ type: Date }],
      o2: [{ type: Date }],
    },
    { _id: false }
  ),
  closed: new Schema(
    {
      o1: [{ type: Date }],
      o2: [{ type: Date }],
    },
    { _id: false }
  ),
});
>>>>>>> a4143a5 (algorithm updates front to back)
=======
>>>>>>> 097b98d (updated lockModel and  controllers folder structure and created new controller addLock)
>>>>>>> 3932397

module.exports = {
  Lock: mongoose.model("Lock", lockSchema),
  lockSchema: lockSchema,
};
