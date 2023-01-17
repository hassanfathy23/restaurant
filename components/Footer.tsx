import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="mt-72 px-8 pb-8 flex flex-row items-center justify-between">
      <div className="w-[20%] flex flex-col gap-8">
        <Image
          src="/images/Burger-King.svg"
          width="96"
          height="96"
          alt="logo"
        />
        <p className="text-[18px] text-black/50 leading-relaxed">
          We cook and deliver the tastiest food right away to your<br></br>{" "}
          designated location
        </p>
        <div className="flex flex-row gap-2 items-center justify-start">
          <Icon icon="mdi:twitter" width="50" height="50" />
          <Icon icon="ic:baseline-facebook" width="50" height="50" />
          <Icon icon="ri:instagram-fill" width="50" height="50" />
        </div>
      </div>
      <div className="flex flex-row self-end gap-32">
        <div className="flex flex-col gap-10">
          <h3 className="text-[24px] font-medium">About</h3>
          <div className="flex flex-col gap-8 leading-none">
            <p className="text-[18px] text-black/50">About Us</p>
            <p className="text-[18px] text-black/50">Features</p>
            <p className="text-[18px] text-black/50">News</p>
            <p className="text-[18px] text-black/50">Menu</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="text-[24px] font-medium">Company</h3>
          <div className="flex flex-col gap-8 leading-none">
            <p className="text-[18px] text-black/50">Why Burger King?</p>
            <p className="text-[18px] text-black/50">Partner With Us</p>
            <p className="text-[18px] text-black/50">FAQ</p>
            <p className="text-[18px] text-black/50">Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="text-[24px] font-medium">Support</h3>
          <div className="flex flex-col gap-8 leading-none">
            <p className="text-[18px] text-black/50">Account</p>
            <p className="text-[18px] text-black/50">Support Center</p>
            <p className="text-[18px] text-black/50">Feedback</p>
            <p className="text-[18px] text-black/50">Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="text-[24px] font-medium">Get In Touch</h3>
          <div className="flex flex-col gap-8 leading-none">
            <p className="text-[18px] text-black/50">
              Question Or Feedback?<br></br> we'd Like To Hear From You
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
