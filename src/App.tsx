import './App.scss'
import './router/router.tsx'
import Router from "./router/router.tsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import GlassPane from "./components/glass-pane/GlassPane.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <ReactLenis root options={{
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        }}>
            <GlassPane></GlassPane>
            <div className="App">
                {/*<NavigationBar></NavigationBar>*/}
                <Router/>
            </div>
        </ReactLenis>
    )
}

export default App
