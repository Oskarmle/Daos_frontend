// Type for decoded token
export type DecodedToken = {
  fullName: string;
  email: string;
  ensembleIds: string[];
  createdAt: string;
  id: string;
};

// Type for user that are already registered in the ensemble
export type RegisteredUsers = {
  fullName: string;
  id: string;
};

// Type for object being mapped across EnsembleListPost component
export type PostElements = {
  name: string;
  size: string;
  city: string;
  genre: string;
  _id: string;
  registeredUsers: RegisteredUsers[];
};

// Type for payload being sent to server for user registering in ensemble
export type RegisteredUsersPayload = {
  registeredUsers: RegisteredUsers[];
};

// Type for ensemble map function in ensemble.index file
export type EnsemblePost = {
  city: string;
  name: string;
  activeMusicians: string;
  genre: string;
  _id: string;
  registeredUsers: RegisteredUsers[];
};

// Type for button props
export type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "disabled"
    | "noOutline"
    | "smallPrimary"
    | "smallSecondary";
};

// Type for profile section in profile.index file
export type ProfileInfo = {
  profileImg: string;
  profileName: string;
  createdAt: string;
  lastLoggedIn: string;
};

// Type for review component in index
export type Reviewer = {
  reviewText: string;
  reviewImg: string;
  reviewName: string;
  reviewEnsemble: string;
};

// Login form
export type LoginFormData = {
  email: string;
  password: string;
};

// Signup form
export type SignupFormData = {
  fullName: string;
  email: string;
  password: string;
  terms: boolean;
  newsletter?: boolean;
};

// Type for create ensemble
export type CreateEnsembleFormData = {
  name: string;
  description: string;
  website: string;
  zipCode: string;
  city: string;
  activeMusicians: string;
  practiceFrequency: string;
  practiceType: string;
  genre: string;
};
