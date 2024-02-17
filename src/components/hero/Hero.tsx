import styles from "./Hero.module.scss"
import {useLenis} from "@studio-freight/react-lenis";
import {useRef} from "react";

export default function Hero() {
    const changeDistance = 50;
    const heroRef = useRef<HTMLDivElement>(null);

    useLenis(({scroll}) => {
        const hero = heroRef.current;
        if (scroll > changeDistance) {
            hero!.classList.add(styles.active);
        } else {
            hero!.classList.remove(styles.active);
        }
    });

    return (
        <div ref={heroRef} className={styles.homepageHero}>
            <div className={styles.contentWrapper}>
                <h1>Hi, I'm <span><em>Lia Saldana</em></span><br/>A Product Designer <br/>Located in New York City.</h1>
                <p>I am a meticulous UX designer, passionate about crafting pixel-perfect interfaces and user-centric experiences. My approach is data-driven, leveraging user research and analytics to inform every design decision. </p>
            </div>
        </div>
    )
}