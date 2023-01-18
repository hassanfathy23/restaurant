import MenuItem from "./MenuItem";



export default function MenuList() {
    return (
        <div className="lg:pr-20 flex flex-row flex-wrap lg:flex-col gap-4 border-r-4 border-r-[#EC6083]">
            <MenuItem name="All Dishes" image="/images/refreshments.png" />
            <MenuItem name="Hamburgers" image="/images/Hamburger.png" />
            <MenuItem name="Pizzas" image="/images/Pizza.png" />
            <MenuItem name="Taco" image="/images/Taco.png" />
            <MenuItem name="Green Salads" image="/images/Green Salad.png" />
            <MenuItem name="Doughnuts" image="/images/Doughnut.png" />
            <MenuItem name="Sodas" image="/images/Soda.png" />
        </div>
    )
}