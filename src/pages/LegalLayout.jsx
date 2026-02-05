import { Link } from "react-router-dom";

export default function LegalLayout({ title, children }) {
    return (
        <div className="min-h-screen bg-white">
            <header className="border-b">
                <div className="max-w-3xl mx-auto px-4 py-6">
                    <Link to="/" className="text-sm underline">
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold mt-3">{title}</h1>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
                {children}
            </main>
        </div>
    );
}