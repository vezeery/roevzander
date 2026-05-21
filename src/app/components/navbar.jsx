'use client';
import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

const navItems = [
    { label: "HOME", href: "/home" },
    { label: "ABOUT ME", href: "/about" },
    { label: "PORTOFOLIO", href: "/portofolio" },
    { label: "ENTERTAINMENT", href: "/entertainment" },
    { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center z-20 bg-[#0a0a0f]/80 backdrop-blur-md shadow-md">
            <div className="flex items-center justify-between w-full max-w-5xl px-4">
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

                <div className="items-end justify-end flex-1 hidden md:flex">
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
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="p-2 text-white transition rounded-lg md:hidden hover:bg-white/10"
                >
                    {mobileMenu ? (
                        <X size={26} weight="bold" />
                    ) : (
                        <List size={26} weight="bold" />
                    )}
                </button>
            </div>
            <div
                className={`
                        absolute top-full left-0 w-full
                        bg-[#0a0a0f]/95 backdrop-blur-md
                        md:hidden overflow-hidden transition-all duration-300
                        ${mobileMenu
                        ? 'max-h-[500px] opacity-100 pb-4'
                        : 'max-h-0 opacity-0'
                    }
                    `}
            >
                <div className="flex flex-col gap-2 pt-2">

                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setMobileMenu(false)}
                            className="px-4 py-3 text-sm text-white transition-all duration-300 rounded-xl hover:bg-[#fdf500] hover:text-black"
                        >
                            {item.label}
                        </Link>
                    ))}

                </div>
            </div>
        </nav>
    );
}