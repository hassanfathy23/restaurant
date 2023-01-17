import { Icon } from "@iconify/react";
import MenuList from "./MenuList";
import FoodList from "./FoodList";

export default function OurMenu() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-medium text-[#EC6083]">Our Menu</p>
          <h2 className="font-bold text-[48px] leading-none">
            Menu That Always
            <br />
            Make You Fall In Love
          </h2>
        </div>
        <div className="px-10 py-3 flex flex-row gap-4 self-end">
          <div className="p-[2px] flex justify-center items-center rounded-full bg-[#CFCFCF]">
            <Icon
              icon="material-symbols:chevron-right"
              width="35"
              height="35"
            />
          </div>
          <div className="p-[2px] flex justify-center items-center rounded-full bg-[#EC6083]">
            <Icon
              icon="material-symbols:chevron-right"
              width="35"
              height="35"
              className="rotate-180"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <MenuList />
        <FoodList />
      </div>
    </div>
  );
}
