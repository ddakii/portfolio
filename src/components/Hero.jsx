import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="mx-auto grid w-full min-w-0 max-w-6xl items-end gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.4fr_0.8fr] md:px-8 md:pb-24 md:pt-20">
      <div className="min-w-0">
        <p className="rise mb-6 text-xs uppercase tracking-[0.28em] text-muted">Web developer</p>
        <h1 className="max-w-full font-serif text-[2.15rem] leading-[0.95] tracking-tight min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="rise rise-1 block">Shops, studios,</span>
          <span className="rise rise-2 block italic text-wine">and the tools</span>
          <span className="rise rise-3 block">that keep them open.</span>
        </h1>
        <p className="rise rise-4 mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I’m Daut Vuniqi. I build storefronts people can buy from, and the admin side the owner
          actually uses — fashion houses, auto shops, and local businesses.
        </p>
        <div className="rise rise-4 mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.5s" }}>
          <Link
            to="work"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-full bg-ink px-5 py-2.5 text-sm text-paper"
          >
            See the work
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-full border border-ink px-5 py-2.5 text-sm"
          >
            Start a project
          </Link>
        </div>
      </div>

      <figure className="float-card relative w-full min-w-0 max-w-[280px] md:max-w-xs md:justify-self-end">
        <div className="overflow-hidden rounded-2xl bg-ink/5 p-3 shadow-lg shadow-ink/10">
          <img
            src="/portrait.png"
            alt="Daut Vuniqi wearing a graduation cap and glasses"
            className="block aspect-[4/5] w-full rounded-xl object-cover object-top grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted">
          <span>Daut Vuniqi</span>
          <span>2026</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero;
