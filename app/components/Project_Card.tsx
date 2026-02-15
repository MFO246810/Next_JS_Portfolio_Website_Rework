import { Project } from "../types/Project";

export default function Project_Card({ project }: { project: Project }) {
    return (
        <>
            <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="text-white px-1 py-1 text-sm underline">
                            {tech}
                        </span>
                    ))}
                </div>
                <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
        </>
    );
}