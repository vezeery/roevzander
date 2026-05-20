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
            <div className="flex items-center justify-center min-h-screen text-white md:px-8">
                <div className="w-full max-w-5xl">
                    <div className="flex items-center justify-between">
                        <h4 className="mb-4 text-xl font-light mt-12 text-[#fdf500] font-['Atmospheric']">// RECENT PROJECTS</h4>
                        <h5 className="mt-12 text-sm text-gray-300">// LOAD_PROJECTS_ABSOLUTE_273</h5>
                    </div>
                    <div className="flex flex-col gap-8 md:flex-row">
                        <figure className="flex flex-col">
                            <iframe
                                className="border-4 border-[#fdf500] border-opacity-10"
                                width="500"
                                height="500"
                                src="https://embed.figma.com/design/z9H3aOAzu2ezZKk7GB4h6Y/HeyCow?node-id=1609-5124&embed-host=share"
                                allowFullScreen>
                            </iframe>
                            <figcaption className="mt-2 text-lg text-center font-[Jura]">HeyCow UI/UX Mobile</figcaption>
                        </figure>
                        <figure className="flex flex-col">
                            <iframe
                                className="border-4 border-[#fdf500] border-opacity-10"
                                width="500"
                                height="500"
                                src="https://embed.figma.com/design/z9H3aOAzu2ezZKk7GB4h6Y/HeyCow?node-id=1613-5004&embed-host=share"
                                allowFullScreen>
                            </iframe>
                            <figcaption className="mt-2 text-lg text-center font-['Jura']">HeyCow UI/UX Website</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-white md:px-8">
                <div className="grid items-center w-full max-w-5xl">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-4 text-xl font-light mt-12 text-[#fdf500] font-['Atmospheric']">// MY SKILLS</h4>
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="w-full overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <Image
                                    src="/picture/uiuximage.png"
                                    width={1080}
                                    height={1080}
                                    className="object-cover w-full h-auto"
                                    alt="Profile"
                                />
                                <div className="p-6">
                                    <i className="mb-2 text-4xl ri-virtual-reality-line text-secondary"></i>
                                    <h3 className="text-xl text-primary">UI/UX Designer</h3>
                                    <p className="text-sm text-secondary opacity-60">Main Skill</p>
                                    <p className="text-sm font-['Jura'] mt-4">
                                        I would like to create you an UI/UX design for your project.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full p-6 transition-all border rounded-lg cursor-pointer bg-primary 
                                            bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <i className="mb-2 text-4xl ri-code-line text-secondary"></i>
                                <h3 className="text-xl text-primary">Frontend Developer</h3>
                                <p className="text-sm text-secondary opacity-60">Main Skill</p>
                                <p className="text-sm font-['Jura'] mt-4">
                                    I love building interactive and modern web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-white md:px-8">
                <div className="grid items-center w-full max-w-5xl">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-4 text-md font-light mt-12 text-[#fdf500] font-['Atmospheric']">/// SUPPORT SKILLS</h4>
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="w-full overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <div className="p-6">
                                    <i className="mb-2 text-4xl ri-virtual-reality-line text-secondary"></i>
                                    <h3 className="text-xl text-primary">Working with Team</h3>
                                    <p className="text-sm text-secondary opacity-60">Support Skill</p>
                                    <p className="text-sm font-['Jura'] mt-4">
                                    I ready to working either as team or alone.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full p-6 transition-all border rounded-lg cursor-pointer bg-primary 
                                            bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <i className="mb-2 text-4xl ri-code-line text-secondary"></i>
                                <h3 className="text-xl text-primary">Critical Thinking</h3>
                                <p className="text-sm text-secondary opacity-60">Support Skill</p>
                                <p className="text-sm font-['Jura'] mt-4">
                                    Critical thinking is to support every project decision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-white md:px-8">
                <div className="grid items-center w-full max-w-5xl">
                    <div className="flex flex-col items-center mt-4 md:items-start">
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="w-full overflow-hidden transition-all border rounded-lg cursor-pointer bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <div className="p-6">
                                    <i className="mb-2 text-4xl ri-virtual-reality-line text-secondary"></i>
                                    <h3 className="text-xl text-primary">Support Person</h3>
                                    <p className="text-sm text-secondary opacity-60">Support Skill</p>
                                    <p className="text-sm font-['Jura'] mt-4">
                                    Where I can make any problem to be support.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full p-6 transition-all border rounded-lg cursor-pointer bg-primary 
                                            bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <i className="mb-2 text-4xl ri-code-line text-secondary"></i>
                                <h3 className="text-xl text-primary">Emphatize</h3>
                                <p className="text-sm text-secondary opacity-60">Support Skill</p>
                                <p className="text-sm font-['Jura'] mt-4">
                                    Ready to help and support any person.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-white min-h-px md:px-8">
                <div className="grid items-center w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
                    <h5 className="mt-4 text-sm text-gray-300">// LOAD_SKILLS_REZON_081</h5>
                </div>
            </div>
            <div className="w-full min-h-screen px-4 pt-24 pb-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="p-6 rounded-lg card">
                        <div className="flex items-center mb-4 cyber-line">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary bg-opacity-20">
                                <i className="text-2xl ri-map-pin-line text-primary"></i>
                            </div>
                            <h2 className="ml-3 text-xl font-semibold text-primary">Neural Hub Location</h2>
                        </div>
                        <div className="space-y-2">
                            <p className="text-secondary">Neo San Francisco District</p>
                            <p className="text-primary opacity-70">Grid Coordinates: SF-2077-X</p>
                            <div className="h-32 mt-4 overflow-hidden rounded-lg">
                                <img src="https://public.readdy.ai/ai/img_res/dbde0cbb0484ef5767d6a55b0ccf54e3.jpg"
                                    alt="Location Map"
                                    className="object-cover w-full h-full"></img>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg card">
                        <div className="flex items-center mb-4 cyber-line">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary bg-opacity-20">
                                <i className="text-2xl ri-brain-line text-primary"></i>
                            </div>
                            <h2 className="ml-3 text-xl font-semibold text-primary">Neural Enhancements</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg bg-primary bg-opacity-10 border-primary border-opacity-20">
                                <div className="flex items-center justify-between">
                                    <p className="text-primary">Quantum Computing</p>
                                    <span className="text-secondary">Level: Master</span>
                                </div>
                                <div className="h-2 mt-2 bg-gray-800 rounded-full">
                                    <div className="h-full rounded-full bg-primary width: 95%"></div>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg bg-primary bg-opacity-10 border-primary border-opacity-20">
                                <div className="flex items-center justify-between">
                                    <p className="text-primary">Neural Interface Design</p>
                                    <span className="text-secondary">Level: Expert</span>
                                </div>
                                <div className="h-2 mt-2 bg-gray-800 rounded-full">
                                    <div className="h-full rounded-full bg-primary width: 88%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}