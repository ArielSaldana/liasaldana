import BreadcrumbMenu from "../components/breadcrumb-menu/BreadcrumbMenu.tsx";
import Navigation from "../components/navigation/Navigation.tsx";
import Styles from "./Pages.module.scss";
import './Pages.module.scss'
import CaseDescription from "../components/case-description/CaseDescription.tsx";
import LargeImageDisplay from "../components/large-image-display/LargeImageDisplay.tsx";
import SectionTitle from "../components/section/SectionTitle.tsx";
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
                <BreadcrumbMenu/>
                <main>
                    <CaseDescription title={"Unreal Wallet"}
                                     description={["Unreal Wallet is a comprehensive cryptocurrency wallet app that offers users the convenience of tracking their entire portfolio, monitoring market trends, and engaging with other investors, all within a single intuitive interface"]}/>
                    <LargeImageDisplay image={unrealImage} altText={"Unreal Wallet"}/>
                    <CaseDescription title={"Quick Scope"}
                                     description={["This case study covers the UI of a crypto currency app. The basis of the app is to integrate popular features from other apps seamlessly into one.",
                                         "I was the sole designer and worked alongside the client and engineer for 2 months and delivered mood boards, wire-frames, and low & high fidelity mock-ups."]}/>

                    <section>
                        <SectionTitle title={"Outcome"}/>
                        <CaseDescription title={"Login & Sign up"}
                                         description={["Strategically designed to be minimal. NFT’s can be visually distracting so it helps keep users focused on the login or sign up process"]}/>
                        <LargeImageDisplay image={unrealLoginSignup} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"Navigation"}
                                         description={["I wanted to keep most used features super easy to access. However, the navigation bar does not have space for all the features that would be most used. I designed the middle icon to expand - allowing more user tasks to be completed within the 3 click rule."]}/>
                        <LargeImageDisplay image={unrealNavigationImg} altText={"Unreal Wallet"}/>
                        <CaseDescription title={"Customization"}
                                         description={["Designing the app to be customized to user preference allows users to feel more in control but still remain user friendly and accessible. One ways this was accomplished was designing for a dark and light theme."]}/>
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