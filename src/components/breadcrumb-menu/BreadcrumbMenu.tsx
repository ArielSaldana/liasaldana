import styles from "./BreadcrumbMenu.module.scss";
import {useEffect} from "react";

export default function BreadcrumbMenu() {
    useEffect(() => {

    }, []);

    return (
        <div className={styles.breadcrumbMenu}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <ol>
                        <li><a href={"/"}><span>Home</span></a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}