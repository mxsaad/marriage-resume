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
  bio: { type: String },
  highlights: { type: [String] },

  religion: {
    aqeedah: { type: String, required: true, default: 'Sunni' },
    madhab: { type: String, required: true, default: 'Hanafi' },
    practice: { type: String },
    knowledge: { type: String },
  },

  appearance: {
    height: { type: String, required: true, default: '5\'8' },
    weight: { type: String, required: true, default: '150' },
    complexion: { type: String, required: true, default: 'Fair' },
    build: { type: String, required: true, default: 'Average' },
    dress: { type: String },
    grooming: { type: String },
    other: { type: String },
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
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

const User = models.User || model('User', UserSchema);

export default User;
