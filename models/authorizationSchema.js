const mongoose = require("mongoose");

const authorizationSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctorId: { type: String, required: true }, 
  status: {
    type: String,
    enum: ["pending", "approved", "denied"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Authorization", authorizationSchema);
