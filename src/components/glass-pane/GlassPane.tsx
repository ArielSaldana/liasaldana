import { useLenis} from "@studio-freight/react-lenis";
import {useRef} from "react";
import styles from "./GlassPane.module.scss"

export default function GlassPane() {

    const changeDistance = 50;

    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);
    const blob3Ref = useRef(null);
    const glassPaneRef = useRef(null);

    useLenis(({ scroll}) => {
        if (scroll > changeDistance) {
            // glassPaneRef.current!.style.backgroundColor = 'black'
            // blob1Ref.current!.style.backgroundColor = '#4e2084'
            // blob2Ref.current!.style.backgroundColor = '#ff3131'
            // blob3Ref.current!.style.backgroundColor = '#ca62b6'

            glassPaneRef.current!.style.backgroundColor = 'white'
            blob1Ref.current!.style.backgroundColor = '#fff'
            blob2Ref.current!.style.backgroundColor = '#fff'
            blob3Ref.current!.style.backgroundColor = '#fff'
        } else {
            // glassPaneRef.current!.style.backgroundColor = '#fbcd41'
            // blob1Ref.current!.style.backgroundColor = '#d4a73a'
            // blob2Ref.current!.style.backgroundColor = '#f4ce5e'
            // blob3Ref.current!.style.backgroundColor = '#ca9c62'

            glassPaneRef.current!.style.backgroundColor = '#ef83ff'
            blob1Ref.current!.style.backgroundColor = 'rgb(255 184 135)'
            blob2Ref.current!.style.backgroundColor = 'rgb(255 147 147)'
            blob3Ref.current!.style.backgroundColor = 'rgb(212, 118, 148)'
            // blob3Ref.current!.style.backgroundColor = 'rgb(181, 108, 112)'
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