import Image from "next/image";
import Link from "next/link";
import { DotWaveWordLoop } from "./components/DotWaveWordLoop";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0f0f0f] paper-texture">
      {/* Left Section - 35% width */}
      <div className="flex w-[35%] flex-col p-10">
        {/* Asterisk Logo - Top Left */}
        <div className="mb-auto">
          <span className="text-6xl text-white leading-none tracking-[-0.05em]">*</span>
        </div>

        {/* Content - Bottom Left */}
        <div className="mt-auto flex flex-col gap-12">
          {/* Dot → Wave → Word Animation */}
          <DotWaveWordLoop />
          <h1 className="text-[3.60rem] leading-[1.02] tracking-[-0.04em] text-white">
            <span>practice. intervie. </span>
            <span className="text-white/80">succeed.</span>
          </h1>
          <div className="flex flex-col max-w-[90%]">
            <p className="text-base leading-[1.8] text-white/60 font-light tracking-[0.015em]">
              peer-to-peer interview practice platform
            </p>
            <p className="text-base leading-[1.8] text-white/60 font-light tracking-[0.015em]">
              practice with others, get real feedback, access curated resources
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link href="/dashboard" className="btn-primary group relative overflow-hidden rounded-sm border-[1px] border-black bg-white px-8 py-3.5 text-sm font-medium text-black tracking-[0.02em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">get started</span>
            </Link>
            <button className="btn-secondary group relative overflow-hidden rounded-sm border-[1px] border-white/70 bg-[#0f0f0f]/80 px-8 py-3.5 text-sm font-medium text-white tracking-[0.02em] transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-[1.02]">
              <span className="relative z-10">learn more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - 65% width */}
      <div className="flex w-[65%] items-center justify-center p-8">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src="/IMG_1.jpg"
            alt="Interview practice platform"
            fill
            className="object-cover image-dimmed"
            priority
            sizes="65vw"
          />
          <div className="absolute inset-0 rounded-lg image-grain pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
