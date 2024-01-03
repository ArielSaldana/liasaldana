import Navigation from "../components/navigation/Navigation.tsx";
import Hero from "../components/hero/Hero.tsx";
import CardsList from "../components/cards-list/CardsList.tsx";

export default function Home() {
    return (
        <>
            <div>
                <Navigation/>
                <Hero/>
                <CardsList/>
            </div>
        </>
    )
}