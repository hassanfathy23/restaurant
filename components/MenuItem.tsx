import Image from "next/image";

type AppProps = {
  name: string;
  image: string;
};

export default function MenuItem({ name, image }: AppProps) {
  return (
    <div className="py-[6px] px-[6px] relative flex flex-row items-center bg-[#A18EE5] rounded-3xl ">
      <div className="p-1 flex justify-center items-center rounded-full bg-white">
        <Image src={image} alt={name} width="40" height="40" />
      </div>
      <p className={`px-3 text-[18px] text-white font-medium`}>{name}</p>
    </div>
  );
}
