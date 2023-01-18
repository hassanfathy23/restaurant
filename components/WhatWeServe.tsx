import Image from "next/image";

export default function WhatWeServe() {
  return (
    <div className="py-20 flex flex-col gap-20">
      <div>
        <p className="text-center text-[#EC6083]">WHAT WE SERVE</p>
        <h2 className="w-full sm:w-8/12 lg:w-4/12 mx-auto text-center text-[48px] font-bold leading-tight">
          your favourite food delivery partner
        </h2>
      </div>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/clip-delivery.png"
            width={330}
            height={330}
            alt="can't display image"
          />
          <h3 className="text-[36px] tracking-tighter text-center font-semibold">Easy to order</h3>
          <p className="w-10/12 mx-auto text-[18px] text-center text-black/50">
            You only need a few steps in ordering food
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src="/images/clip-937.png"
            width={330}
            height={330}
            alt="can't display image"
          />
          <h3 className="text-[36px] tracking-tighter text-center font-semibold">fastest delivery</h3>
          <p className="w-10/12 mx-auto text-[18px] text-center text-black/50">
            Delivery that is always ontime even faster
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src="/images/clip-delivery.png"
            width={330}
            height={330}
            alt="can't display image"
          />
          <h3 className="text-[36px] tracking-tighter text-center font-semibold">Best quality</h3>
          <p className="w-10/12 mx-auto text-[18px] text-center text-black/50">
            Not only fast for us quality is also number one
          </p>
        </div>
      </div>
    </div>
  );
}
