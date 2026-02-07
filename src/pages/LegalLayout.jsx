import { Link } from "react-router-dom";

export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Link
            to="/"
            className="inline-block mb-6 text-sm underline text-slate-600 hover:text-slate-900"
          >
            Back to Home
          </Link>
          <h1 className="text-center text-3xl md:text-4xl font-bold mt-3">
            {title}
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 prose prose-slate prose-p:leading-8">
        {children}
      </main>
    </div>
  );
}
