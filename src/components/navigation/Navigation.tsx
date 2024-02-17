import styles from "./Navigation.module.scss";
import {ReactComponent as LogoIcon} from '../../assets/lialogo.svg'

// const links = ["About", "Contact", "Playground"];
// const links = ["About"];
const links: string[] = [];

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className={styles.background}/>
            <div className={styles.logoWrapper}>
                <span>
                    <a href={"/"}>
                        <LogoIcon></LogoIcon>
                    </a>
                </span>
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