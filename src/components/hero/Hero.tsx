import styles from "./Hero.module.scss"
import {useLenis} from "@studio-freight/react-lenis";
import {useRef} from "react";

export default function Hero() {
    const changeDistance = 50;
    const heroRef = useRef(null);
    useLenis(({ scroll}) => {
        const hero = heroRef.current;
        if (scroll > changeDistance) {
            hero!.classList.add(styles.active);
        } else {
            hero!.classList.remove(styles.active);
        }
    })
    return (
        <div ref={heroRef} className={styles.homepageHero}>
            <div className={styles.contentWrapper}>
                <h1>Hi, I'm <span><em>Lia Saldana</em></span><br/>A Product Designer <br/>Located in New York City.</h1>
                <p>Currently curious about web 3.0 and how to make it accessible to non-technical users.</p>
            </div>
        </div>
    )
}