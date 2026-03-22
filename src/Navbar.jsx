function Navbar() {
  return (
    <nav className=" font-['Newsreader'] bg-[rgba(242,236,224,0.92)]  mx-auto fixed top-0 w-full items-center border-b border-[#D4A843] px-20">
      <section className="max-w-400 flex justify-between items-center py-5 mx-auto">
        <div>
          <h1 className="italic font-bold text-[#B8860B] drop-shadow-[0_0_8px_rgba(184,134,11,0.4)] text-3xl">
            <a href="">Kyle Pasag</a>
          </h1>
        </div>
        <div className="flex">
          <ul className="hidden lg:flex gap-8 font-sans text-[#2A2318]/70 text-sm uppercase tracking-[0.1rem]">
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] hover:border-b border-[D4A843]">
              <a href="#home">HOME</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] hover:border-b border-[D4A843]">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] hover:border-b border-[D4A843]">
              <a href="">SKILLS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] hover:border-b border-[D4A843]">
              <a href="">EXPERIENCE</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] hover:border-b border-[D4A843]">
              <a href="">INTERESTS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-150 hover:text-[#D4A843] hover:border-b border-[D4A843]">
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div id="darkModeToggle" className="flex items-center ">
          <button className="cursor-pointer p-2 hover:bg-white/10 rounded-xl">
            {/* <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#B8860B"
              />
            </svg> */}
            <svg
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
          </button>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
