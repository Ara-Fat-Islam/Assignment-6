import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto mt-12 h-[448px] max-w-[1232px] overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
      <div className="flex h-full items-center justify-between px-14">
        <div className="w-[558px]">
          <p className="mb-5 text-[10px] font-bold tracking-[0.08em] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-[44px] font-black uppercase leading-[0.98] tracking-[-0.02em] text-white">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-5 max-w-[470px] text-[13px] leading-5 text-[#8F949F]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

         <a
  href="#library"
  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#CCFF00] px-5 py-3 text-[10px] font-bold text-black transition hover:bg-[#d8ff33]"
>
  BROWSE WORKOUTS
  <span aria-hidden="true">↓</span>
</a>
        </div>

        <div className="flex h-[334px] w-[334px] shrink-0 items-center justify-center">
          <Image
            src="/banner.png"
            alt="FitLog workout"
            width={334}
            height={334}
            className="h-[334px] w-[334px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}