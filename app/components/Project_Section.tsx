import { Project_Data } from "../data/Project_Data";
import Project_Card from "../components/Project_Card";

export default function Project_Section() {
    return (
        <section>
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        My <span className="text-blue-500">Projects</span>
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Project_Data.map((project, index) => (
                        <Project_Card key={index} project={project} />
                    ))}
                </div>
            </div> 
        </section>
    );
}
