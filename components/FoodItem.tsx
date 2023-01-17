import Image from "next/image";
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
        <div className="relative h-full p-8 mr-10 flex flex-col items-center gap-4 rounded-3xl shadow-md shadow-black/30 text-center overflow-hidden">
            <div className={`relative w-full h-[${imageHeight}px]`}>
            <Image src={`/images/${image}`} alt={name} fill /> 
            </div>
            <h2 className=" font-bold text-[36px] leading-none">{name}</h2>
            <p className="px-8 text-[18px] flex-1 text-black/50">{description}</p>
            <div className="w-full flex flex-row justify-between items-center">
                <p className="text-[36px] font-bold">${price}</p>
                <div className="p-[4px] rounded-full bg-black">
                <Icon icon="ic:baseline-plus" width="50" height="50" color="white" />
                </div>
            </div>
        </div>
    )
}