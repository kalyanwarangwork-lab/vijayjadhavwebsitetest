export default function PieceCard({ painting, onOpen }) {
  const colSpan =
    painting.span === "extra-wide"
      ? "sm:col-span-4 lg:col-span-6"
      : painting.span === "wide"
      ? "sm:col-span-4 lg:col-span-4"
      : "sm:col-span-2 lg:col-span-2";
  const frameAspect =
    painting.span === "extra-wide"
      ? "aspect-[21/9]"
      : painting.span === "wide"
      ? "aspect-[16/11]"
      : "aspect-[4/5]";

  return (
    <button
      type="button"
      onClick={() => onOpen(painting)}
      className={`${colSpan} group relative text-left cursor-none overflow-hidden rounded-sm bg-linen-2 pt-3.5 px-3.5 pb-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-20px_rgba(30,20,10,0.3)]`}
    >
      <div className={`${frameAspect} overflow-hidden bg-black`}>
        <img
          src={painting.img}
          alt={`Painting: ${painting.title}`}
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="flex justify-between items-baseline py-3.5 px-0.5">
        <h3 className="text-base font-medium font-display">{painting.title}</h3>
        <span className="text-[0.75rem] text-[#8a7e6d]">
          {painting.meta.split("·").pop().trim()}
        </span>
      </div>
    </button>
  );
}
