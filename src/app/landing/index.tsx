import FirstSection from "./components/first-section";
import SecondSection from "./components/second-section";
import ThirdSection from "./components/third-section";
import FourthSection from "./components/fourth-section";
import FifthSection from "./components/fifth-section";
import DefaultPage from "@/components/default-page";

export default function LandingPage() {
    return (
        <DefaultPage>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </DefaultPage>
    )
}