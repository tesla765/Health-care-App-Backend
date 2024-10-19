const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  patients: [
    {
      patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
      }, 
      treatmentPlan: { type: String }, 
      doctorNotes: { type: String }, 
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    },
  ],
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Doctor", doctorSchema);
