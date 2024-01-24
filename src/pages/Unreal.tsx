import BreadcrumbMenu from "../components/breadcrumb-menu/BreadcrumbMenu.tsx";
import Navigation from "../components/navigation/Navigation.tsx";
import Styles from "./Pages.module.scss";
import './Pages.module.scss'
import CaseDescription from "../components/case-description/CaseDescription.tsx";
import LargeImageDisplay from "../components/large-image-display/LargeImageDisplay.tsx";

export default function Unreal() {
    return (
        <>
            <Navigation/>
            <div className={Styles.pageContentWrapper}>
                <BreadcrumbMenu/>
                <main>
                    <CaseDescription title={"Unreal Wallet"} description={"Unreal Wallet is a comprehensive cryptocurrency wallet app that offers users the convenience of tracking their entire portfolio, monitoring market trends, and engaging with other investors, all within a single intuitive interface"}/>
                    <LargeImageDisplay/>
                    <CaseDescription title={"Quick Scope"} description={"This case study covers the UI of a crypto currency app. The basis of the app is to integrate popular features from other apps seamlessly into one. \n" +
                        "\n" +
                        "I was the sole designer and worked alongside the client and engineer for 2 months and delivered mood boards, wire-frames, and low & high fidelity mock-ups."}/>

                </main>
            </div>
        </>
    )
}