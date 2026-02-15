import Experience_Card from "./Experience_Card";
import { Experience_Data } from "../data/Experience_Data";

export default function Experience_Section(){
    return(
        <>
            <section className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Work <span className="text-blue-500">Experience</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full items-center" />
                </div>
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6">
                        <div className="space-y-12">
                            {Experience_Data.map((experience, index) => (
                                <Experience_Card key={index} experience={experience} />
                            ))}
                        </div>
                    </div>
                </div> 
            </section>
        </>
    )
}