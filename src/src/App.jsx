import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Pricing from "./components/Pricing";
import Trust from "./components/Trust";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-duxo-black min-h-screen font-body">
      <Navbar />
      <Hero />
      <Capabilities />
      <Pricing />
      <Trust />
      <Footer />
    </div>
  );
}
