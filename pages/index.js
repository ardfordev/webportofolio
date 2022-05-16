import Head from "next/head";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProfileSeciton from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ardi Supriyadi | Portofolio</title>
            </Head>
            <Hero />
            <ProfileSeciton />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    )
}