import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    const savedValue = localStorage.getItem("theme"); //gets the saved value in the browser
    if (savedValue) return savedValue === "dark"; // checks if saved has a value. If true then return true if value is dark, false otherwise.
    return window.matchMedia("(prefers-color-scheme: dark)").matches; // if there are no saved values, then this checks the user's browser theme preference and returns true if user prefers dark, false otherwise.
  });

  // useEffect updates when a variable its checking updates. In this case it's checking for every update for dark.
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // save theme in user's browser
            document.querySelector('link[rel="icon"]').href =
              "/favicon-dark.svg";

    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
            document.querySelector('link[rel="icon"]').href =
              "/favicon-light.svg";

    }
  }, [dark]); // <-- all the variables its checking. You can add more by [var1, var2].

  return (
    <button
      onClick={() => setDark(!dark)}
      className="cursor-pointer p-2 hover:bg-gray-700/10 hover:text-[#F2ECE0] dark:hover:bg-white/10 rounded-xl text-[#ffca28]"
    >
      {dark ? (
        <svg
          className="drop-shadow-[0_0_8px_rgba(168,196,224,0.2)]"
          viewBox="0 0 128 128"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="64" cy="64" r="60" fill="#A8C4E0 "></circle>
            <path
              d="M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08c1.23 2.54.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M97.71 106c-.22-.13-.6-1.22.58-2.57c1.18-1.35 4.68-5.33 6.01-6.92s2.66-.18 2.52 1.09c-.7 6.11-6.79 9.73-9.11 8.4z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M109.01 94.19c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2c1.02 4.86-2.73 9.19-4.85 8.76z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M86.51 13.32c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68c-1.55-.58-.79-1.98.22-2.22c4.88-1.15 9.16 2.49 8.7 4.63z"
              fill="#6B8CAE "
            ></path>
            <path
              d="M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z"
              fill="#6B8CAE "
            ></path>
          </g>
        </svg>
      ) : (
        // #ffca28 #ffe082 #ffb300
        <svg
          className="drop-shadow-[0_0_8px_rgba(184,134,11,0.1)]"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ffe082"
            d="M24,17c-1.37,0-2.68,0.28-3.87,0.78l-0.051,1.273l0.811,0.577C21.85,19.22,22.9,19,24,19	c4.41,0,8,3.59,8,8s-3.59,8-8,8c-2.88,0-5.4-1.53-6.82-3.82l-1.49,1.38C17.49,35.23,20.54,37,24,37c5.51,0,10-4.49,10-10	S29.51,17,24,17z"
          ></path>
          <path
            fill="#ffca28"
            d="M27.36,22.57c-2.06,0.29-3.98,1.49-5.09,3.43c-0.08,0.14-0.15,0.27-0.22,0.41l-1.024-0.252	L20.43,25.2c0.03-0.07,0.07-0.13,0.11-0.2c1.35-2.35,3.61-3.86,6.09-4.33l0.981,0.988L27.36,22.57z"
          ></path>
          <path
            fill="#ffca28"
            d="M19.67,38.5c-4.963,0-9-4.038-9-9h2c0,3.86,3.141,7,7,7s7-3.14,7-7h2	C28.67,34.462,24.633,38.5,19.67,38.5z"
          ></path>
          <rect width="2" height="39" x="23" y="7" fill="#ffb300"></rect>
          <path
            fill="#ffca28"
            d="M24,47c-9.882,0-17.32-5.971-17.632-6.225l1.263-1.551C7.702,39.282,14.849,45,24,45	c9.178,0,16.297-5.717,16.368-5.775l1.264,1.55C41.32,41.029,33.882,47,24,47z"
          ></path>
          <path
            fill="#ffca28"
            d="M28.67,29.5h-2c0-3.86-3.141-7-7-7s-7,3.14-7,7l-0.975,0.447L10.67,29.5c0-4.962,4.037-9,9-9	S28.67,24.538,28.67,29.5z"
          ></path>
          <path
            fill="#ffca28"
            d="M24,31c-4.963,0-9-4.038-9-9s4.037-9,9-9s9,4.038,9,9S28.963,31,24,31z M24,15c-3.859,0-7,3.14-7,7	s3.141,7,7,7s7-3.14,7-7S27.859,15,24,15z"
          ></path>
          <path
            fill="#ffca28"
            d="M32.56,35.07c-2.18,1.65-5.22,1.94-7.73,0.49c-1.62-0.93-2.78-2.44-3.26-4.25	c-0.45-1.65-0.28-3.38,0.48-4.9l-1.62-1.21c-1.12,2.04-1.4,4.38-0.79,6.63c0.62,2.32,2.11,4.26,4.19,5.46	c1.41,0.82,2.96,1.21,4.48,1.21c1.79,0,3.55-0.53,5.04-1.54L32.56,35.07z"
          ></path>
          <path
            fill="#ffca28"
            d="M24,7c-5.064,0-9.074-0.988-9.242-1.03l0.484-1.94C15.281,4.04,19.193,5,24,5s8.719-0.96,8.758-0.97	l0.484,1.94C33.074,6.012,29.064,7,24,7z"
          ></path>
          <polygon
            fill="#ffb300"
            points="22,7 23,8 24.963,8 26,7 24.5,2 23.5,2"
          ></polygon>
          <path
            fill="#ffe082"
            d="M16,27c0,1.53,0.44,2.96,1.18,4.18l-0.417,1.041L15.69,32.56C14.62,30.97,14,29.06,14,27	c0-4.14,2.53-7.7,6.13-9.22l0.76,1.85C18.02,20.85,16,23.69,16,27z"
          ></path>
          <path
            fill="#ffca28"
            d="M36.12,34c-0.71,1.23-1.66,2.22-2.77,2.96l-0.655-0.744L32.56,35.07c0.72-0.54,1.35-1.24,1.83-2.07	c1.93-3.34,0.78-7.63-2.56-9.56c-1.1-0.64-2.3-0.94-3.49-0.94c-0.33,0-0.66,0.02-0.98,0.07l-0.73-1.9c2.05-0.4,4.25-0.09,6.2,1.04	C37.13,24.19,38.61,29.7,36.12,34z"
          ></path>
        </svg>
      )}
    </button>
  );
}

function Navbar() {
  return (
    <nav className=" font-['Newsreader'] bg-[rgba(242,236,224,0.90)] dark:bg-[rgba(15,23,42,0.90)] mx-auto fixed top-0 w-full items-center border-b border-[#D4A843] dark:border-[#4A6F8C] px-20 z-50">
      <section className="max-w-400 flex justify-between items-center py-5 mx-auto">
        <div>
          <h1 className="italic font-bold text-[#B8860B] dark:text-[#A8C4E0] drop-shadow-[0_0_8px_rgba(184,134,11,0.15)] dark:drop-shadow-[0_0_8px_rgba(168,196,224,0.1)] text-3xl">
            <a href="">Kyle Pasag</a>
          </h1>
        </div>
        <div className="flex">
          <ul className="hidden lg:flex gap-8 font-sans text-[#2A2318]/70 dark:text-[#94A3B8] text-sm uppercase tracking-[0.1rem]">
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] dark:hover:text-[#A8C4E0] hover:border-b border-[D4A843]">
              <a href="#home">HOME</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] dark:hover:text-[#A8C4E0] hover:border-b border-[D4A843]">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] dark:hover:text-[#A8C4E0] hover:border-b border-[D4A843]">
              <a href="#skills">SKILLS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] dark:hover:text-[#A8C4E0] hover:border-b border-[D4A843]">
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] dark:hover:text-[#A8C4E0] hover:border-b border-[D4A843]">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] dark:hover:text-[#A8C4E0] hover:border-b border-[D4A843]">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div id="darkModeToggle" className="flex items-center ">
          <DarkModeToggle />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
