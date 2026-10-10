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
          <h2 className="mt-3 max-w-xl font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">Building shops that work from day one.</h2>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Full-stack web developer from Kosovo, focused on building real products for real businesses. I create storefronts with working checkout, admin panels owners can actually use, and internal tools that solve day-to-day problems.
            </p>
            <p>
              My work spans e-commerce, booking systems, restaurant sites, and business management tools — most built in both Albanian and English. Every project ships with the backend, database, and admin side included.
            </p>
            <p>
              I’m not here to build pretty demos. I build things that take orders, track inventory, and let business owners run their shop without calling a developer.
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
