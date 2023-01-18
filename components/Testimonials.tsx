import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="mt-48 flex flex-row gap-20 justify-evenly items-center">
      <div className="relative w-[610px] h-[406px]">
        <Image src="/images/clip-waiting.png" alt="image" fill />
      </div>
      <div className="w-[510px] flex flex-col gap-6">
        <p className="text-[#EC6083] font-medium text-[18px]">what they say</p>
        <h2 className=" font-bold text-[48px] leading-none">
          what our customer say about us
        </h2>
        <p className="text-black/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          varius eget pulvinar rhoncus eros, magna. Orci sed aenean scelerisque
          arcu. Venenatis odio etiam bibendum in nulla.
        </p>
        <div className="flex flex-row items-center gap-2">
          <Image src="/images/image1.png" width="80" height="80" alt="image" />
          <div className="flex flex-col">
            <h3 className="font-medium text-[24px]">Alex Santos</h3>
            <p className="text-[18px] text-black/60">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
