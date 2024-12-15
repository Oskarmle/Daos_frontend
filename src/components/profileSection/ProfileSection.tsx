import Button from "../button/Button";
import styles from "./profileSection.module.css";

type ProfileInfo = {
  profileImg: string;
  profileName: string;
  createdAt: string;
  lastLoggedIn: string;
};

export default function ProfileSection({
  profileImg,
  profileName,
  createdAt,
  lastLoggedIn,
}: ProfileInfo) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <img src={profileImg} alt="Profile image of logged in user" />
        <div className={styles.profileText}>
          <h1 className={styles.name}>{profileName}</h1>
            <p className={styles.secondaryText}>{createdAt}</p>
            <p className={styles.secondaryText}>{lastLoggedIn}</p>
        </div>
      </div>
      <div className={styles.profileButtons}>
        <Button buttonText="Rediger profil" variant="secondary"></Button>
        <Button buttonText="Indstillinger" variant="secondary"></Button>
      </div>
    </div>
  );
}
