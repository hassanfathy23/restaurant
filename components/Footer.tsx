import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mt-52 px-0 lg:px-8 pb-8 flex flex-wrap flex-row items-center justify-center lg:justify-between gap-6 overflow-hidden">
      <div className="lg:w-[20%] flex flex-row flex-wrap lg:flex-col items-center lg:items-start gap-8 cursor">
        <Image
          src="/images/Burger-King.svg"
          width="96"
          height="96"
          alt="logo"
        />
        <p className="text-[18px] text-start text-black/50 leading-relaxed">
          We cook and deliver the tastiest food right away to your<br></br>{" "}
          designated location
        </p>
        <div className="flex flex-row gap-2 items-center justify-start">
          <Link href="https://twitter.com/Hassan74156208"><Icon icon="mdi:twitter" width="50" height="50" className="cursor-pointer transition-all duration-300 hover:scale-110" /></Link>
          <Link href="https://twitter.com/Hassan74156208"><Icon icon="ic:baseline-facebook" width="50" height="50" className="cursor-pointer transition-all duration-300 hover:scale-110" /></Link>
          <Link href="https://twitter.com/Hassan74156208"><Icon icon="ri:instagram-fill" width="50" height="50" className="cursor-pointer transition-all duration-300 hover:scale-110" /></Link>
        </div>
      </div>
      <div className="lg:w-[75%] flex flex-wrap flex-row justify-between self-start lg:self-end gap-4 lg:gap-4">
        <div className="flex flex-col gap-3 lg:gap-10">
          <h3 className="text-[24px] font-medium">About</h3>
          <div className="flex flex-col gap-2 lg:gap-8 leading-none">
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">About Us</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Features</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">News</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Menu</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-10">
          <h3 className="text-[24px] font-medium">Company</h3>
          <div className="flex flex-col gap-2 lg:gap-8 leading-none">
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Why Burger King?</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Partner With Us</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">FAQ</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-10">
          <h3 className="text-[24px] font-medium">Support</h3>
          <div className="flex flex-col gap-2 lg:gap-8 leading-none">
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Account</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Support Center</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Feedback</p>
            <p className="text-[18px] text-black/50 border-b-2 border-b-transparent cursor-pointer transition-all duration-300 hover:border-b-black">Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-10">
          <h3 className="text-[24px] font-medium">Get In Touch</h3>
          <div className="flex flex-col gap-2 lg:gap-8 leading-none">
            <p className="text-[18px] text-black/50">
              Question Or Feedback?<br></br> we&apos;d Like To Hear From You
            </p>
            <div className="flex flex-row relative items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="py-3 px-4 bg-transparent border-[1px] border-black/50 rounded-3xl fill-[#E9F3FD] stroke-black/50 text-[18px] text-black/50"
              />
              <Icon
                icon="ph:telegram-logo"
                color="#ec6083"
                width="24"
                height="24"
                className="absolute right-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
