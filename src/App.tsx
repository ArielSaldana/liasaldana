import './App.css'
import './router/router.tsx'
import Router from "./router/router.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div className="App">
            {/*<NavigationBar></NavigationBar>*/}
            <Router/>
        </div>
    )
}

export default App
