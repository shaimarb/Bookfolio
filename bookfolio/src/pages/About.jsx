import PageSection from "../components/PageSection.jsx";

export default function About({ id, chapter, pageNumber }) {
  return (
    <PageSection id={id} chapter={chapter} pageNumber={pageNumber}>
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
          <p className="leading-relaxed text-neutral-700 mb-4">
            Software Engineering Technology student with hands-on experience building production-ready MERN features, dashboards, and secure APIs. I ship clean, reliable code and love turning ideas into polished UX.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
            <li>Maintainable architecture, clean APIs, and strong UX.</li>
            <li>React, Node/Express, MongoDB, AWS (S3), CI/CD.</li>
            <li>Tests, docs, and fast feedback loops.</li>
          </ul>
        </div>
        <aside className="md:col-span-2 bg-white/80 rounded-xl p-4 ring-1 ring-black/5">
          <h3 className="font-semibold mb-2">Highlights</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>🏆 Hackathon finalist (team project leadership)</li>
            <li>🚀 Deployed features used by real learners</li>
            <li>🧪 Built Postman collections + API docs</li>
          </ul>
        </aside>
      </div>
    </PageSection>
  );
}
