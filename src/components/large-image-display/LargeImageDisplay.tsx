import styles from "./LargeImageDisplay.module.scss";

interface LargeImageDisplayProps {
    image: string,
    altText: string
}
export default function LargeImageDisplay(props: LargeImageDisplayProps) {
    return (
        <div className={styles.largeImageDisplay}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img src={props.image} alt={props.altText}/>
                </div>
            </div>
        </div>
    )
}