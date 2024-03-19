export type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
};

export type UpdateUserParams =
  | AccountSettings
  | SummarySection
  | ReligionSection
  | AppearanceSection
  | OccupationSection
  | GoalsSection
  | FamilySection
  | SpouseSection
  | ContactSection;

export type AccountSettings = {
  email: string;
  username: string;
};

export type SummarySection = {
  name: string;
  dob: string;
  gender: string;
  location: {
    country: string;
    state: string;
  };
  status: string;
  bio: string;
  highlights: string[];
};

export type ReligionSection = {
  religion: {
    aqeedah: string;
    madhab: string;
    practice: string;
    knowledge: string;
  };
};

export type AppearanceSection = {
  appearance: {
    height: string;
    weight: string;
    complexion: string;
    build: string;
    description: string;
  };
};

export type OccupationSection = {
  occupation: {
    tags: string[];
    description: string;
  };
};

export type GoalsSection = {
  goals: {
    shortTerm: string[];
    longTerm: string[];
  };
};

export type FamilySection = {
  family: {
    countries: string[];
    languages: string[];
    description: string;
  };
};

export type SpouseSection = {
  spouse: {
    tags: string[];
    qualities: string[];
    dealBreakers: string[];
  };
};

export type ContactSection = {
  contact: {
    phone: string;
    email: string;
  };
};
