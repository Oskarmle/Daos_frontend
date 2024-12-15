import { createFileRoute } from "@tanstack/react-router";

import styles from "./profile.module.css";
import ProfileSection from "../../components/profileSection/ProfileSection";
import ProfilePosts from "../../components/profilePosts/ProfilePosts";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div>
      <ProfileSection
        createdAt="Opretted Maj 2020"
        lastLoggedIn="Sidst logget ind 5 dage siden"
        profileImg="/img/profile-placeholder.png"
        profileName="Susanne Nielsen"
      ></ProfileSection>
      <div className={styles.line}></div>
      <ProfilePosts></ProfilePosts>
    </div>
  );
}
