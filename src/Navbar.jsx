function Navbar() {
  return (
    <nav
      id="home"
      className=" font-['Newsreader'] bg-[#131313]/90  mx-auto fixed top-0 w-full items-center drop-shadow-xl"
    >
      <section className="max-w-7xl flex justify-between items-center p-5 mx-auto">
        <div>
          <h1 className="italic font-bold text-[#B8860B] drop-shadow-[0_0_8px_rgba(184,134,11,0.4)] text-2xl">
            <a href="">Kyle Pasag</a>
          </h1>
        </div>
        <div className="flex">
          <ul className="flex gap-8 font-sans text-[#e5e2e1]/70 text-sm uppercase tracking-[0.1rem]">
            <li className="hover:tracking-[0.2rem] duration-300 hover:text-[#B8860B]">
              <a href=".home">HOME</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-300 hover:text-[#B8860B]">
              <a href="">PROJECTS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-300 hover:text-[#B8860B]">
              <a href="">SKILLS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-300 hover:text-[#B8860B]">
              <a href="">EXPERIENCE</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-300 hover:text-[#B8860B]">
              <a href="">INTERESTS</a>
            </li>
            <li className="hover:tracking-[0.2rem] duration-300 hover:text-[#B8860B]">
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div id="darkModeToggle" className="flex items-center">
          <button className="cursor-pointer" >
            <svg
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
            </svg>
          </button>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
