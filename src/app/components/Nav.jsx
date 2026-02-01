import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logoBlue@2x.png"
import logo2 from "@/assets/logoBlueLLA.jpeg"
import logo3 from "@/assets/logo-blue.svg"

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-slate-900">Legacy Life Agency</h1>
                    </div> */}
                    <div className="flex items-center gap-3">
                        <a href="" className="flex items-center gap-3">
                            <img 
                                src={logo}
                                alt="Legacy Life Agency logo" 
                                className="h-8 w-auto"
                            />
                            <span className="text-2xl font-bold tracking-wide text-slate-900">
                                Legacy Life Agency
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-amber-700 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button className="bg-amber-600 hover:bg-amber-700">
                                Get Started
                            </Button>
                        </a>
                        
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <a 
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-amber-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                                </a>
                            ))}
                            <Button className="bg-amber-600 hover:bg-amber-700 w-full">
                                Get Started
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}