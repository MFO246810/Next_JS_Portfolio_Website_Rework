export default function Intro_Section() {
    return (
        <div className="flex items-center justify-center font-sans">
        <div className="flex w-full max-w-4xl flex-col items-center py-16 px-8 sm:items-start">
          <h1 className="text-5xl font-bold text-white mb-4">Franklin Muoghalu</h1>
          <h2 className="text-2xl text-gray-300 mb-6">Software Developer | Web Developer | ML Engineer</h2>
          <p className="text-xl text-gray-300 mb-8">I am a passionate software developer with expertise in building modern web applications. I have experience 
            in both frontend and backend development, using technologies like React, Next.js, Node.js, and Python. I also have experience in database management 
            and cloud deployment as well as experience in ML and AI development.</p>
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-800 transition duration-300">Explore Projects</a>
        </div>
        </div>
    )
} 