// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useRect} from "@studio-freight/hamo"
import {useLenis} from "@studio-freight/react-lenis"
import {useEffect, useRef} from "react"
import s from './ScrollBar.module.scss'

export function Scrollbar() {
    const thumbRef = useRef<HTMLDivElement>(null)
    const lenis = useLenis()
    const [innerMeasureRef, {height: innerHeight}] = useRect()
    const [thumbMeasureRef, {height: thumbHeight}] = useRect()

    function mapRange(in_min: number, in_max: number, input: number, out_min: number, out_max: number) {
        return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

    useLenis(
        ({scroll, limit}) => {
            const progress = scroll / limit

            thumbRef.current!.style.transform = `translate3d(0,${
                progress * (innerHeight - thumbHeight)
            }px,0)`
        },
        [innerHeight, thumbHeight],
    )

    useEffect(() => {
        let start: number | null = null

        function onPointerMove(e: { preventDefault: () => void; clientY: number }) {
            if (!start) return
            e.preventDefault()

            const scroll = mapRange(
                start,
                innerHeight - (thumbHeight - start),
                e.clientY,
                0,
                lenis.limit,
            )
            lenis.scrollTo(scroll, {immediate: true})
        }

        function onPointerDown(e: { offsetY: number | null }) {
            start = e.offsetY
        }

        function onPointerUp() {
            start = null
        }

        thumbRef.current?.addEventListener('pointerdown', onPointerDown, false)
        window.addEventListener('pointermove', onPointerMove, false)
        window.addEventListener('pointerup', onPointerUp, false)

        return () => {
            thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false)
            window.removeEventListener('pointermove', onPointerMove, false)
            window.removeEventListener('pointerup', onPointerUp, false)
        }
    }, [lenis, innerHeight]);

    // workaround to update
    useEffect(() => {
        if (thumbRef.current) {
            thumbMeasureRef(thumbRef.current);
        }
    }, [thumbRef.current, thumbMeasureRef]);

    return (
        <div className={s.scrollbar}>
            <div ref={innerMeasureRef} className={s.inner}>
                <div className={s.thumb} ref={thumbRef}/>
            </div>
        </div>
    )
}