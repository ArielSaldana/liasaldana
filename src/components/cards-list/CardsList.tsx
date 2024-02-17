import styles from "./CardsList.module.scss";
import unrealImage from '../../assets/unreal-proj.png'
import {useLenis} from "@studio-freight/react-lenis";
import {useRef} from "react";

export default function CardsList() {
    const changeDistance = 50;
    const cardsListRef = useRef<HTMLDivElement>(null);
    useLenis(({scroll}) => {
        const cardsList = cardsListRef.current;
        if (scroll > changeDistance) {
            cardsList!.classList.add(styles.visible);
        } else {
            cardsList!.classList.remove(styles.visible);
        }
    })
    return (
        <div ref={cardsListRef} className={styles.cardsList}>
            <div className={styles.title}>
                <h3>Case Studies</h3>
            </div>
            <div className={styles.listWrapper}>
                <ol>
                    <li>
                        <a href={"/unreal"}>
                            <div className={styles.card}>
                                <img src={unrealImage} alt="Unreal"/>
                                <h4>Unreal</h4>
                                <p>A crypto currency app that does it all</p>
                            </div>
                        </a>

                    </li>

                    {/*<li>*/}
                    {/*    <div className={styles.card}>*/}
                    {/*        <img src={unrealImage} alt="Unreal"/>*/}
                    {/*        <h4>Unreal</h4>*/}
                    {/*        <p>A crypto currency app that does it all</p>*/}
                    {/*    </div>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <div className={styles.card}>*/}
                    {/*        <img src={unrealImage} alt="Unreal"/>*/}
                    {/*        <h4>Unreal</h4>*/}
                    {/*        <p>A crypto currency app that does it all</p>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ol>
            </div>
        </div>
    )
}