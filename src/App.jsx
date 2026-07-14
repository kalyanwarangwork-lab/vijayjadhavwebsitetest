import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

function App() {
  const [activePiece, setActivePiece] = useState(null);

  return (
    <>
      <Nav />
      <Hero />
      <Gallery onOpenPiece={setActivePiece} />
      <About />
      <Footer />
      <Lightbox painting={activePiece} onClose={() => setActivePiece(null)} />
    </>
  );
}

export default App;
