import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoGold from "@/assets/torchGold2.svg"

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navigation = [
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "FAQ", href: "/#faq" },
        { name: "Contact", href: "/#contact" }
    ];

   

    return (
        
         <header className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur border-b border-white/10"> 

        
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <div className="flex items-center gap-3">
                        <a href="/" className="flex items-center gap-3">
                            <img 
                                src={logoGold}
                                alt="Legacy Life Agency logo" 
                                className="h-full max-h-18 w-auto object-contain"
                            />
                            <span className="text-2xl tracking-wide font-bold text-gold ">
                                LEGACY LIFE AGENCY
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                className="text-slate-300 hover:text-gold transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button className="bg-[#A38332] hover:bg-gold text-white">
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
                            <X className="h-6 w-6 text-slate-300" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-300" />
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
                                className="text-slate-300 hover:text-amber-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                                </a>
                            ))}
                            <Button asChild className="bg-amber-600 hover:bg-amber-700 w-full">
                                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                                    Get Started
                                </a>
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}