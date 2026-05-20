import Image from "next/image";
import Aboutme from "../components/aboutme";
import Container from "../components/container";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../globals.css";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Container />
            <Aboutme />
            <div className="flex items-center justify-center min-h-screen text-white px-4 md:px-8">
                <div className="w-full max-w-5xl">
                    <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center mb-8">
                        <h4 className="text-lg md:text-xl font-light text-[#fdf500] font-['Atmospheric']">{"// RECENT PROJECTS"}</h4>
                        <h5 className="text-xs md:text-sm text-gray-300">{"// LOAD_PROJECTS_ABSOLUTE_273"}</h5>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-8 md:flex-row">
                        <figure className="flex flex-col w-full md:w-1/2">
                            <div className="relative w-full bg-black rounded-lg" style={{ paddingBottom: '100%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full border-4 border-[#fdf500] border-opacity-10"
                                    src="https://embed.figma.com/design/z9H3aOAzu2ezZKk7GB4h6Y/HeyCow?node-id=1609-5124&embed-host=share"
                                    allowFullScreen
                                    loading="lazy" 
                                ></iframe>
                            </div>
                            <figcaption className="mt-2 text-sm md:text-lg text-center font-['Jura']">HeyCow UI/UX Mobile</figcaption>
                        </figure>
                        <figure className="flex flex-col w-full md:w-1/2">
                            <div className="relative w-full bg-black rounded-lg" style={{ paddingBottom: '100%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full border-4 border-[#fdf500] border-opacity-10"
                                    src="https://embed.figma.com/design/z9H3aOAzu2ezZKk7GB4h6Y/HeyCow?node-id=1613-5004&embed-host=share"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <figcaption className="mt-2 text-sm md:text-lg text-center font-['Jura']">HeyCow UI/UX Website</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-white px-4 md:px-8">
                <div className="grid items-center w-full max-w-5xl">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-6 text-lg md:text-xl font-light mt-12 text-[#fdf500] font-['Atmospheric']">{"// MY SKILLS"}</h4>
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="w-full overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <Image
                                    src="/picture/uiuximage.png"
                                    width={1080}
                                    height={1080}
                                    className="object-cover w-full h-auto"
                                    alt="UI/UX Designer"
                                />
                                <div className="p-4 md:p-6">
                                    <i className="mb-2 text-3xl md:text-4xl ri-virtual-reality-line text-secondary"></i>
                                    <h3 className="text-lg md:text-xl text-primary">UI/UX Designer</h3>
                                    <p className="text-xs md:text-sm text-secondary opacity-60">Main Skill</p>
                                    <p className="text-xs md:text-sm font-['Jura'] mt-4">
                                        I would like to create you an UI/UX design for your project.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full p-4 md:p-6 transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <i className="mb-2 text-3xl md:text-4xl ri-code-line text-secondary"></i>
                                <h3 className="text-lg md:text-xl text-primary">Frontend Developer</h3>
                                <p className="text-xs md:text-sm text-secondary opacity-60">Main Skill</p>
                                <p className="text-xs md:text-sm font-['Jura'] mt-4">
                                    I love building interactive and modern web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mb-6 text-white px-4 md:px-8">
                <div className="grid items-center w-full max-w-5xl">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-6 text-sm md:text-md font-light mt-12 text-[#fdf500] font-['Atmospheric']">{"/// SUPPORT SKILLS"}</h4>
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="w-full overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <div className="p-4 md:p-6">
                                    <i className="mb-2 text-3xl md:text-4xl ri-virtual-reality-line text-secondary"></i>
                                    <h3 className="text-lg md:text-xl text-primary">Working with Team</h3>
                                    <p className="text-xs md:text-sm text-secondary opacity-60">Support Skill</p>
                                    <p className="text-xs md:text-sm font-['Jura'] mt-4">
                                        I ready to working either as team or alone.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full p-4 md:p-6 transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <i className="mb-2 text-3xl md:text-4xl ri-code-line text-secondary"></i>
                                <h3 className="text-lg md:text-xl text-primary">Critical Thinking</h3>
                                <p className="text-xs md:text-sm text-secondary opacity-60">Support Skill</p>
                                <p className="text-xs md:text-sm font-['Jura'] mt-4">
                                    Critical thinking is to support every project decision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
