import { Schema, model, models } from "mongoose";

const CandidateSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^\d{10}$/.test(value),
      message: "Phone number must be a 10-digit number",
    },
  },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },

  experiences: [
    {
      jobTitle: { type: String },
      companyName: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      stillWorking: Boolean,
    },
  ],
  qualifications: [
    {
      degree: { type: String, required: true },
      completingYear: { type: String, required: true },
      institute: { type: String, required: true },
    },
  ],

  applicant: { type: Schema.Types.ObjectId, ref: "User" },
  appliedJobs: [{ type: Schema.Types.ObjectId, ref: "Jobs" }],
  creator: { type: Schema.Types.ObjectId, ref: "User" },
});

const Candidate = models.Candidate || model("Candidate", CandidateSchema);

export default Candidate;
