import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-1 items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[11px] font-bold tracking-[0.15em] text-[#CCFF00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-7xl font-black uppercase tracking-tight text-white">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold uppercase text-white">
          WORKOUT NOT FOUND
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8B8E96]">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-md bg-[#CCFF00] px-5 py-3 text-[11px] font-bold text-black transition hover:bg-[#d8ff33]"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
}