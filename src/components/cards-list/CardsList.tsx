import styles from "./CardsList.module.scss";

export default function CardsList() {
    return (
        <div className={styles.cardsList}>
            <div className={styles.title}>
                <h3>Case Studies</h3>
            </div>
            <div className={styles.listWrapper}>
                <ol>
                    <li>
                        <div className={styles.card}>
                            <h4>Unreal</h4>
                            <p>A crypto currency app that does it all</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}