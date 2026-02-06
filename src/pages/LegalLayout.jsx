import { Link } from "react-router-dom";

export default function LegalLayout({ title, children }) {
    return (
        <div className="min-h-screen bg-white">
            <header className="border-b">
                <div className=" relative max-w-4xl mx-auto px-6 py-24">
                    <Link to="/" className="absolute left-6 top-24 text-sm underline text-slate-600 hover:text-slate-900">
                        Back to Home
                    </Link>
                    <h1 className="text-center text-3xl md:text-4xl font-bold mt-3">{title}</h1>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
                {children}
            </main>
        </div>
    );
}