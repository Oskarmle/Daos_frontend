import Button from "../button/Button";
import styles from "./profilePost.module.css";

export default function ProfilePosts() {
  return (
    <div className={styles.profilePostContainer}>
      <div className={styles.postHeader}>
        <h1>Mine opslag</h1>
        <Button buttonText="Opret" variant="secondary"></Button>
      </div>
      <div className={styles.postContainer}>
        <h1>COMING SOON</h1>
      </div>
    </div>
  );
}
