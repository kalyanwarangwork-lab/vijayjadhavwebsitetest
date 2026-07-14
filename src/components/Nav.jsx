export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference">
      <div className="font-display text-white text-lg tracking-wide">
        Vijay Jadhav
      </div>
      <ul className="flex gap-6 md:gap-9 list-none">
        <li>
          <a
            href="#work"
            className="text-white text-[0.8rem] uppercase tracking-[0.12em]"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white text-[0.8rem] uppercase tracking-[0.12em]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white text-[0.8rem] uppercase tracking-[0.12em]"
          >
            Inquire
          </a>
        </li>
      </ul>
    </nav>
  );
}
