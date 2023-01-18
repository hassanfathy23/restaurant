import Image from "next/legacy/image";
import { Icon } from '@iconify/react';

type AppProps = {
    name: string;
    description: string;
    image: string;
    price: number;
    imageHeight: number
}

export default function FoodItem({name, description, image, price, imageHeight}: AppProps) {
    return (
        <div className="h-full px-8 pb-8 pt-20 mr-10 flex flex-col items-center gap-4 rounded-3xl shadow-md shadow-black/30 text-center group cursor-pointer">
            <div className="w-full absolute -top-[150px]">
            <div className="relative w-full h-[250px] transition-all duration-300 group-hover:scale-150 group-hover:-translate-y-16">
            <Image src={`/images/${image}`} alt={name} layout='fill' objectFit="contain"/> 
            </div>
            </div>
            <h2 className=" font-bold text-[36px] leading-none">{name}</h2>
            <p className="px-8 text-[18px] flex-1 text-black/50">{description}</p>
            <div className="w-full flex flex-row justify-between items-center">
                <p className="text-[36px] font-bold">${price}</p>
                <div className="p-[4px] rounded-full bg-black transition-all duration-300 hover:scale-110">
                <Icon icon="ic:baseline-plus" width="50" height="50" color="white" />
                </div>
            </div>
        </div>
    )
}