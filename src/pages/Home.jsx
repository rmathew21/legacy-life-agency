import { Nav } from "../app/components/Nav";
import { Hero } from "../app/components/Hero";
import { About } from "../app/components/About";
import { Services } from "../app/components/Services";
import { FAQ } from "../app/components/FAQ";
import { Contact } from "../app/components/Contact";
import { Footer } from "../app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
