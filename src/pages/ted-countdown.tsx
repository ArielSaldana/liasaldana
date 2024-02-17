import BreadcrumbMenu from "../components/breadcrumb-menu/BreadcrumbMenu.tsx";
import Navigation from "../components/navigation/Navigation.tsx";
import Styles from "./Pages.module.scss";
import './Pages.module.scss'
import CaseDescription from "../components/case-description/CaseDescription.tsx";
import LargeImageDisplay from "../components/large-image-display/LargeImageDisplay.tsx";
import tedThumbnail from "@/assets/ted-thumbnail.jpg";


export default function TedCountdown() {
    return (
        <>
            <Navigation/>
            <div className={Styles.pageContentWrapper}>
                <BreadcrumbMenu/>
                <main>
                    <LargeImageDisplay image={tedThumbnail} altText={"ted thumbnail"}/>
                    {/*<LargeImageDisplay image={exampleThumbnail} altText={"ted thumbnail"}/>*/}
                    <CaseDescription title={"TED - COUNTDOWN"} description={[
                        "Countdown is a global initiative to champion and accelerate solutions to the climate crisis, turning ideas into action.",
                        "TED engaged us to make 5 spots about the urgency of combatting climate change, to be produced in the similarly urgent timeline of 4 weeks, just in time for their global countdown event.",
                        "The spots were broadcast as part of the live event to 67 million viewers, and introduced by Mark Rufalo, Al Gore and Jane Fonda.",
                    ]}/>
                </main>
            </div>
        </>
    )
}