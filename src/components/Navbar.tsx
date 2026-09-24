"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const { plan, saved } = useWorkout();
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isMyPlanPage = pathname === "/my-plan";

  return (
    <header className="px-4 pt-12">
      <nav className="mx-auto flex h-[81px] max-w-[1280px] items-center justify-between border border-[#1C1F26] bg-[#0C0D10]/95 px-6 backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={32}
            height={32}
            className="object-contain"
          />

          <span className="text-[16px] font-bold text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`rounded-full px-5 py-2.5 text-[12px] font-semibold transition ${
              isHomePage
                ? "bg-[#172507] text-[#CCFF00]"
                : "text-[#8B8E96] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2.5 text-[12px] font-semibold transition ${
              isMyPlanPage
                ? "bg-[#172507] text-[#CCFF00]"
                : "text-[#8B8E96] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[12px] text-[#B8BAC1]"
          >
            <span>Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[12px] text-[#8B8E96]"
          >
            <span>Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#343740] text-[10px] text-[#B8BAC1]">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}