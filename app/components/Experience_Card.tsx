import { Experience } from "../types/Experience";

export default function Experience_Card({ experience }: { experience: Experience }) {
    return (
        <div className="relative pl-8 md:pl-12 group">
            {/* The Timeline Node */}
            <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full border-4 border-[#0f172a] bg-slate-700 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300" />
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-blue-500/30 group-hover:bg-white/[0.07] transition-all duration-300 shadow-xl">
                <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">{experience.duration}</span>
                <h3 className="text-3xl font-bold text-white mt-1 mb-2">{experience.title}</h3>
                <h4 className="text-xl font-medium text-gray-300 mb-4">{experience.company}</h4>
                
                <ul className="space-y-2">
                    {/* Assuming you updated the interface to an array as discussed */}
                    {experience.description.split('\n').map((point, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}