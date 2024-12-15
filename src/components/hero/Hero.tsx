import Button from '../button/Button'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <main className={styles.heroContainer}>
        <div className={styles.contentLeft}>
            <h1>Stedet hvor amatørmusikere finder hinanden og spiller musik sammen</h1>
            <div className={styles.heroButtons}>
                <Button variant='secondary' buttonText='Vælg instrument'></Button> {/* Need to add dropdown component */}
                <Button variant='primary' buttonText='Se opslag'></Button>
            </div>
        </div>
        <div className={styles.contentRight}>
            <img src="/img/frontpage_illustration.svg" alt="" />
        </div>
    </main>
  )
}
