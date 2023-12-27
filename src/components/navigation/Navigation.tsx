import styles from "./Navigation.module.scss";

const links = ["About", "Contact", "Playground"];

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className={styles.logoWrapper}>
                <span>Lia</span>
            </div>
            <nav className={styles.navLinks}>
                {links.map(link => (
                    <a key={link} href={`/${link.toLowerCase()}`}>
                        {link}
                    </a>
                ))}
            </nav>
        </div>
    )
}