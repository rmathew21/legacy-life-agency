import { About } from "./app/components/About";
import { Services } from "./app/components/Services";
import { FAQ } from "./app/components/FAQ";

export default function App() {
  return (
    <div className="min-h-screen">
      <About />
      <Services />
      <FAQ />
    </div>
  )
}
