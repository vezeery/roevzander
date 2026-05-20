'use client';

export default function Aboutme() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen text-white md:px-8  bg-opacity-75 border-t-2 border-b-2 border-[#fdf500]">
                <div className="grid items-center w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-4 text-xl font-light mt-12 text-[#fdf500] font-['Atmospheric']">// WHAT'S UP</h4>
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-white font-['Jura']">
                                So apparently I'm just a college guy who needs a lot of practice in coding skills and teamwork.
                                And this web is just my practice; also, this is for personal use. I am more to UI/UX design and front-end development.
                            </p>
                            <p className="text-lg leading-relaxed text-white font-['Jura']">
                                And if you find this web, I hope you can give me some feedback to improve my skills.
                                Besides, if you want to contact me, either just to chat or if you need help with your project.
                            </p>
                            <p className="text-lg leading-relaxed text-white font-['Jura']">
                                Contact me on my social media or email.
                            </p>
                            <p className="text-lg leading-relaxed text-white font-['Jura'] mb-12">
                                Thank you for visiting my web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex items-center justify-center text-white min-h-px md:px-8">
                <div className="grid items-center w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
                    <h5 className="mt-4 text-sm text-gray-300">// LOAD_ABOUTME_ENIGMA_007</h5>
                </div>
            </div> */}
        </div>
    );
}