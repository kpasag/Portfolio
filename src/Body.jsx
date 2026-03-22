import { useState, useEffect } from "react";

const TITLES = [
  "Software Engineer",
  "Cybersecurity Engineer",
  "Backend Developer",
  "DevOps Engineer",
];

function Body() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText.length < currentTitle.length) {
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
  }, [displayText, titleIndex, isDeleting]);

  return (
    <>
      <main className="">
        {/* HERO */}
        <section className="bg-[#131313] min-h-screen flex flex-col justify-center items-center space-y-5">
          <div className="font-['Manrope'] flex flex-col items-center space-y-2">
            <h2 className="text-[#F9F7F2] text-lg uppercase tracking-[0.2em]">
              <span>ASPIRING </span>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <h1 className="text-[#F9F7F2] md:text-8xl text-6xl leading-tight italic font-['Newsreader']">
              <span>Hi! I'm </span>
              <span className="drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#D4AF37]">
                Kyle Pasag
              </span>
            </h1>
            <p className="text-[#C4C6CC] text-lg max-w-1/3 text-center">
              A Computer Science student at the British Columbia Institute of
              Technology with a background in IT support and a passion for
              Backend, APIs & Systems Integration. I've been interested in
              technology since I was young and I enjoy building the systems that
              make everything else work.
            </p>
          </div>
          <div className="font-['Outfit'] text-[0.8rem] font-medium flex space-x-2">
            <button className=" py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[#B8860B] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-sm border border-[#B8860B]">
              VIEW MY WORK
            </button>
            <button className="py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#B8860B] border border-[#B8860B] rounded-sm">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Body;
