import { Hero } from "../app/components/Hero";
import { About } from "../app/components/About";
import { Services } from "../app/components/Services";
import { FAQ } from "../app/components/FAQ";
import { Contact } from "../app/components/Contact";


export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
