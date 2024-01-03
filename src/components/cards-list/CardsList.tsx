import styles from "./CardsList.module.scss";
import unrealImage from '../../assets/unreal-proj.png'

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
                            <img src={unrealImage} alt="Unreal"/>
                            <h4>Unreal</h4>
                            <p>A crypto currency app that does it all</p>
                        </div>
                    </li>

                    <li>
                        <div className={styles.card}>
                            <img src={unrealImage} alt="Unreal"/>
                            <h4>Unreal</h4>
                            <p>A crypto currency app that does it all</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}