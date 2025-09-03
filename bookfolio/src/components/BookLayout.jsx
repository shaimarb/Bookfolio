import { useEffect } from "react";
import BookmarkNav from "./BookmarkNav.jsx";

export default function BookLayout({ chapters, children }) {
  useEffect(() => {
    const handle = (e) => {
      const keys = ["PageDown","PageUp","ArrowDown","ArrowUp","Space"];
      if (!keys.includes(e.key)) return;

      const ids = chapters.map(c=>c.id);
      const current = ids.findIndex((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= window.innerHeight*0.51 && r.bottom >= window.innerHeight*0.49;
      });

      let next = current;
      if (e.key==="PageDown"||e.key==="ArrowDown"||(e.key==="Space"&&!e.shiftKey)) next = Math.min(ids.length-1, current+1);
      if (e.key==="PageUp"||e.key==="ArrowUp"||(e.key==="Space"&&e.shiftKey)) next = Math.max(0, current-1);

      if (next !== current && next >= 0) {
        e.preventDefault();
        document.getElementById(ids[next])?.scrollIntoView({ behavior:"smooth" });
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [chapters]);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#cover" className="font-semibold tracking-tight hover:opacity-80">
            Shaima Rahman
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            {chapters.slice(1).map(c => (
              <a key={c.id} href={`#${c.id}`} className="hover:text-neutral-900 transition">
                {c.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <BookmarkNav items={chapters} />

      <div id="snap-container" className="snap-y">
        {children}
      </div>
    </main>
  );
}
