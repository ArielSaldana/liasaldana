import styles from "./SectionTitle.module.scss"

interface SectionTitleProps {
    title: string,
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <div className={styles.sectionTitle}>
            <div className={styles.wrapper}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}