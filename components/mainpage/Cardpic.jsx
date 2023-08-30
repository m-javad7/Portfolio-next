import Image from "next/image";
import javad from "@/public/assests/Images/a.jpg";
import { Shape } from "./Shape";
export const Cardpic = () => {
  return (
    <div>
      <Shape />
      <Image
        src={javad}
        alt="m.javad"
        width={450}
        height={450}
        className="rounded-[3.5rem] lg:rounded-xl md:grayscale hover:filter-none hover:transition-all hover:duration-300 hover:ease-in-out mb-24 md:mb-0 md:p-12 lg:mr-7 lg:p-0 xl:mr-10"
      />
    </div>
  );
};
