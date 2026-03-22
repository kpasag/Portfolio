function Body() {
  return (
    <>
      <main className="">
        {/* HERO */}
        <section className="bg-[#131313] min-h-screen flex flex-col justify-center items-center space-y-5">
          <div className="font-['Manrope'] flex flex-col items-center space-y-2">
            <h2 className="text-[#F9F7F2] text-lg uppercase tracking-[0.2em]">
              Software Engineer
            </h2>
            <h1 className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] md:text-8xl text-6xl leading-tight italic font-['Newsreader']">
              Kyle Pasag
            </h1>
            <p className="text-[#C4C6CC] text-lg max-w-1/3 text-center">
              I've been interested in technology since I was young and I have a
              passion for building and creating systems. Whether it's backend
              APIs, server infrastructure, or the architecture no one ever sees,
              I enjoy making the things that make everything else work.
            </p>
          </div>
          <div className="uppercase flex space-x-2">
            <button className="py-2 cursor-pointer px-4 bg-[#B8860B] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-sm border border-[#B8860B]">
              View my work
            </button>
            <button className="py-2 cursor-pointer px-4 bg-[] hover:bg-amber-400 duration-300 hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#B8860B] border border-[#B8860B] rounded-sm">
              Get in touch
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Body;
