import styles from "./CaseDescription.module.scss";
import gridSystem from "@/scss/grid-system.module.scss";

interface CaseDescriptionProps {
    title: string,
    description: Array<string>
}

export default function CaseDescription(props: CaseDescriptionProps) {
    return (
        <div className={styles.caseDescription}>
            <div className={styles.wrapper}>
                <div className={`${styles.content} ${gridSystem.grid}`}>
                    <div className={`${styles.left} ${styles.card} ${gridSystem.col4}`}>
                        <h4>{props.title}</h4>
                    </div>
                    <div className={`${styles.right} ${styles.card} ${gridSystem.col8}`}>
                        {props.description.map((desc, index) => (
                            <p key={index}>{desc}</p> // Iterate over the description array
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}