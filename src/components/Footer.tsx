import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#222630] bg-[#0C0D10]">
      <div className="mx-auto flex min-h-[100px] max-w-[1280px] flex-col items-center justify-between gap-5 px-6 py-7 sm:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={30}
            height={30}
            className="object-contain"
          />

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-center text-[11px] text-[#777B84] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}