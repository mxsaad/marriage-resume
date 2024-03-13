import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  name: { type: String },
  dob: { type: Date },
  gender: { type: String },
  location: {
    country: { type: String },
    state: { type: String },
  },
  status: { type: String },
  bio: { type: String },
  highlights: { type: [String] },

  religion: {
    aqeedah: { type: String },
    madhab: { type: String },
    practice: { type: String },
    knowledge: { type: String },
  },

  appearance: {
    height: { type: String },
    weight: { type: String },
    complexion: { type: String },
    build: { type: String },
    description: { type: String },
  },

  occupation: {
    tags: { type: [String] },
    description: { type: String },
  },

  goals: {
    shortTerm: { type: [String] },
    longTerm: { type: [String] },
  },

  family: {
    countries: { type: [String] },
    languages: { type: [String] },
    description: { type: String },
  },

  spouse: {
    tags: { type: [String] },
    qualities: { type: [String] },
    dealBreakers: { type: [String] },
  },

  contact: {
    email: { type: String },
    phone: { type: String },
  },
});

const User = models.User || model("User", UserSchema);

export default User;
