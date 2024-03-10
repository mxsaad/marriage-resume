import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  emailAdress: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  location: {
    country: { type: String, required: true },
    state: { type: String, required: true },
  },
  status: { type: String, required: true },
  bio: { type: String, required: true },
  highlights: { type: [String] },

  religion: {
    aqeedah: { type: String, required: true },
    madhab: { type: String, required: true },
    practice: { type: String, required: true },
    knowledge: { type: String, required: true },
  },

  appearance: {
    height: { type: String, required: true },
    weight: { type: String, required: true },
    complexion: { type: String, required: true },
    build: { type: String, required: true },
    description: { type: String, required: true },
  },
  
  occupation: {
    tags: { type: [String] },
    description: { type: String, required: true },
  },

  goals: {
    shortTerm: { type: [String], required: true },
    longTerm: { type: [String], required: true },
  },

  family: {
    countries: { type: [String], required: true },
    languages: { type: [String], required: true },
    description: { type: String, required: true },
  },

  spouse: {
    tags: { type: [String] },
    qualities: { type: [String], required: true},
    dealBreakers: { type: [String], required: true },
  },

  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

const User = models.User || model('User', UserSchema);

export default User;
