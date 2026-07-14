import { useEffect } from "react";

export default function Lightbox({ painting, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const open = Boolean(painting);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-10 bg-[rgba(20,16,13,0.92)] transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-9 right-6 md:right-12 text-linen text-[0.85rem] uppercase tracking-[0.1em] border border-white/30 px-4.5 py-2.5 rounded-sm"
      >
        Close ✕
      </button>

      {painting && (() => {
        const isExtraWide = painting.span === "extra-wide";
        const isWide = painting.span === "wide";
        const gridCols = isExtraWide
          ? "grid-cols-1"
          : isWide
          ? "md:grid-cols-[1.7fr_0.5fr]"
          : "md:grid-cols-[1.3fr_0.7fr]";
        const maxW = isExtraWide ? "max-w-6xl" : "max-w-5xl";
        const imgAspect = isExtraWide
          ? "aspect-[21/9]"
          : isWide
          ? "aspect-[16/11]"
          : "aspect-[4/5]";
        const textLayout = isExtraWide
          ? "flex gap-10 items-start mt-1"
          : "";

        return (
          <div className={`grid grid-cols-1 ${gridCols} gap-10 md:gap-12 ${maxW} w-full items-center`}>
            <div className="bg-linen p-5 rounded-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={painting.img}
                alt={painting.title}
                className={`w-full block ${imgAspect} object-contain`}
              />
            </div>
            <div className={textLayout}>
              <h3 className="text-linen text-2xl md:text-3xl mb-2.5 font-display shrink-0">
                {painting.title}
              </h3>
              <div>
                <div className="text-gold text-[0.85rem] uppercase tracking-[0.06em] mb-5">
                  {painting.meta}
                </div>
                <p className="text-[#c9c1b3] leading-relaxed text-[0.95rem]">
                  {painting.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
