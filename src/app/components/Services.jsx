import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Shield, TrendingUp, Umbrella } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const services = [
    {
        icon: Shield,
        title: "Life Insurance",
        description: "Protect your loved ones with coomprehensive life insurance coverage tailored to your family's unique needs.",
        image: "https://images.unsplash.com/photo-1767600466928-652797e00824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwcm90ZWN0aW9uJTIwaW5zdXJhbmNlfGVufDF8fHx8MTc2OTQzNjc1NHww&ixlib=rb-4.1.0&q=80&w=1080",
        features: [
            "Term Lie Insurance",
            "Whole Life Insurance",
            "Universal Lie Insurance",
            "Custom Coverage Options"
        ]
    },
    {
        icon: TrendingUp,
        title: "Asset Management",
        description: "Strategic financial guidance to help you achieve your goals and build lasting wealth for future generations.",
        image: "https://images.unsplash.com/photo-1768839721776-038d3070721e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGFkdmlzb3J8ZW58MXx8fHwxNzY5MzU2MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        features: [
            "Investment Strategies",
            "Estate Planning",
            "Tax Optimization",
            "Wealth Management"
        ]
    },
    {
        icon: Umbrella,
        title: "Retirement Planning",
        description: "Ensure a comfortable and secure retirement with perzonalized planning that supports your vision for the future.",
        image: "https://images.unsplash.com/photo-1758691031525-13a4a5a3a23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHJldGlyZW1lbnQlMjBjb3VwbGV8ZW58MXx8fHwxNzY5NDUzMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        features: [
            "401(k) & IRA Planning",
            "Income Strategy",
            "Healthcare Planning",
            "Legacy Preservation"
        ]
    }
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-be from-white to-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive solutions designed to protect your present and secure your future
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <ImageWithFallback
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-amber-600 rounded-full p-3 shadow-lg">
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <span className="text-amber-600 mr-2">✓</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}