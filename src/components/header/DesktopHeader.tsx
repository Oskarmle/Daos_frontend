import Button from "../button/Button";
import styles from "./desktopHeader.module.css";

export default function DesktopHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
        <h1>Musik Samspil</h1>
        <p>Skabt af DAOS - Dansk amatørokester samvirke</p>
      </div>
      <div className={styles.buttonGroup}>
        <Button buttonText="Opslag" variant="noOutline"></Button>
        <Button buttonText="Profil" variant="noOutline"></Button>
        <Button buttonText="Opret profil" variant="primary"></Button>
        <Button buttonText="Log ind" variant="secondary"></Button>
      </div>
    </div>
  );
}
