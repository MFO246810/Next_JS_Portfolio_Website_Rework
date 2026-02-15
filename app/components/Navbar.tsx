"use client";

export default function Navbar() {
    return(
        <nav className="w-full shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold text-gray-800 text-white">My Portfolio</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#experiences" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Experiences</a>
                            <a href="#projects" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
    
}