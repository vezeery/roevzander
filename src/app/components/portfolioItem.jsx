import Image from "next/image";
import Link from "next/link";

export default function PortfolioItem({ project }) {
  return (
    <div className="w-full overflow-hidden transition-all border rounded-lg bg-primary bg-opacity-10 border-primary border-opacity-10 border-[#797300] hover:border-opacity-100 hover:shadow-lg card-yellow">
      <div className="relative w-full overflow-hidden bg-black h-64 md:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-xs md:text-sm text-gray-300 mb-4 font-['Jura']">
          {project.description}
        </p>
        
        {project.techStack && (
          <div className="mb-4">
            <p className="text-xs text-[#fdf500] mb-2 font-light">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-[#797300] bg-opacity-30 border border-[#797300] rounded text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-6 flex-wrap">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[#fdf500] border-opacity-50 hover:border-opacity-100 rounded text-[#fdf500] transition-all hover:shadow-lg hover:shadow-[#fdf500]/20"
            >
              <i className="ri-github-line"></i>
              GitHub
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[#00ff9d] border-opacity-50 hover:border-opacity-100 rounded text-[#00ff9d] transition-all hover:shadow-lg hover:shadow-[#00ff9d]/20"
            >
              <i className="ri-external-link-line"></i>
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
