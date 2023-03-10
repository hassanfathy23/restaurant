import { Icon } from "@iconify/react";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
  return (
      <div className="carousel-button-group absolute right-0 -top-[200px] px-10 py-3 hidden lg:flex flex-row gap-4 self-end">
        <div
          className={`${
            currentSlide === 0 ? "invisible" : ""
          } p-[2px] flex justify-center items-center rounded-full bg-[#CFCFCF] cursor-pointer transition-all duration-300 hover:scale-110`}
          onClick={() => previous()}
        >
          <Icon
            icon="material-symbols:chevron-right"
            width="35"
            height="35"
            className="rotate-180"
          />
        </div>
        <div
          onClick={() => next()}
          className={`${currentSlide === 2 ? 'invisible': ''} p-[2px] flex justify-center items-center rounded-full bg-[#EC6083] cursor-pointer transition-all duration-300 hover:scale-110`}
        >
          <Icon icon="material-symbols:chevron-right" width="35" height="35" />
        </div>
      </div>
    );
  };

  export default ButtonGroup;