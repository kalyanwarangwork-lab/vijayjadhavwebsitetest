const swatches = ["#b1512f", "#3f5b52", "#c69a3d", "#211d1a", "#f1f2ee"];

export default function About() {
  return (
    <section id="about" className="bg-ink text-linen px-6 md:px-12 py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 md:gap-20 items-center">
        <div className="aspect-[3/4] rounded-sm overflow-hidden">
          <img
            src="/paintings/portrait.JPG"
            alt="Portrait of the painter in her studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl mb-7 text-linen">In the studio</h2>
          <p className="leading-relaxed text-[#c9c1b3] max-w-[56ch] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="leading-relaxed text-[#c9c1b3] max-w-[56ch] mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
          <div className="flex gap-2.5 mt-8">
            {swatches.map((color) => (
              <div
                key={color}
                className="w-9 h-9 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.08)]"
                style={{ background: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
