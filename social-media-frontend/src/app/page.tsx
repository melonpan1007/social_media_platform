import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Welcome to Social Media
      </h1>
      <p className="mb-6 text-center text-lg">Connect and share your thoughts!</p>
      
      <div className="flex gap-4">
        <Link href="/auth/login">
          <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105">
            Login
          </button>
        </Link>

        <Link href="/auth/register">
          <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
