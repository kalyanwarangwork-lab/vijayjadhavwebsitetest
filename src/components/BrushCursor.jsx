import { useEffect, useRef, useState } from "react";

// A small brush-dab cursor that replaces the pointer only while hovering
// over the element referenced by `containerRef`.
export default function BrushCursor({ containerRef }) {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    document.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-[34px] h-[34px] rounded-[50%_50%_50%_4px] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] transition-opacity duration-200 mix-blend-multiply shadow-[0_0_0_2px_rgba(255,255,255,0.15)] ${
        active ? "opacity-85" : "opacity-0"
      }`}
      style={{
        background:
          "radial-gradient(circle at 35% 30%, var(--color-sienna), #7d3820 75%)",
      }}
    />
  );
}
