import { Facebook, X, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Legacy Life Agency</h3>
                        <p className="text-gray-400 text-sm">
                            Building bridges between the life you're living and the legacy you'll leave behind.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Life Insurance</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Financial Planning</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Retirement Planning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Our Team</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <X className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p className=" hover:text-amber-400 transition-colors">&copy; 2026 Legacy Life Agency. <a target="_blank" href="https://www.robinmathew.dev/">Powered by Robo Web Solutions</a></p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-amber-400 transition-colors">Disclaimers</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}