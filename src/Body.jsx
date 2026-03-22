import { useState, useEffect } from "react";

const TITLES = [
  "Software Engineer",
  "Cybersecurity Engineer",
  "Backend Developer",
  "DevOps Engineer",
];

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
            <button className=" py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[#B8860B] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-sm border border-[#B8860B] text-[#F2ECE0]">
              VIEW MY WORK
            </button>
            <button className="py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#B8860B] border border-[#B8860B] rounded-sm">
              GET IN TOUCH
            </button>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-400 mx-auto py-30 min-h-screen">
          <SubtitleSection 
          label={`Portfolio`}
          title={`Projects`}
          />
        </section>
      </main>
    </>
  );
}

export default Body;
