import styles from "./Hero.module.scss"

export default function Hero() {
    return (
        <div className={styles.homepageHero}>
            <div className={styles.contentWrapper}>
                <h1>Hi, I'm <span>Lia Saldana</span>, a Product Designer located in New York City.</h1>
                <p>Currently curious about web 3.0 and how to make it accessible to non-technical users.</p>
            </div>
        </div>
    )
}