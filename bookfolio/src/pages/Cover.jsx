import PageSection from "../components/PageSection.jsx";

function Kbd({ children }) {
  return <kbd className="rounded border border-neutral-300 bg-neutral-50 px-1.5 py-0.5 text-xs shadow-sm">{children}</kbd>;
}

export default function Cover({ id, pageNumber }) {
  const links = [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:you@example.com" },
  ];
  return (
    <PageSection id={id} pageNumber={pageNumber}>
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Shaima Rahman</h1>
        <p className="text-lg md:text-xl text-neutral-600">Software Engineer • MERN • AI-curious</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {links.map(l => (
            <a key={l.label} href={l.href} className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 hover:border-neutral-500 transition" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
        <div className="text-xs text-neutral-500">
          Tip: Use <Kbd>PgDn</Kbd>/<Kbd>PgUp</Kbd> or <Kbd>Space</Kbd> to flip pages
        </div>
      </div>
    </PageSection>
  );
}
