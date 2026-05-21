'use client';

import {
    EnvelopeOpen,
    FilmSlate,
    GameController,
    GithubLogo,
    Globe,
    InstagramLogo,
    LinkedinLogo,
    SteamLogo,
    TwitterLogo,
} from '@phosphor-icons/react';

import Image from 'next/image';
import Navbar from '../components/navbar';

const developerProfiles = [
    {
        name: 'GitHub',
        username: '@yourgithub',
        link: 'https://github.com',
        icon: GithubLogo,
    },
    {
        name: 'LinkedIn',
        username: 'Your Name',
        link: 'https://linkedin.com',
        icon: LinkedinLogo,
    },
    {
        name: 'Dicoding',
        username: '@yourdicoding',
        link: 'https://dicoding.com',
        icon: Globe,
    },
];

const socialProfiles = [
    {
        name: 'Instagram',
        username: '@yourinstagram',
        link: 'https://instagram.com',
        icon: InstagramLogo,
    },
    {
        name: 'Twitter / X',
        username: '@yourtwitter',
        link: 'https://twitter.com',
        icon: TwitterLogo,
    },
];

const funProfiles = [
    {
        name: 'Steam',
        username: 'Your Steam',
        link: 'https://steamcommunity.com',
        icon: SteamLogo,
    },
    {
        name: 'Letterboxd',
        username: '@yourletterboxd',
        link: 'https://letterboxd.com',
        icon: FilmSlate,
    },
    {
        name: 'Xbox',
        username: 'Your Xbox ID',
        link: 'https://xbox.com',
        icon: GameController,
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />

            <div className="relative flex items-center justify-center px-4 py-16 overflow-hidden">

                {/* Background Blur */}
                <div className="absolute top-0 left-0 rounded-full w-72 h-72 bg-blue-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 bg-purple-500/10 blur-3xl"></div>

                <div className="relative z-10 w-full max-w-6xl">

                    <div className="grid gap-6 lg:grid-cols-3">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-1">
                            <div className="sticky p-8 border shadow-2xl bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">

                                {/* Profile */}
                                <div className="flex flex-col items-center text-center">

                                    <div className="relative w-40 h-40 mb-6 overflow-hidden border-2 shadow-xl rounded-3xl  border-[#fdf500]">
                                        <Image
                                            src="/picture/picture.jpg"
                                            alt="Profile"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    <h1 className="mb-2 text-xl font-bold text-white">
                                        Naufalih Muzakki Sujono
                                    </h1>

                                    <p className="mb-4 text-slate-400">
                                        Front-End Developer & UI/UX Designer
                                    </p>
                                    <p className="mb-4 text-slate-400">
                                        Full Stack Developer
                                    </p>

                                    {/* Status */}
                                    <div className="flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-emerald-500/10 border-emerald-500/20">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                                        <span className="text-sm text-emerald-300">
                                            Available for collaborations
                                        </span>
                                    </div>

                                    {/* Bio */}
                                    <p className="leading-relaxed text-slate-400 font-['Jura']">
                                        Passionate developer focused on creating
                                        modern web experiences, scalable applications,
                                        and clean UI design.
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mt-8">
                                    {[
                                        'Next.js',
                                        'Laravel',
                                        'Tailwind',
                                        'Machine Learning',
                                        'UI/UX',
                                        'Gaming',
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm border rounded-full bg-slate-800 text-slate-300 border-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Email */}
                                <div className="p-4 mt-8 border rounded-2xl bg-slate-800/60 border-slate-700">
                                    <div className="flex items-center gap-3 mb-2">
                                        <EnvelopeOpen
                                            size={20}
                                            className="text-slate-300"
                                            weight="fill"
                                        />

                                        <p className="text-sm text-slate-400">
                                            Email
                                        </p>
                                    </div>

                                    <a
                                        href="mailto:your.email@example.com"
                                        className="font-medium text-white transition hover:text-slate-300"
                                    >
                                        your.email@example.com
                                    </a>
                                </div>

                                {/* CTA */}
                                <button className="w-full py-4 mt-8 font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 hover:scale-[1.02] hover:from-slate-600 hover:to-slate-500">
                                    Let’s Work Together
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="space-y-6 lg:col-span-2">

                            {/* About */}
                            <div className="p-8 border shadow-xl bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <h2 className="mb-4 text-2xl font-bold text-white">
                                    About Me
                                </h2>

                                <p className="leading-relaxed text-slate-400 font-['Jura']">
                                    I enjoy building immersive digital experiences
                                    with modern technologies. Beyond development,
                                    I’m also interested in movies, gaming,
                                    interface design, and internet culture.
                                </p>
                            </div>

                            {/* Developer Profiles */}
                            <div className="p-8 border shadow-xl bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <h2 className="mb-6 text-2xl font-bold text-white">
                                    Developer Profiles
                                </h2>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {developerProfiles.map((profile) => {
                                        const Icon = profile.icon;

                                        return (
                                            <a
                                                key={profile.name}
                                                href={profile.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-5 transition-all border group rounded-2xl bg-slate-800/60 border-slate-700 hover:border-slate-500 hover:bg-slate-800"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 rounded-xl bg-slate-700">
                                                        <Icon
                                                            size={24}
                                                            weight="fill"
                                                            className="text-white"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-white">
                                                            {profile.name}
                                                        </p>

                                                        <p className="text-sm text-slate-400">
                                                            {profile.username}
                                                        </p>
                                                    </div>
                                                </div>

                                                <span className="transition text-slate-500 group-hover:text-white">
                                                    ↗
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="p-8 border shadow-xl bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <h2 className="mb-6 text-2xl font-bold text-white">
                                    Socials
                                </h2>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {socialProfiles.map((profile) => {
                                        const Icon = profile.icon;

                                        return (
                                            <a
                                                key={profile.name}
                                                href={profile.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-5 transition-all border group rounded-2xl bg-slate-800/60 border-slate-700 hover:border-slate-500 hover:bg-slate-800"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 rounded-xl bg-slate-700">
                                                        <Icon
                                                            size={24}
                                                            weight="fill"
                                                            className="text-white"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-white">
                                                            {profile.name}
                                                        </p>

                                                        <p className="text-sm text-slate-400">
                                                            {profile.username}
                                                        </p>
                                                    </div>
                                                </div>

                                                <span className="transition text-slate-500 group-hover:text-white">
                                                    ↗
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Entertainment */}
                            <div className="p-8 border shadow-xl bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 card-yellow">
                                <h2 className="mb-6 text-2xl font-bold text-white">
                                    Entertainment & Interests
                                </h2>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {funProfiles.map((profile) => {
                                        const Icon = profile.icon;

                                        return (
                                            <a
                                                key={profile.name}
                                                href={profile.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-5 transition-all border group rounded-2xl bg-slate-800/60 border-slate-700 hover:border-slate-500 hover:bg-slate-800"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 rounded-xl bg-slate-700">
                                                        <Icon
                                                            size={24}
                                                            weight="fill"
                                                            className="text-white"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-white">
                                                            {profile.name}
                                                        </p>

                                                        <p className="text-sm text-slate-400">
                                                            {profile.username}
                                                        </p>
                                                    </div>
                                                </div>

                                                <span className="transition text-slate-500 group-hover:text-white">
                                                    ↗
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}