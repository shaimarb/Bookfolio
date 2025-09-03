import PageSection from "../components/PageSection.jsx";

const links = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  { label: "Email", href: "mailto:you@example.com" },
];

export default function Contact({ id, chapter, pageNumber }) {
  return (
    <PageSection id={id} chapter={chapter} pageNumber={pageNumber}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-neutral-700 mb-6">
          I’m open to software engineering internships and junior roles. If you think I’m a fit for your team, drop a note!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map(l => (
            <a key={l.label} href={l.href} className="rounded-full border border-neutral-300 bg-white px-4 py-2 hover:border-neutral-500 transition" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Shaima Rahman. Built with React, Tailwind, and Framer Motion.
        </p>
      </div>
    </PageSection>
  );
}
