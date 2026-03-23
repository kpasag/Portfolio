function Footer() {
  return (
    <footer className="font-['Newsreader'] bg-[#F2ECE0] dark:bg-[#0F172A] border-t border-[#D4A843] dark:border-[#4A6F8C] py-12 px-20">
      <section className="max-w-400 mx-auto flex flex-col items-center text-center space-y-4">
        <p className="text-[#2A2318]/40 dark:text-[#94A3B8]/50 text-sm font-sans italic">
          Light mode blessed by the Erdtree. Dark mode by Rennala. No summons
          were used in the making of this site.
        </p>
        <div className="w-16 border-t border-[#D4A843]/30 dark:border-[#4A6F8C]/30" />
        <p className="text-[#2A2318]/50 dark:text-[#94A3B8]/60 text-xs font-sans tracking-widest uppercase">
          © 2026 Kyle Pasag
        </p>
      </section>
    </footer>
  );
}

export default Footer;