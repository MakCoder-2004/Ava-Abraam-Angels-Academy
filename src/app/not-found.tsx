import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-orange-100/50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-orange-400">404</h1>
          <h2 className="text-3xl font-semibold text-black">Page Not Found</h2>
          <p className="text-lg text-black/80">
            Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="group bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Go To Home
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
