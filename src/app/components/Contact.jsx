import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-linear-to-b from-amber-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start planning your legacy? We're here to help.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid-grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm mb-2 text-gray-700">First Name</label>
                                            <Input placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-sm mb-2 text-gray-700">Last Name</label>
                                            <Input placeholder="Smith" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2 text-gray-700">Email</label>
                                        <Input type="email" placeholder="john.smith@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2 text-gray-700">Phone</label>
                                        <Input type="tel" placeholder="(555) 555-5555" />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2 text-gray-700">I'm interested in:</label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600">
                                            <option value="">Life Insurance</option>
                                            <option value="">Financial Planning</option>
                                            <option value="">Retirement Planning</option>
                                            <option value="">All Services</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2 text-gray-700">Message</label>
                                        <Textarea placeholder="Tell us about your needs..." rows={4} />
                                    </div>
                                    <Button className="w-full text-white bg-slate-900 hover:bg-slate-800">
                                        Submit Inquiry
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">(972) 522-8687</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM - 5PM CST</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">roshanskariah@legacylifeagency.net</p>
                                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                                        <p className="text-gray-600">123 Legacy Drive, Suite 100</p>
                                        <p className="text-gray-600">Irving, TX 75060</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> */}

                        <div className="bg-slate-900 text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
                            <p className="mb-6">
                                Book a free, no obligation consulation with one of our expert advisors to discuss your financial goals.
                            </p>
                            <Button variant="outline" className="border-amber-600 text-amber-600 bg-white hover:bg-amber-600 hover:text-white w-full">
                                Book Appointment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}