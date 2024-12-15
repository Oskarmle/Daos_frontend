import styles from "./reviewBox.module.css";

type Reviewer = {
  reviewText: string;
  reviewImg: string;
  reviewName: string;
  reviewEnsemble: string;
};

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
