import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PortfolioItem from "../components/portfolioItem";
import "../globals.css";

const projects = [
  {
    id: 1,
    title: "HeyCow UI/UX Design",
    description: "Complete UI/UX design for a mobile and web application platform. Includes user flows, wireframes, and high-fidelity designs with interactive components.",
    image: "/picture/uiuximage.png",
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
    github: null,
    demo: "https://www.figma.com/design/z9H3aOAzu2ezZKk7GB4h6Y/HeyCow"
  },
  {
    id: 2,
    title: "React E-Commerce Dashboard",
    description: "A responsive e-commerce dashboard built with React and Tailwind CSS. Features product management, analytics, and order tracking with real-time updates.",
    image: "/picture/uiuximage.png",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 3,
    title: "Next.js Portfolio Website",
    description: "Modern portfolio website built with Next.js 14 and Tailwind CSS. Showcasing projects with optimized performance, smooth animations, and responsive design.",
    image: "/picture/uiuximage.png",
    techStack: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 4,
    title: "Mobile App Design System",
    description: "Comprehensive design system for mobile applications including color palettes, typography, components, and interaction patterns with documentation.",
    image: "/picture/uiuximage.png",
    techStack: ["Figma", "Design System", "Component Library"],
    github: null,
    demo: "https://www.figma.com/design/z9H3aOAzu2ezZKk7GB4h6Y/HeyCow"
  },
  {
    id: 5,
    title: "Web Animation Library",
    description: "Custom web animation library built with vanilla JavaScript and CSS. Provides smooth, performant animations for modern web applications.",
    image: "/picture/uiuximage.png",
    techStack: ["JavaScript", "CSS3", "HTML5"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "Interactive data visualization dashboard displaying real-time analytics with charts, graphs, and statistics using modern web technologies.",
    image: "/picture/uiuximage.png",
    techStack: ["React", "Chart.js", "Tailwind CSS", "API"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-white px-4 md:px-8 pt-20">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-light text-[#fdf500] font-['Atmospheric'] mb-4">
              {"// MY PORTFOLIO"}
            </h1>
            <p className="text-sm md:text-lg text-gray-300 font-['Jura'] max-w-2xl">
              {"// Showcasing recent projects, designs, and web development work. Each project represents my commitment to creating beautiful, functional, and user-focused experiences."}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {projects.map((project) => (
              <PortfolioItem key={project.id} project={project} />
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="py-12 md:py-16 border-t border-[#797300] border-opacity-30 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-[#fdf500] font-['Atmospheric'] mb-4">
              {"// INTERESTED IN WORKING TOGETHER?"}
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-6 font-['Jura']">
              I'm always open to new opportunities and collaborations. Let's create something amazing together!
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-6 md:px-8 py-3 border border-[#fdf500] hover:bg-[#fdf500] hover:bg-opacity-10 text-[#fdf500] transition-all duration-300 rounded font-['Jura']"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
