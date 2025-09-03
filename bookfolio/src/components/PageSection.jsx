import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PageSection({ id, children, chapter, pageNumber }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateY = useTransform(scrollYProgress, [0,1], [3,-3]);

  return (
    <section id={id} className="story-page min-h-screen flex items-center justify-center p-6 md:p-10">
      <motion.div ref={ref} style={{ rotateY }} className="relative w-full max-w-5xl [transform-style:preserve-3d] [perspective:1200px]">
        <div className="relative rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 p-6 md:p-10">
          {chapter && (
            <div className="mb-4 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
              {chapter}
            </div>
          )}
          {children}
          {pageNumber && (
            <div className="mt-8 text-right text-xs text-neutral-500">{pageNumber}</div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
