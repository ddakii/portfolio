import { featured, moreWork } from "../data/projects";

const live = [...featured, ...moreWork].filter((project) => project.live);
const loop = [...live, ...live];

const Practice = () => {
  return (
    <section className="border-t border-line py-16 md:py-24" aria-label="Live sites">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-muted">Open</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">The sites that are already up.</h2>
      </div>

      <div className="marquee mt-10 border-y border-line py-5">
        <div className="marquee-track">
          {loop.map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              tabIndex={index >= live.length ? -1 : undefined}
              aria-hidden={index >= live.length ? true : undefined}
              className="group mx-6 inline-flex items-baseline gap-4 whitespace-nowrap font-serif text-5xl tracking-tight text-ink sm:mx-10 sm:text-7xl"
            >
              {project.title}
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted group-hover:text-wine">{project.kind}</span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Practice;
