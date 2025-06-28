import styles from "./Card.module.css";

export default function Card() {
    return (
        <div className={styles.page}>
            <div className={styles['card-wrapper']}>
                <div className={`${styles.card} ${styles.digital} ${styles.two}`}>
                    <div className={styles['card-top']}>
                        <span>Virtual</span>
                        <img src="https://assets.codepen.io/14762/airwallex-virtual.svg">
                        </img>
                    </div>
                    <div className={styles['card-bottom']}>
                        <div className={styles['card-name']}>
                            <p>Cardholder</p>
                            <p>Mike Trilford</p>
                        </div>
                        <img src="https://assets.codepen.io/14762/visa-virtual.svg">
                        </img>
                    </div>
                </div>
            </div>
        </div>
    );
}