import styles from "./Hero.module.scss"

export default function Hero() {
    return (
        <div className={styles.homepageHero}>
            <div className={styles.contentWrapper}>
                <h1>Hi, I'm <span><em>Lia Saldana</em></span><br/>A Product Designer <br/>Located in New York City.</h1>
                <p>Currently curious about web 3.0 and how to make it accessible to non-technical users.</p>
            </div>
        </div>
    )
}