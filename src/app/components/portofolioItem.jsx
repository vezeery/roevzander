import Link from "next/link";

export default function PortfolioItem() {
  return (
    <div className="group w-full overflow-hidden rounded-xl border border-[#797300]/30 bg-primary/10 transition-all hover:border-[#fdf500] hover:shadow-xl hover:shadow-[#fdf500]/10">
      
      {/* IMAGE */}
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-64 overflow-hidden md:h-72"
      >
        <img
          src="/portfolio/project.jpg"
          alt="Project Preview"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100" />

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
          
          <span className="rounded-full border border-[#fdf500] bg-black/60 px-4 py-2 text-sm text-[#fdf500] backdrop-blur-sm">
            Live Preview
          </span>

        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-4 md:p-6">
        <h3 className="mb-2 text-lg font-bold text-primary md:text-xl">
          Project Name
        </h3>

        <p className="mb-4 font-['Jura'] text-xs text-gray-300 md:text-sm">
          Modern portfolio website with animations, responsive layout,
          and interactive project showcase.
        </p>

        {/* TECH STACK */}
        <div className="mb-4">
          <p className="mb-2 text-xs font-light text-[#fdf500]">
            Tech Stack:
          </p>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "Tailwind", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="rounded border border-[#797300] bg-[#797300]/30 px-2 py-1 text-xs text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[#fdf500]/50 px-4 py-2 text-sm text-[#fdf500] transition-all hover:border-opacity-100 hover:shadow-lg hover:shadow-[#fdf500]/20"
          >
            <i className="ri-github-line"></i>
            GitHub
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[#00ff9d]/50 px-4 py-2 text-sm text-[#00ff9d] transition-all hover:border-opacity-100 hover:shadow-lg hover:shadow-[#00ff9d]/20"
          >
            <i className="ri-external-link-line"></i>
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}