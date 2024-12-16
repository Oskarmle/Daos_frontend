import { createFileRoute } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";

import styles from "./profile.module.css";
import ProfileSection from "../../components/profileSection/ProfileSection";
import ProfilePosts from "../../components/profilePosts/ProfilePosts";

import { tokenVerification } from "../../auth/authGuard";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
  beforeLoad: tokenVerification,
});

// type for decoded token
type DecodedToken = {
  fullName: string;
  email: string;
  ensembleIds: string[];
  createdAt: string;
  id: string;
};

function ProfilePage() {
  // let decodedToken: DecodedToken | null = null;
  const token = localStorage.getItem("access_token");

  // default values
  let decodedToken: DecodedToken = {
    fullName: "Henter navn",
    email: "example@email.com",
    ensembleIds: [],
    createdAt: "Henter dato",
    id: "",
  };

  if (token) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }

  return (
    <div>
      <ProfileSection
        createdAt={decodedToken.createdAt}
        lastLoggedIn="Sidst logget ind 5 dage siden"
        profileImg="/img/profile-placeholder.png"
        profileName={decodedToken.fullName}
      ></ProfileSection>
      <div className={styles.line}></div>
      <ProfilePosts></ProfilePosts>
    </div>
  );
}
