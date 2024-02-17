import Navigation from "../components/navigation/Navigation.tsx";
import Styles from "./Pages.module.scss";
import './Pages.module.scss'
import CaseDescription from "../components/case-description/CaseDescription.tsx";
import LargeImageDisplay from "../components/large-image-display/LargeImageDisplay.tsx";
import SectionTitle from "../components/section/SectionTitle.tsx";
import CaseTitle from "../components/case-title/CaseTitle.tsx";

import unrealImage from "@/assets/unreal_wallet_preview.jpeg";
import unrealLoginSignup from "@/assets/unreal-login-sign-up.png";
import unrealNavigationImg from "@/assets/unreal-navigation.png";
import unrealCustomizationImg from "@/assets/unreal-customization.png";
import unrealUserNeedsImg from "@/assets/unreal-user-needs.png";
import unrealAdditionalScreensImg from "@/assets/unreal-additional-screens.png";
import unrealBrandColorsImg from "@/assets/unreal-brand-colors.png";
import unrealDesignComponentsImg from "@/assets/unreal-design-components.png";
import unrealLowFidelityFramesImg from "@/assets/unreal-low-fidelity-frames.png";
import unrealNextStepsImg from "@/assets/unreal-next-steps.png";

export default function Unreal() {
    return (
        <>
            <Navigation/>
            <div className={Styles.pageContentWrapper}>
                {/*<BreadcrumbMenu/>*/}
                <main>
                    <LargeImageDisplay image={unrealImage} altText={"Unreal Wallet"}/>
                    <CaseTitle title={"Fir-endly"}
                                     description={["Fir-endly is an online grocery app with a heavy focuses on making  grocery shopping online sustainable and rewarding for users."]}/>
                    <CaseDescription title={"Quick Scope"}
                                     description={["This is a concept case study. It encompasses the full UX and UI of the app. The core principle of this app is to help grocers who care about consuming organic and healthy products while focusing on sustainability.",
                                         "I was the sole researcher and designer. Conducted competitive audits, and AB testing, and created user personas, user flows,  mood boards, wire-frames, and low & high fidelity mock-ups."]}/>

                    <section>
                        <SectionTitle title={"Research"}/>
                        <CaseDescription title={"Competitive Analysis"}
                                         description={["I conducted a competitive analysis of companies similar to Fir-endly to -see- how other apps are meeting with user needs, if the app is user friendly and displays a clean and intuitive user interface. Below are summarized findings."]}/>
                        <LargeImageDisplay image={unrealLoginSignup} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"User Persona’s & Flows"}
                                         description={["To gain a better understanding of the targeted users and their requirements, I created three user personas and how they would interact with the app to accomplish their tasks"]}/>
                        <LargeImageDisplay image={unrealNavigationImg} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"A/B Testing & User Feedback"}
                                         description={["After reiterating designs on my own I conducted A/B testing and used user feedback to amend and in some cases completely redesign flows. "]}/>
                        <LargeImageDisplay image={unrealCustomizationImg} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"User Needs"}
                                         description={["While wallets do not support direct NFT trading, it is important to provide users with information on NFT’s. As a result, I integrated a pop up of the specifications making it accessible if needed and  providing only major points making it quick to digest."]}/>
                        <LargeImageDisplay image={unrealUserNeedsImg} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"Additional Screens"}
                                         description={[""]}/>
                        <LargeImageDisplay image={unrealAdditionalScreensImg} altText={"Unreal Wallet"}/>
                    </section>
                    <section>
                        <SectionTitle title={"Design Sheet"}/>
                        <CaseDescription title={"Brand Colors"}
                                         description={[""]}/>
                        <LargeImageDisplay image={unrealBrandColorsImg} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"Typography"}
                                         description={["I researched and iterated with a few fonts before landing on these ones. The style of the fonts help convey the app is modern and sleek but still easy to use. These fonts also work well in varying height and weight. "]}/>
                        <LargeImageDisplay image={unrealLoginSignup} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"CTAs"}
                                         description={[""]}/>
                        <LargeImageDisplay image={unrealDesignComponentsImg}
                                           altText={"These CTA components are designed with every instance in mind while still keeping the design style consistent."}/>
                    </section>
                    <section>
                        <SectionTitle title={"Wireframe"}/>
                        <CaseDescription title={"Low Fidelity Frames"}
                                         description={["Conducting a competitive audit allowed me to find gaps between user experience vs company goals. After some iterations I was able to design this app that met both needs. "]}/>
                        <LargeImageDisplay image={unrealLowFidelityFramesImg} altText={"Unreal Wallet"}/>
                    </section>
                    <section>
                        <SectionTitle title={"Next Steps"}/>
                        <CaseDescription title={"Expand"}
                                         description={["The next steps to  enhance and engage users is to create a messaging and a group messaging portion. Also, allowing users to link social medias would further create a lasting community."]}/>
                        <LargeImageDisplay image={unrealNextStepsImg} altText={"Unreal Next Steps"}/>

                    </section>

                </main>
            </div>
        </>
    )
}