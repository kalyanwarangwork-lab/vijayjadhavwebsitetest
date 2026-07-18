export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center max-w-6xl w-full">
        <div>
          <span className="block text-[0.78rem] uppercase tracking-[0.18em] text-sienna mb-4">
            Oil on canvas — Berlin studio
          </span>
          <h1 className="text-[2.6rem] md:text-[4.6rem] leading-[1.02] mb-6 text-charcoal">
            Paintings that hold their weather.
          </h1>
          <p className="text-[1.05rem] leading-relaxed max-w-[38ch] text-[#413a34]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <a
            href="#work"
            className="inline-block mt-8 px-7 py-3.5 bg-charcoal text-linen text-[0.85rem] uppercase tracking-[0.08em] rounded-sm transition-all hover:bg-sienna hover:-translate-y-0.5"
          >
            View the collection
          </a>
        </div>

        <div className="relative aspect-[4/5] rounded-sm shadow-[0_30px_60px_-20px_rgba(30,20,10,0.35)] overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}paintings/hero.svg`}
            alt="Featured painting, abstract landscape in deep teal and sienna tones"
            className="w-full h-full object-cover block animate-brush-reveal"
          />
        </div>
      </div>
    </section>
  );
}
