import SectionParagraph from "./SectionParagraph"
import SectionTitle from "./SectionTitle"

export default function Profile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>Mengenal saya secara singkat.</SectionParagraph>

                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="/profile.png" className="w-full" />
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <p className="text-lg leading-relaxed">Saya adalah Ardi Supriyadi, Mahasiswa Semester 4 Teknik Telekomunikasi yang kuliah di Politeknik Elektronika Surabaya. Saya juga Lulusan Teknik Komputer dan Jaringan di SMK Negeri 3 Jombang. Selama di SMK saya pernah magang di Petrokimia Gresik selama 3 bulan dan magang di Badan Pusat Statistik Kabupaten Jombang selama 3 bulan.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
