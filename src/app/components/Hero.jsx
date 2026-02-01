import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-950">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk0NDQwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                    Legacy Life Agency
                </h1>
                <p className="text-xl sm:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
                    Building a bridge between the life you're living and the legacy you'll leave behind
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#contact">
                        <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-6 text-lg">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </a>
                    <a href="#about">
                        <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 bg-transparent hover:bg-amber-600 hover:text-white px-8 py-6 text-lg">
                            Learn More
                        </Button>
                    </a>
                    
                </div>
            </div>
        </section>
    );
}