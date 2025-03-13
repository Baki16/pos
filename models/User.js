const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["waiter", "manager"], required: true },
  pin: { type: String, required: true },
});

// Hash PIN pre nego što se sačuva u bazi
UserSchema.pre("save", async function (next) {
  if (!this.isModified("pin")) return next();
  const salt = await bcrypt.genSalt(10);
  this.pin = await bcrypt.hash
  (this.pin, salt);
  next();
});

// Provera PIN-a
UserSchema.methods.matchPin = async function (enteredPin) {
  return await bcrypt.compare(enteredPin, this.pin);
};

module.exports = mongoose.model("User", UserSchema);