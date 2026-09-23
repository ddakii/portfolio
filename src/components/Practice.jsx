import { useEffect, useRef, useState } from "react";

const slices = [
  { label: "Shops", detail: "Storefronts and restaurants", count: 5, color: "#7c2f2a" },
  { label: "Auto & service", detail: "Repair, detailing, tires", count: 3, color: "#3d4a38" },
  { label: "Studios & tools", detail: "Panels, booking, internal apps", count: 4, color: "#1c1714" },
];

const stats = [
  { label: "Live sites", value: 6 },
  { label: "Projects", value: 12 },
  { label: "Languages", value: 2 },
];

const total = slices.reduce((sum, slice) => sum + slice.count, 0);

const useOnScreen = () => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, on];
};

const Count = ({ value, on }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!on) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(value);
      return undefined;
    }

    let frame;
    const start = performance.now();
    const duration = 900;

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [on, value]);

  return current;
};

const Practice = () => {
  const [ref, on] = useOnScreen();
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const gap = 22;
  let cursor = 0;

  return (
    <section ref={ref} className="border-t border-line" aria-label="Practice">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-24">
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg viewBox="0 0 220 220" className="h-56 w-56" role="img" aria-label="Twelve projects split across shops, auto work, and studio tools">
              <circle cx="110" cy="110" r={radius} fill="none" stroke="#d9d0c4" strokeWidth="16" />
              {slices.map((slice) => {
                const length = Math.max((slice.count / total) * circumference - gap, 0);
                const rotation = (cursor / total) * 360 - 90;
                cursor += slice.count;
                return (
                  <circle
                    key={slice.label}
                    cx="110"
                    cy="110"
                    r={radius}
                    fill="none"
                    stroke={slice.color}
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray={on ? `${length} ${circumference}` : `0 ${circumference}`}
                    transform={`rotate(${rotation} 110 110)`}
                    className="chart-ring"
                  />
                );
              })}
            </svg>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-5xl leading-none">
                <Count value={total} on={on} />
              </span>
              <span className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">Projects</span>
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {slices.map((slice) => (
              <li key={slice.label} className="flex items-center gap-2 text-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: slice.color }} />
                {slice.label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">The mix</p>
          <h2 className="mt-3 max-w-md font-serif text-4xl tracking-tight sm:text-5xl">Shops first, then the tools around them.</h2>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</dt>
                <dd className="mt-1 font-serif text-4xl">
                  <Count value={stat.value} on={on} />
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 space-y-5">
            {slices.map((slice, index) => (
              <li key={slice.label}>
                <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
                  <span>{slice.label}</span>
                  <span className="text-muted">{slice.detail}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-line">
                  <div
                    className="chart-bar h-full rounded-full"
                    style={{
                      width: on ? `${(slice.count / total) * 100}%` : "0%",
                      background: slice.color,
                      transitionDelay: `${index * 120}ms`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Practice;
