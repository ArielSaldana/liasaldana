import Navigation from "../components/navigation/Navigation.tsx";
import Hero from "../components/hero/Hero.tsx";
import CardsList from "../components/cards-list/CardsList.tsx";
import GlassPane from "../components/glass-pane/GlassPane.tsx";

export default function Home() {
    return (
        <>
            <div>
                <GlassPane></GlassPane>
                <Navigation/>
                <Hero/>
                <CardsList/>
            </div>
        </>
    )
}