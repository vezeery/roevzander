'use client';

import Image from 'next/image';
import Link from "next/link";

const navItems = [
    { label: "HOME", href: "/home" },
    { label: "ABOUT ME", href: "/about" },
    { label: "PORTOFOLIO", href: "/portofolio" },
    { label: "ENTERTAINMENT", href: "/entertainment" },
    { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center z-20 bg-[#0a0a0f]/80 backdrop-blur-md shadow-md">
            <div className="flex items-center w-full max-w-5xl gap-0 overflow-hidden md-4">
                <div className="flex items-center">
                    <Link href="/home">
                        <span className="text-lg font-bold text-white cursor-pointer">
                            <Image
                                src="/picture/logoyellow.png"
                                width={50}
                                height={50}
                                className="object-cover w-8 h-8"
                                alt="Logo"
                            />
                        </span>
                    </Link>
                </div>

                <div className="flex items-end justify-end flex-1">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative">
                            <Link
                                href={item.href}
                                className="flex  items-center px-6 py-4 text-xs font-small text-[white] hover:bg-[#fdf500] hover:text-black transition-all duration-250"
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
                {/* <div className="flex items-center px-6 py-4 text-sm font-medium bg-[#0a0a0f] text-white hover:bg-[#fdf500] hover:text-black transition-all duration-300">
                    <Link href="/quest">QUEST</Link>
                </div>
                <div className="flex items-center px-6 py-4 text-sm font-medium bg-[#0a0a0f] text-black hover:bg-[#fdf500] hover:text-black transition-all duration-300 slanted-buy">
                    <Link href="#">CONTACT ME</Link>
                </div> */}
            </div>
            {/* <style jsx>{`
                .slanted-navbar {
                    position: relative
                    clip-path: polygon(0% 0%, 0% 0%, 95% 100%, 5% 100%);
                }

                .slanted-nav {
                    position: relative;
                    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 80%);
                }
                .slanted-buy {
                    clip-path: polygon(0% 0%, 90% 0%, 100% 25%, 100% 100%, 0% 100%);
                    background: #fdf500;
                    margin-left: -1px;
                }`}
            </style> */}
        </nav>
    );
}