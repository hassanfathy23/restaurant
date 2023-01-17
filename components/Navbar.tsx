import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <div className="py-3 flex flex-row justify-between items-center">
      <div>
        <Image
          src="/images/Burger-King.svg"
          width={75}
          height={75}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-6 text-lg font-medium">
        <Link href="/" className="p-1 cursor-pointer transition-all duration-300 border-2 border-transparent rounded-lg hover:border-black hover:bg-black hover:text-white">Home</Link>
        <Link href="/reservation" className="p-1 cursor-pointer transition-all duration-300 border-2 border-transparent rounded-lg hover:border-black hover:bg-black hover:text-white">Reservation</Link>
        <Link href="/menu" className="p-1 cursor-pointer transition-all duration-300 border-2 border-transparent rounded-lg hover:border-black hover:bg-black hover:text-white">Menu</Link>
        <Link href="/about" className="p-1 cursor-pointer transition-all duration-300 border-2 border-transparent rounded-lg hover:border-black hover:bg-black hover:text-white">About</Link>
        <Link href="/contact" className="p-1 cursor-pointer transition-all duration-300 border-2 border-transparent rounded-lg hover:border-black hover:bg-black hover:text-white">Contact</Link>
      </div>
      <div className="flex flex-row justify-start items-center gap-5">
        <div className="p-3 flex justify-center items-center rounded-lg bg-[#EC6083] cursor-pointer transition-all duration-300 hover:scale-110">
          <Icon icon="ic:sharp-search" width="20" height="20" />
        </div>
        <div className="p-3 flex justify-center items-center rounded-lg bg-[#A18EE5] cursor-pointer transition-all duration-300 hover:scale-110">
          <Icon
            icon="material-symbols:add-shopping-cart"
            width="20"
            height="20"
          />
        </div>
        <div className="p-3 flex justify-center items-center rounded-lg bg-[#212135] cursor-pointer transition-all duration-300 hover:scale-110">
          <Icon icon="mdi:account" color="white" width="20" height="20" />
        </div>
      </div>
    </div>
  );
}
