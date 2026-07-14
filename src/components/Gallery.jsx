import { useRef } from "react";
import { paintings } from "../data/paintings";
import PieceCard from "./PieceCard";
import BrushCursor from "./BrushCursor";

export default function Gallery({ onOpenPiece }) {
  const galleryRef = useRef(null);

  return (
    <section
      id="work"
      ref={galleryRef}
      className="relative max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-32"
    >
      <BrushCursor containerRef={galleryRef} />

      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl md:text-4xl">Selected works</h2>
        <span className="text-[0.8rem] uppercase tracking-[0.1em] text-[#7a6f60]">
          2023 — 2026
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-7">
        {paintings.map((painting) => (
          <PieceCard key={painting.id} painting={painting} onOpen={onOpenPiece} />
        ))}
      </div>
    </section>
  );
}
