import styles from "./LargeImageDisplay.module.scss";
import unrealWalletImage from "@/assets/unreal_wallet_preview.jpeg";
export default function LargeImageDisplay() {
    return (
        <div className={styles.largeImageDisplay}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img src={unrealWalletImage} alt="unreal wallet"/>
                </div>
            </div>
        </div>
    )
}