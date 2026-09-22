import { featured, moreWork } from "../data/projects";

const Links = ({ project, light }) => (
  <div className="mt-6 flex flex-wrap gap-3 text-sm">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full px-4 py-2 ${light ? "bg-paper text-ink" : "bg-ink text-paper"}`}
      >
        Live site
      </a>
    )}
    <a
      href={project.code}
      target="_blank"
      rel="noreferrer"
      className={`rounded-full border px-4 py-2 ${light ? "border-paper/40" : "border-line"}`}
    >
      GitHub
    </a>
  </div>
);

const Work = () => {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">Live, and on GitHub.</h2>
          </div>
          <a
            href="https://github.com/ddakii"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink sm:inline"
          >
            github.com/ddakii
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featured.map((project, index) => (
            <article key={project.id} className={`tone-${project.tone} flex min-h-[420px] min-w-0 flex-col justify-between overflow-hidden rounded-3xl p-6 md:p-7`}>
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] opacity-70">
                  <span>0{index + 1}</span>
                  <span>{project.kind}</span>
                </div>
                <h3 className="mt-8 font-serif text-4xl leading-none">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-90">{project.summary}</p>
              </div>
              <div>
                <p className="mt-6 text-xs uppercase tracking-[0.14em] opacity-80">{project.stack.join(" · ")}</p>
                <Links project={project} light />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-3xl">More from GitHub</h3>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {moreWork.map((project) => (
              <li key={project.id} className="grid gap-3 py-6 md:grid-cols-[1.1fr_1.6fr_auto] md:items-center md:gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{project.kind}</p>
                  <h4 className="mt-1 font-serif text-2xl">{project.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
                <div className="flex gap-4 text-sm">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                      Live
                    </a>
                  )}
                  <a href={project.code} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    Code
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
