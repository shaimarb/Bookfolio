export default function BookmarkNav({ items }) {
    return (
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2" aria-label="Chapters">
        {items.map(it => (
          <a key={it.id} href={`#${it.id}`} className="group" title={it.label}>
            <div className="w-3 h-10 rounded bg-neutral-300 group-hover:bg-neutral-500 transition" />
          </a>
        ))}
      </nav>
    );
  }
  