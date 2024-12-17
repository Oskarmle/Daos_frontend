import styles from "./ensembleListPost.module.css";

type PostElements = {
  name: string;
  size: string;
  city: string;
  genre: string;
};

export default function EnsembleListPost({ name, size, city, genre }: PostElements) {
  return (
    <div className={styles.ensembleListPostContainer}>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.sizeCityContainer}>
          <p className={styles.size}>{`Størrelse på ensemble: ${size}`}</p>
          <p className={styles.city}>{`Vi spiller i ${city}`}</p>
          <p className={styles.genre}>{`Vores genre er ${genre}`}</p>
        </div>
      </div>
      <div className={styles.bottomBox}></div>
    </div>
  );
}
