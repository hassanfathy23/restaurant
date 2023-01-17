import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-10 flex flex-row gap-4">
      <div className="w-6/12 flex flex-col justify-center gap-8">
        <h2 className="text-[96px] text-roboto font-bold leading-tight">
          Be the fastest in delivering your{" "}
          <span className="text-[#EC6083]">food</span>
        </h2>
        <p className="w-8/12 text-[24px] text-black/60">
          We cook and deliver the tastiest food right away to your designated
          location
        </p>
        <Link
          href="/start"
          className="max-w-fit py-2 px-8 bg-[#EC6083] rounded-2xl text-lg font-medium transition-all duration-300 hover:bg-[#EC6083]/50"
        >
          Get Started
        </Link>
      </div>
      <div className="w-6/12 h-[600px] relative">
        <Image src="/images/burger.png" alt="burger" fill />
      </div>
    </div>
  );
}
