import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
    return (
        <section className="py-28" id="projects">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Gambarnya saya dapatkan dari dribbble.</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Web Design"
                            description="Education Landing Page"
                            image="/project1.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Web Design"
                            description="no-code apps: website deployment"
                            image="/project2.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
                        <ProjectItem 
                            name="Web Design"
                            description="Loot Lockers - homepage"
                            image="/project3.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4">
                        <ProjectItem 
                            name="Web Design"
                            description="Real Estate Website"
                            image="/project4.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
