import {useLenis} from "@studio-freight/react-lenis";
import {useRef} from "react";
import styles from "./GlassPane.module.scss"

export default function GlassPane() {

    const changeDistance = 50;

    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);
    const blob3Ref = useRef<HTMLDivElement>(null);
    const glassPaneRef = useRef<HTMLDivElement>(null);

    useLenis(({scroll}) => {
        if (scroll > changeDistance) {
            glassPaneRef.current!.style.backgroundColor = 'white'
            blob1Ref.current!.style.backgroundColor = '#fff'
            blob2Ref.current!.style.backgroundColor = '#fff'
            blob3Ref.current!.style.backgroundColor = '#fff'
        } else {
            glassPaneRef.current!.style.backgroundColor = '#ef83ff'
            blob1Ref.current!.style.backgroundColor = 'rgb(255 184 135)'
            blob2Ref.current!.style.backgroundColor = 'rgb(255 147 147)'
            blob3Ref.current!.style.backgroundColor = 'rgb(212, 118, 148)'
        }
    })
    return (
        <div ref={glassPaneRef} className={styles.glassPane}>
            <div className={styles.blobs}>
                <div ref={blob1Ref} className={styles.blob1}></div>
                <div ref={blob2Ref} className={styles.blob2}></div>
                <div ref={blob3Ref} className={styles.blob3}></div>
            </div>
        </div>
    )
}