import PageSection from "../components/PageSection.jsx";

const projects = [
  {
    title: "EpiFusion AI (Hackathon)",
    blurb: "AI-driven outbreak surveillance dashboard with risk scoring, Leaflet maps, and MongoDB backend.",
    tech: ["React","Express","MongoDB","Gemini API"],
    href: "#"
  },
  {
    title: "Ocktiv LMS Features",
    blurb: "Certificate generation to S3, instructor email system, quiz engine, and progress tracking.",
    tech: ["MERN","AWS S3","JWT","CI/CD"],
    href: "#"
  },
  {
    title: "Caesar Cipher Playground",
    blurb: "Tiny crypto demo with instant encrypt/decrypt and keyboard shortcuts.",
    tech: ["React"],
    href: "#"
  },
];

export default function Projects({ id, chapter, pageNumber }) {
  return (
    <PageSection id={id} chapter={chapter} pageNumber={pageNumber}>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="group block rounded-xl ring-1 ring-black/5 bg-white/70 p-5 hover:shadow-lg transition">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold text-lg group-hover:underline">{p.title}</h3>
                <span className="text-xs rounded-full border border-neutral-300 px-2 py-0.5">View</span>
              </div>
              <p className="mt-2 text-sm text-neutral-700">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs rounded bg-neutral-100 px-2 py-0.5 ring-1 ring-neutral-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
