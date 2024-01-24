import styles from "./CaseDescription.module.scss";

interface CaseDescriptionProps {
    title: string,
    description: string
}

export default function CaseDescription(props: CaseDescriptionProps) {
    return (
        <div className={styles.caseDescription}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={`${styles.left} ${styles.card}`}>
                        <h4>{props.title}</h4>
                    </div>
                    <div className={`${styles.right} ${styles.card}`}>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}