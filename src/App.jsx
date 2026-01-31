import { About } from "./app/components/About";
import { Services } from "./app/components/Services";
import { FAQ } from "./app/components/FAQ";
import {Contact } from "./app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <About />
      <Services />
      <FAQ />
      <Contact />
    </div>
  )
}
