import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
    return (
        <section className="py-28 bg-primarygray" id="skills">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="JavaScript"
                            level="Lanjutan"
                            image="/javascript.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Node JS"
                            level="Menengah"
                            image="/nodejs.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Tailwind CSS"
                            level="Lanjutan"
                            image="/tailwindcss.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Typescript"
                            level="Lanjutan"
                            image="/typescript.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="React JS"
                            level="Lanjutan"
                            image="/react.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Next.js"
                            level="Menengah"
                            image="/nextjs.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard 
                            name="Python"
                            level="Lanjutan"
                            image="/python.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard 
                            name="MongoDB"
                            level="Lanjutan"
                            image="/mongodb.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard 
                            name="MySQL"
                            level="Lanjutan"
                            image="/mysql.svg"
                            imageClassName="h-16 w-16 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
