import { useState } from "react";

const EMAIL = "dautvuniqi@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/ddakii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daut-vuniqi-264195281/" },
  { label: "Instagram", href: "https://www.instagram.com/dakivuniqii/" },
];

const Contact = () => {
  const [sentHint, setSentHint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setSentHint("Add your name, email, and a short note.");
      return;
    }

    const subject = encodeURIComponent(`Project note from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSentHint("Your email app should open with the note ready to send.");
  };

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Contact</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">Tell me what the shop needs.</h2>
          <a href={`mailto:${EMAIL}`} className="mt-6 inline-block text-lg underline decoration-wine underline-offset-4">
            {EMAIL}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <label className="block text-sm">
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              className="mt-1 w-full border-b border-line bg-transparent py-2 outline-none focus:border-ink"
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 w-full border-b border-line bg-transparent py-2 outline-none focus:border-ink"
            />
          </label>
          <label className="block text-sm">
            Message
            <textarea
              name="message"
              rows="5"
              className="mt-1 w-full resize-y border-b border-line bg-transparent py-2 outline-none focus:border-ink"
            />
          </label>
          <button type="submit" className="rounded-full bg-wine px-5 py-2.5 text-sm text-paper">
            Send a note
          </button>
          {sentHint && <p className="text-sm text-muted">{sentHint}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
