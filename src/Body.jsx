import { useState, useEffect } from "react";
import clashroom from "./assets/Clashroom.png";
import medtime from "./assets/Dashboard.png";
import healthquest from "./assets/HealthQuest.png";
import veil from "./assets/VeilOfMysteries.png";
import pasag_server from "./assets/pasag_server.png";

const TITLES = [
  "Software Engineer",
  "Cybersecurity Engineer",
  "Backend Developer",
  "DevOps Engineer",
];

function ProjectCard({ img, title, paragraph, codeStacks, github }) {
  return (
    <section className="flex flex-col bg-[#E8E0D0] rounded-2xl h-110 font-['Manrope']">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="md:w-full h-48 bg-cover bg-top bg-no-repeat overflow-hidden p-4 rounded-t-2xl"
      ></div>
      <div className="p-4 space-y-2">
        <h2 className="text-[#2A2318] text-center text-xl font-semibold tracking-wide">
          {title}
        </h2>
        <p className="text-[rgba(42,35,24,0.6)]">{paragraph}</p>
        <div className="flex space-x-2 text-[#D4AF37] drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] font-medium py-2">
          {codeStacks.map((stack, index) => (
            <p className="border py-1 px-2 rounded-sm" key={index}>
              {stack}
            </p>
          ))}
        </div>

        <a className="px-4 py-2" href={github}>
          View on GitHub
        </a>
      </div>
    </section>
  );
}

function SubtitleSection({ label, title }) {
  return (
    <>
      <p className="font-['Outfit'] text-[0.7rem] uppercase tracking-[0.35em] mb-3 text-[#B8860B]">
        {label}
      </p>
      <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-4">
        {title}
      </h2>
      <div className="w-15 h-px bg-[#B8860B] drop-shadow-sm"></div>
    </>
  );
}

function Body() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // the code we want to run
    const currentTitle = TITLES[titleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText.length < currentTitle.length) {
          // char length
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else if (!isDeleting && displayText.length === currentTitle.length) {
          setIsDeleting(true);
        } else if (isDeleting && displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else if (isDeleting && displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % TITLES.length);
        }
      },
      isDeleting ? 60 : 120,
    );

    return () => clearTimeout(timer);
  }, [displayText, titleIndex, isDeleting]); // the array is what the useEffect listens to,
  // so if any of the values in the array changes, it'll update the value inside it.

  return (
    <>
      <main id="home" className="bg-[#F2ECE0]">
        {/* HERO */}
        <section className=" min-h-screen flex flex-col justify-center items-center space-y-5">
          <div className="font-['Manrope'] flex flex-col items-center space-y-2">
            <h3 className="font-['Outfit'] uppercase tracking-[0.3em] text-[1.0rem] text-[rgba(42,35,24,0.6)]">
              Welcome to my portfolio
            </h3>
            <h1 className="text-[#2A2318] md:text-8xl text-6xl leading-tight font-['Newsreader']">
              <span>Hi! I'm </span>
              <span className="drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#D4AF37]">
                Kyle Pasag
              </span>
            </h1>
            <h2 className="text-[#D4A843] text-lg uppercase tracking-[0.2em] pb-6">
              <span>ASPIRING </span>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-[rgba(42,35,24,0.6)] text-lg max-w-1/3 text-center">
              A Computer Science student at the British Columbia Institute of
              Technology with a background in IT support and a passion for
              Backend, APIs & Systems Integration. I've been interested in
              technology since I was young and I enjoy building the systems that
              make everything else work.
            </p>
          </div>
          <div className="font-['Outfit'] text-[0.8rem] font-medium flex space-x-2">
            <a href="#projects" className=" py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[#B8860B] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-sm border border-[#B8860B] text-[#F2ECE0]">
              VIEW MY WORK
            </a>
            <a href="" className="py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#B8860B] border border-[#B8860B] rounded-sm">
              GET IN TOUCH
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="max-w-400 mx-auto py-30 min-h-screen px-20"
        >
          <SubtitleSection label={`Portfolio`} title={`Projects`} />
          <div className="grid grid-cols-3 pt-5 gap-4">
            <ProjectCard
              img={medtime}
              title={`MedTime`}
              paragraph={`Real-time multiplayer classroom Bingo game built at HackCamp 2025. Implemented Firestore state sync and win detection, and debugged race condition issues under a tight deadline.`}
              codeStacks={["Javascript", "Firebase", "HTML", "Tailwind CSS"]}
              github={`https://github.com/kpasag/Clashroom`}
            />
            <ProjectCard
              img={healthquest}
              title={`Clashroom`}
              paragraph={`Real-time multiplayer classroom Bingo game built at HackCamp 2025. Implemented Firestore state sync and win detection, and debugged race condition issues under a tight deadline.`}
              codeStacks={["Javascript", "Firebase", "HTML", "Tailwind CSS"]}
              github={`https://github.com/kpasag/Clashroom`}
            />
            <ProjectCard
              img={clashroom}
              title={`Clashroom`}
              paragraph={`Real-time multiplayer classroom Bingo game built at HackCamp 2025. Implemented Firestore state sync and win detection, and debugged race condition issues under a tight deadline.`}
              codeStacks={["Javascript", "Firebase", "HTML", "Tailwind CSS"]}
              github={`https://github.com/kpasag/Clashroom`}
            />
            <ProjectCard
              img={veil}
              title={`Clashroom`}
              paragraph={`Real-time multiplayer classroom Bingo game built at HackCamp 2025. Implemented Firestore state sync and win detection, and debugged race condition issues under a tight deadline.`}
              codeStacks={["Javascript", "Firebase", "HTML", "Tailwind CSS"]}
              github={`https://github.com/kpasag/Clashroom`}
            />
            <ProjectCard
              img={pasag_server}
              title={`Clashroom`}
              paragraph={`Real-time multiplayer classroom Bingo game built at HackCamp 2025. Implemented Firestore state sync and win detection, and debugged race condition issues under a tight deadline.`}
              codeStacks={["Javascript", "Firebase", "HTML", "Tailwind CSS"]}
              github={`https://github.com/kpasag/Clashroom`}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Body;
