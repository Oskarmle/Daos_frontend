import { Reviewer } from "../../types/types";
import styles from "./reviewBox.module.css";

export default function ReviewBox({
  reviewText,
  reviewImg,
  reviewName,
  reviewEnsemble,
}: Reviewer) {
  return (
    <div className={styles.reviewBox}>
      <p className={styles.review}>{reviewText}</p>
      <div className={styles.reviewPerson}>
        <img src={reviewImg} alt="" />
        <p className={styles.reviewName}>{reviewName}</p>
        <p className={styles.reviewEnsemble}>{reviewEnsemble}</p>
      </div>
    </div>
  );
}
