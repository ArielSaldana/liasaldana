import styles from "./BreadcrumbMenu.module.scss";
import {useEffect} from "react";

export default function BreadcrumbMenu() {
    useEffect(() => {

    }, []);

    return (
        <div className={styles.breadcrumbMenu}>
            <ol>
                <li><a href={"/"}><span>Home</span></a></li>
            </ol>
        </div>
    )
}