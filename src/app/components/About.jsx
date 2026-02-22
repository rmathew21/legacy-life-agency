import { Target, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're commited to helping families build financial security and lasting legacies."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your goals, dreams, and peace of mind are at the heart of everything we do."
  },
  {
    icon: Award, 
    title: "Expert Guidance",
    description: "Our seasoned team delivers strategic insights and professional advise you can depend on."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "We build relationships, not just portfolios. Your sucess is our success."
  }
];

export function About() {
  return (
    // <section id="about" className="py-20 bg-white">
     //  <section id="about" className="py-20 bg-slate-900">   
    <section id="about" className="py-15 bg-linear-to-br from-slate-900 via-slate-800 to-[#1c1405] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(201,162,77,0.15),transparent_40%)]"></div>
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center sm:text-left">
              Why Choose Legacy Life Agency?
            </h2>
            <p className="text-lg text-slate-300 mb-6">
                At Legacy Life Agency, we understand that planning for the future isn't just about numbers-it's about the people you love and the dreams you hold dear.
            </p>
            <p className="text-lg text-slate-300 mb-6">
                Our team of dedicated professionals bring years of combined service to help you navigate life's financial decisions with confidence and clarity.
            </p>
            <p className="text-lg text-slate-300">
                Whether you're protecting your family, planning for retirement, or building wealth for future generations, we're here to guide you every step of the way.
            </p>
          </div>

          {/* option 1 */}
          {/* <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
                <div key={value.title} className="p-6 bg-slate-800/80 backdrop-blur rounded-x1 border border-slate-700 hover:border-[#C9A24D] transition-all duration-300">
                    <value.icon className="h-10 w-10 text-amber-700 mb-4" />
                    <h3 className="font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-300">{value.description}</p>
                </div>
            ))}
          </div> */}

          {/* option 2 */}
          {/* <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
                <div key={value.title} className="p-6 bg-slate-800 rounded-xl  hover:bg-slate-700 transition">
                    <value.icon className="h-10 w-10 text-amber-700 mb-4" />
                    <h3 className="font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-300">{value.description}</p>
                </div>
            ))}
          </div> */}

          {/* option 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
                <div key={value.title} className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl  hover:bg-white/10 transition">
                    <value.icon className="h-10 w-10 text-amber-700 mb-4" />
                    <h3 className="font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-300">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}