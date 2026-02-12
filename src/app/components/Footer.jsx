import { Facebook, X, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 md:gap-42 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Legacy Life Agency</h3>
            <p className="text-gray-400 text-sm">
              Building bridges between the life you're living and the legacy
              you'll leave behind.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Life Insurance
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Financial Planning
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Retirement Planning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/#about"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Our Team</a></li> */}
              <li>
                <Link
                  to="/#contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              {/* <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Careers</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                {" "}
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Disclaimers
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
                        <h4 className="font-bold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="https://x.com/" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <X className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div> */}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>
              &copy; 2026 Legacy Life Agency.{" "}All Rights reserved.
              </p>

              <a
                href="https://www.robinmathew.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Powered by Robo Web Solutions
              </a>
            
            {/* <div className="flex space-x-6 mt-4 md:mt-0"> */}
            {/* <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0 text-sm">
                           <Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
                           <Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
                           <Link to="/disclaimer" className="hover:text-amber-400 transition-colors">Disclaimers</Link>
                        </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
