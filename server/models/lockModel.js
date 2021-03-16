const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = {
  Lock: mongoose.model("Lock", lockSchema),
  lockSchema: lockSchema,
};
