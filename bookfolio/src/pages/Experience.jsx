import PageSection from "../components/PageSection.jsx";

const experience = [
  {
    role: "Software Engineer Intern",
    org: "Ocktiv (EdTech)",
    time: "May–Aug 2025",
    bullets: [
      "Built and shipped production features across MERN stack with secure JWT flows.",
      "Automated certificate generation and S3 uploads; improved reliability and UX.",
      "Designed API docs and Postman workflows to speed QA and onboarding.",
    ],
  },
];

export default function Experience({ id, chapter, pageNumber }) {
  return (
    <PageSection id={id} chapter={chapter} pageNumber={pageNumber}>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-5">
          {experience.map(e => (
            <article key={e.role+e.org} className="rounded-xl bg-white/70 ring-1 ring-black/5 p-5">
              <header className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="text-neutral-500">•</span>
                <div className="text-neutral-700">{e.org}</div>
                <span className="ml-auto text-sm text-neutral-500">{e.time}</span>
              </header>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 space-y-2">
                {e.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
