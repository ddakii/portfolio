import { useState } from "react";
import { Link } from "react-scroll";

const links = [
  { to: "work", label: "Work" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-70}
          className="cursor-pointer font-serif text-2xl tracking-tight"
          onClick={close}
        >
          Daut Vuniqi
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              className="cursor-pointer text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/ddakii"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink px-4 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="text-sm md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-lg">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} smooth duration={500} offset={-70} onClick={close} className="cursor-pointer">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://github.com/ddakii" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
