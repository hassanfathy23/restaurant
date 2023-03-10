import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FoodItem from "./FoodItem";
import ButtonGroup from "./ButtonGroup";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function FoodList() {
  return (
    <Carousel
      // swipeable={false}
      // draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      // infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlay={true}
      // autoPlaySpeed={2000}
      // keyBoardControl={true}
      // customTransition="all 2"
      // transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType="desktop"
      // dotListClass="custom-dot-list-style"
      customButtonGroup={
      <ButtonGroup /* // @ts-ignore */ goToSlide next previous />
    }
      itemClass="carousel-item-padding-40-px"
      className="w-full lg:w-10/12 h-5/6 p-6 mt-32 lg:mt-12 flex items-center relative"
    >
      <FoodItem
        name="donut"
        description={`milk, egg, butter,
             baking powder, sugar, flour,
               chocolate sauceF`}
        image="kobby-mendez-q54Oxq44MZs-unsplash 1.png"
        imageHeight={250}
        price={35}
      />
      <FoodItem
        name="Burger"
        description={`tomato, mozzarella, meat,
        lettuse, cheese, onion,
        pickled cucumber, paprika`}
        image="cheese-burger-removebg-preview 1.png"
        imageHeight={250}
        price={35}
      />
      <FoodItem
        name="mushroom pizza"
        description={`mushroom, tomato, mozzarella,
        chili pepper, olive, ham, 
        tomato paste, onion, paprika`}
        image="pizza 1 (1).png"
        imageHeight={250}
        price={40}
      />
      <FoodItem
        name="donut 2"
        description={`milk, egg, butter,
             baking powder, sugar, flour,
               chocolate sauceF`}
        image="kobby-mendez-q54Oxq44MZs-unsplash 1.png"
        imageHeight={250}
        price={35}
      />
      <FoodItem
        name="Burger 2"
        description={`tomato, mozzarella, meat,
        lettuse, cheese, onion,
        pickled cucumber, paprika`}
        image="cheese-burger-removebg-preview 1.png"
        imageHeight={250}
        price={35}
      />
    </Carousel>
  );
}
