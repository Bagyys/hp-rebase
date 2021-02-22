const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({
  inOutValues: {
    i1: {
      type: Number,
      default: 0,
    },
    i2: {
      type: Number,
      default: 0,
    },
    i3: {
      type: Number,
      default: 0,
    },
    i4: {
      type: Number,
      default: 0,
    },
    i5: {
      type: Number,
      default: 0,
    },
    i6: {
      type: Number,
      default: 0,
    },
    i7: {
      type: Number,
      default: 0,
    },
    i8: {
      type: Number,
      default: 0,
    },
    i9: {
      type: Number,
      default: 0,
    },
    n1: {
      type: Number,
      default: 0,
    },
    n2: {
      type: Number,
      default: 0,
    },
    n3: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = EquipmentSchema;
