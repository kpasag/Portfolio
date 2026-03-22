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

function ExperienceCard({ date, title, company, paragraph }) {
  return (
    <section className="flex flex-col gap-y-2 ">
      <div className="flex items-center  gap-x-4 text-[#B8860B] uppercase">
        <span className="text-xl -translate-x-0.5">•</span>
        <h3>{date}</h3>
      </div>
      <div className="px-6">
        <h2 className="text-2xl text-[#2A2318] font-serif">{title}</h2>
        <h3 className="text-[#B8860B] font-serif font-semibold text-xl">
          {company}
        </h3>
        <p className="text-[rgba(42,35,24,0.6)]">{paragraph}</p>
      </div>
    </section>
  );
}

function SkillsCard({ title, skills }) {
  return (
    <section className="bg-[#E8E0D0] hover:bg-[#DED5C3] rounded-2xl p-6 border border-[rgba(184,134,11,0.2)] space-y-4 font-serif h-55">
      <h1 className="font-semibold text-[25px] text-[#D4AF37] ">{title}</h1>
      <div className="flex gap-2 text-[#ae8a2d] text-md flex-wrap">
        {skills.map((skill, index) => (
          <p
            className="bg-[rgba(212,168,67,0.12)] px-4 py-2 border rounded-3xl border-[#D4AF37] "
            key={index}
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ img, title, paragraph, codeStacks, github }) {
  return (
    <section className="flex flex-col bg-[#E8E0D0] rounded-2xl h-110 font-['Manrope'] border border-[rgba(184,134,11,0.2)] hover:border-[rgba(184,134,11,0.45)] hover:bg-[#DED5C3] duration-200">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="md:w-full h-48 bg-cover bg-top bg-no-repeat overflow-hidden p-4 rounded-t-2xl"
      ></div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h2 className="text-[#B8860B] text-center text-[23px] font-serif font-semibold">
            {title}
          </h2>
        </div>
        <p className="text-[rgba(42,35,24,0.6)] text-md">{paragraph}</p>
        <div className="flex gap-2 text-[#D4AF37] drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] font-medium py-2 flex-wrap text-[14px] ">
          {codeStacks.map((stack, index) => (
            <p
              className="py-1 px-2 transition-all bg-[] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#B8860B] border border-[#B8860B] rounded-sm"
              key={index}
            >
              {stack}
            </p>
          ))}
        </div>
        <a
          className="px-2 py-1 inline-flex space-x-1 transition-all bg-[#B8860B] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-lg border border-[#B8860B] text-[#F2ECE0] items-center text-sm"
          href={github}
        >
          <svg
            width="20"
            height="20"
            fill="#F2ECE0"
            viewBox="0 -0.5 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"></path>
            </g>
          </svg>
          <p>View on GitHub</p>
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
      <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 text-[#2A2318]">
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
            <h1 className="text-[#2A2318] md:text-8xl text-6xl leading-tight tracking-wide font-['Newsreader']">
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
            <a
              href="#projects"
              className=" py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[#B8860B] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-sm border border-[#B8860B] text-[#F2ECE0]"
            >
              VIEW MY WORK
            </a>
            <a
              href=""
              className="py-3.5 cursor-pointer px-9 tracking-[0.15em] transition-all bg-[] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#B8860B] border border-[#B8860B] rounded-sm"
            >
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 gap-4">
            <ProjectCard
              img={medtime}
              title={`MedTime`}
              paragraph={`Medication management web app built in 24 hours at nwHacks 2026. Built the React UI flows and authentication, debugged end-to-end issues, and deployed on Firebase Hosting and Render.`}
              codeStacks={[
                "React",
                "MongoDB",
                "Firebase",
                "HTML",
                "Tailwind CSS",
              ]}
              github={`https://github.com/kpasag/MedTime`}
            />
            <ProjectCard
              img={healthquest}
              title={`HealthQuest`}
              paragraph={`Gamified fitness tracking app built as team lead in a group of three. Coordinated agile sprints, managed Git collaboration, and built on Firebase for real-time workout logging.`}
              codeStacks={[
                "Javascript",
                "NodeJS",
                "Firebase",
                "HTML",
                "Tailwind CSS",
              ]}
              github={`https://github.com/kpasag/HealthQuest`}
            />
            <ProjectCard
              img={clashroom}
              title={`Clashroom`}
              paragraph={`Real-time multiplayer classroom Bingo game built at HackCamp 2025. Implemented Firestore state sync and win detection, and debugged race condition issues under a tight deadline.`}
              codeStacks={["Javascript", "Firebase", "HTML", "Tailwind CSS"]}
              github={`https://github.com/kpasag/Clashroom`}
            />
            <ProjectCard
              img={pasag_server}
              title={`Home Server`}
              paragraph={`Headless Ubuntu server running since 2022. Hosts cloud services, media streaming, and game servers. Secured with ED25519 keys and managed through systemd.`}
              codeStacks={["Ubuntu", "Bash", "SSH", "Lua", "Plex", "Sambda"]}
              github={`https://github.com/kpasag/HomeServer`}
            />
            <ProjectCard
              img={veil}
              title={`Veil of Mysteries`}
              paragraph={`Terminal-based RPG with 10x10 grid exploration, inventory management, and boss fights. Player data persisted in JSON with unit tests and input validation for reliability.`}
              codeStacks={["Python"]}
              github={`https://github.com/kpasag/veil-of-mysteries`}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="flex flex-col justify-center max-w-400 mx-auto py-30 min-h-screen px-20"
        >
          <SubtitleSection label={`Toolkit`} title={`Skills`} />
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 pt-5">
            <SkillsCard
              title={`Languages`}
              skills={["Java", "Python", "C", "JavaScript", "SQL", "HTML/CSS"]}
            />
            <SkillsCard
              title={`Frameworks`}
              skills={[
                "React",
                "Node.js",
                "Express",
                "JQuery",
                "Ajax",
                "Bootstrap",
                "TailwindCSS",
              ]}
            />
            <SkillsCard
              title={`Tools`}
              skills={[
                "Ubuntu",
                "SSH",
                "NeoVim",
                "Git",
                "VSCode",
                "JetBrains",
                "Figma",
                "Trello",
              ]}
            />
            <SkillsCard
              title={`Database`}
              skills={["Firebase", "MongoDB", "PostgreSQL"]}
            />
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="max-w-400 mx-auto py-30 min-h-screen px-20"
        >
          <div className="pb-10">
            <SubtitleSection
              label={`Journey`}
              title={`Experience & Education`}
            />
          </div>
          <div className="space-y-10 border-l border-[#D4A843] max-w-2/3">
            <ExperienceCard
              date={`May 2026 - Aug 2026`}
              title={`IT Support Intern (Co-op)`}
              company={`Walt Disney Animation Studio`}
              paragraph={`Supporting the technology infrastructure behind animated feature films. Working closely with the IT team on systems support, troubleshooting, and tooling.`}
            />
            <ExperienceCard
              date={`Sep 2025 - May 2027 (Expected)`}
              title={`Computer Systems Technology Diploma`}
              company={`British Columbia Institute of Technology`}
              paragraph={`Studying software development, database systems, networking, and digital systems. Coursework in Java OOP, C programming, relational databases, and discrete math.`}
            />
            <ExperienceCard
              date={`Aug 2023 - Sep 2025`}
              title={`IT Support Ambassador & Learning Ambassador`}
              company={`Amazon`}
              paragraph={`Sole night-shift IT support resolving 500+ technical issues. Also served as Learning Ambassador, training 200+ associates on systems and processes.`}
            />
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="max-w-400 mx-auto py-30 min-h-screen px-20 flex flex-col justify-center"
        >
          <SubtitleSection label={`WHO I AM`} title={`About Me`} />
          <article>
            <div className="pt-5 font-['Manrope'] text-[rgba(42,35,24,0.6)] w-1/2 flex flex-col gap-y-5">
              <p>
                Technology has been a core part of my life since I built my
                first PC at 13. What started as a personal hobby quickly grew
                into something bigger. I've built 8 computers for friends and
                family and set up a headless Ubuntu home server to provide cloud
                services, media streaming, and game hosting for the people
                around me.
              </p>
              <p>
                That foundation led me to an IT Support role at Amazon, where I
                served as the sole night-shift technician, resolving over 500
                issues and training 200+ associates as a Learning Ambassador.
                Working closely with Amazon's internal tools and infrastructure
                sparked a deeper interest in software development, and I made
                the decision to pursue it formally. I'm now studying Computer
                Systems Technology at BCIT, with a focus on backend development,
                systems integration, and cybersecurity.
              </p>
              <p>
                My goal is to grow into a Software Engineer, Cybersecurity
                Engineer, or DevOps Engineer. I'm drawn to the layers of
                technology that most users never interact with: the APIs, the
                architecture, and the infrastructure that make everything else
                possible.
              </p>
              <p>
                Outside of all that, I go snowboarding during the winter,
                camping and fishing with friends during the summer, and
                sometimes I like working on my car. I spend a lot of late nights
                reading Lord of Mysteries, Red Rising, and My House of Horrors,
                and play Elden Ring, CS2, and Little Nightmares whenever I get
                the chance.
              </p>
            </div>
            <div></div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Body;
