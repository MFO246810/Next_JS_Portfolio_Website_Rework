import Experience_Section from "./components/Experience_Section";
import Project_Section from "./components/Project_Section";
import Intro_Section from "./components/Intro_Section";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 sm:items-start">
          <Intro_Section />\
          <div id="experiences" className="w-full">
            <Experience_Section />
          </div>
          <div id="projects" className="w-full">
            <Project_Section />
          </div>
        </main>
      </div>
    </>
    
  );
}
