import Button from "../button/Button";
import styles from "./desktopHeader.module.css";

import { useRouter } from "@tanstack/react-router";

const token = localStorage.getItem("access_token");

export default function DesktopHeader() {
  const router = useRouter();

  const handleOpslagClick = () => {
    router.navigate({ to: "/posts" });
  };
  const handleProfileClick = () => {
    router.navigate({ to: "/profile" });
  };
  const handleCreateProfileClick = () => {
    router.navigate({ to: "/auth/signup" });
  };
  const handleLoginClick = () => {
    router.navigate({ to: "/auth/login" });
  };
  const handleHomeClick = () => {
    router.navigate({ to: "/" });
  };
  const handleEnsembleClick = () => {
    router.navigate({ to: "/ensemble" });
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("access_token");
    alert("Du er nu logget ud");
    window.location.reload();
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle} onClick={handleHomeClick}>
        <h1>Musik Samspil</h1>
        <p>Skabt af DAOS - Dansk amatørokester samvirke</p>
      </div>
      <div className={styles.buttonGroup}>
        <Button
          buttonText="Opslag"
          variant="noOutline"
          onClick={handleOpslagClick}
        ></Button>
        <Button
          buttonText="Profil"
          variant="noOutline"
          onClick={handleProfileClick}
        ></Button>
        <Button
          buttonText="Se ensembles"
          variant="noOutline"
          onClick={handleEnsembleClick}
        ></Button>
        <Button
          buttonText="Opret profil"
          variant="primary"
          onClick={handleCreateProfileClick}
        ></Button>
        {!token ? (
          <Button
            buttonText="Log ind"
            variant="secondary"
            onClick={handleLoginClick}
          ></Button>
        ) : (
          <Button
            buttonText="Log ud"
            variant="secondary"
            onClick={handleLogoutClick}
          ></Button>
        )}
      </div>
    </div>
  );
}
