import Button from "../button/Button";
import styles from "./footer.module.css";

export default function DesktopFooter() {
  // Actually not a scam, source: trust me bro
  const handleGetScammedClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.left}>
        <h2>MUSIK SAMSPIL</h2>
        <div className={styles.leftContent}>
          <div className={styles.pageLinks}>
            <Button buttonText="Se opslag" variant="tertiary"></Button>
            <Button buttonText="Profil" variant="tertiary"></Button>
          </div>
          <div className={styles.socials}>
            <a href="www.instagram.com">
              <img
                className={styles.socialIcon}
                src="/img/footer-instagram.svg"
                alt="Instagram icon in the footer"
              />
            </a>
            <a href="www.facebook.com">
              <img
                className={styles.socialIcon}
                src="/img/footer-facebook.svg"
                alt="Facebook icon in the footer"
              />
            </a>
            <a href="www.linkedin.com">
              <img
                className={styles.socialIcon}
                src="/img/footer-linkedin.svg"
                alt="Linkedin icon in the footer"
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <img
          src="/img/footer-music.svg"
          alt="Illustration of a collection of musical sheet notes"
        />
        <p onClick={handleGetScammedClick}>Privatlivspolitik</p>
      </div>
      <div className={styles.right}>
        <div className={styles.whiteBox}>
          <p>BRAGT TIL DIG AF</p>
          <img src="/img/logo2_gennemsigtig.png" alt="DAOS logo illustration" />
        </div>
      </div>
    </div>
  );
}
