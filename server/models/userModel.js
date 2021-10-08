const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // user email
    email: { type: String, unique: true, index: true },

    // user password
    password: { type: String, required: true },

    // user name for display on platform
    name: { type: String, required: true },

    // has the user verified email
    isVerified: { type: Boolean, required: true, default: false },

    // user verify token
    verifyToken: { type: String },

    // user email change token
    changeEmailToken: { type: String },

    // user password change token
    passwordResetToken: { type: String },

    // user role
    role: {
      type: String,
      enum: ["admin", "owner", "service", "client"],
      //   default: "client",
    },

    // user legal entity
    legalEntity: {
      type: String,
      enum: ["person", "company"],
    },
  },
  { timestamps: true }
);
module.exports = {
  User: mongoose.model("User", userSchema),
  userSchema: userSchema,
};
