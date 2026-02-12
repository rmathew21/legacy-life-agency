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
    description: "Our experienced team provides professional advise you can trust."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "We build relationships, not just portfolios. Your sucess is our success."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center sm:text-left">
              Why Choose Legacy Life Agency?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                At Legacy Life Agency, we understand that planning for the future isn't just about numbers-it's about the people you love and the dreams you hold dear.
            </p>
            <p className="text-lg text-gray-600 mb-6">
                Our team of dedicated professionals brings decades of combined experience to help you navigate lie's financial decisions with confidence and clarity.
            </p>
            <p className="text-lg text-gray-600">
                Whether you're protecting your family, planning for retirement, or building wealth for future generations, we're here to guide you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
                <div key={value.title} className="p-6 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                    <value.icon className="h-10 w-10 text-amber-700 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}