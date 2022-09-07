const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    default: null,
  },
  awd: {
    type: Number,
    default: 0,
  },
  awd_renewalTime: {
    type: Date,
    default: Date.now(),
  },
  verify: {
    type: Boolean,
    default: false,
  }

});

UserSchema.virtual("userId").get(function () {
 return this._id.toHexString();
});

UserSchema.set("toJSON", {
 virtuals: true,
});

module.exports = { User: mongoose.model("User", UserSchema) };
