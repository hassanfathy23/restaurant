import { Icon } from "@iconify/react";
import MenuList from "./MenuList";
import FoodList from "./FoodList";

export default function OurMenu() {
  return (
    <div className="mt-24 flex flex-col gap-20">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-medium text-[#EC6083]">Our Menu</p>
          <h2 className="font-bold text-[48px] leading-none">
            Menu That Always
            <br />
            Make You Fall In Love
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-between items-end">
        <MenuList />
        <FoodList />
      </div>
    </div>
  );
}
