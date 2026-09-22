const groups = [
  {
    title: "Interface",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Server & data",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "SQLite"],
  },
  {
    title: "Shipping",
    items: ["Git", "GitHub", "Railway"],
  },
];

const About = () => {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">About</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">Nineteen, and already shipping shops.</h2>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              The last version of this site called me an 18-year-old frontend developer looking for an
              internship. The work since then is more specific.
            </p>
            <p>
              IVA Accessories and Dresses by Florinda are live stores with checkout and a studio for
              the owner. ACCESSO.KOS is a panel for a bags business. On GitHub there are booking
              flows, repair-shop tools, and sites written in Albanian and English.
            </p>
            <p>
              I care about the part after the homepage looks finished: an order that saves, stock that
              updates, and a person who can change a product without waiting on me.
            </p>
          </div>
        </div>

        <div className="space-y-8 border-t border-line pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-[0.22em] text-muted">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm leading-relaxed text-muted">
            Open to client sites and a first role where the job is to keep shipping real products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
