'use client';
import Image from 'next/image';

export default function Container() {
    return (
        <div>
            {/* <div className="bg-[#0a0a0f] bg-opacity-10 text-center pt-28 h-[500px] w-full relative">
                <div className="relative text-[9vw] text-[#fdf500] font-bold glitch" data-text="ROEV ZANDER">
                    ROEV ZANDER
                </div>
                <p className="mt-2 text-[0.8vw] uppercase tracking-[1em] text-[#D9D100] opacity-40 animate-glitch-2">
                    IMPRACTICAL DEVELOPER
                </p>
                <div className="absolute top-0 left-0 w-full h-full scanlines"></div
                
                bg-[radial-gradient(#797300_1px,transparent_1px)] [background-size:84px_84px]
                bg-[url('/picture/bg-cp.jpg')] bg-cover bg-center bg-opacity-1>
            </div> */}
            <div className="flex items-center justify-center min-h-screen px-6 text-white md:px-16 ">
                <div className="grid items-center w-full max-w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2">
                    <div className="flex flex-col items-center mt-20 md:items-start md:justify-end">
                        <Image
                            src="/picture/container design.png"
                            width={1080}
                            height={1080}
                            className="object-cover w-full max-w-2xl md:max-w-3xl"
                            alt="Profile"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-4xl font-bold text-[#fdf500]">IMPERIAL PERSON</h2>
                        <p className="mt-4 text-lg leading-relaxed text-white font-['Jura']">
                            Naufalih Muzakki Sujono
                            <br />
                            Have a lot of ambitions and visions.
                            <br />
                            I want to fulfill atleast one of them.
                            <br />
                            Make myself better and better.
                        </p>
                        <div className="grid items-start grid-cols-1 gap-4 mt-8 md:grid-cols-4">
                            <button className="flex col-span-1 outline-2 bg-[#fdf500] text-black max-w-fit px-6 py-4 hover:bg-[#fdf500] hover:text-black">
                                <a href="/contact">CONTACT</a>
                            </button>
                            <button className="flex col-span-3 outline-2 border-[#fdf500] text-[#fdf500] max-w-fit px-6 py-4 hover:bg-[#fdf500] hover:text-black">
                                <a href="/portofolio">PORTOFOLIO</a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

{/* <div className="grid-cols-1 gap-8 mb-8 md:grid-cols-3">
<div className="md:col-span-1">
    <div className="w-48 h-48 p-1 mx-auto rounded-full profile-border">
        <img src="https://readdy.ai/api/search-image?query=cyberpunk style portrait of a young person with neon lighting, futuristic cybernetic implants, against a dark tech background with holographic elements, high quality digital art&width=300&height=300&seq=1&orientation=squarish"
            alt="Profile Picture"
            className="object-cover w-full h-full rounded-full"></img>
    </div>
</div>
<div className="flex flex-col justify-center md:col-span-2">
    <div className="pb-4 cyber-line">
        <h1 className="mt-2 mb-2 text-5xl font-bold text-primary font-neue">Alexander Mitchell</h1>
        <p className="text-xl text-secondary">Neural Network Architect & Digital Nomad</p>
    </div>
    <div className="flex gap-4 mt-4">
        <span className="px-4 py-2 border rounded-lg bg-opacity-20 bg-primary border-primary text-primary">Level 42</span>
        <span className="px-4 py-2 border rounded-lg bg-opacity-20 bg-secondary border-secondary text-secondary">Neural Security Clearance: Alpha</span>
    </div>
</div>
</div> */}