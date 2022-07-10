import { Typography } from "@mui/material";
import Image from "next/image";
import homeImage from "../public/images/pizza-3000285_1920 1.png";

const HomeComponents = () => {
  return (
    <div className="bg-hero grid grid-rows-2 max-h-[85vh] pt-10 relative grid-flow-row">
      <div className="flex items-center text-white flex-col justify-center text-center">
        <Typography variant="h2" className="text-[28px] md:text-[38px]" component="h1">
        LA CARAVANA
        <span className="h-1 flex w-full mb-3 rounded-md bg-yellow-600"></span>
        </Typography>
        <p className="text-center mx-[20%] text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde
          nobis consectetur natus, voluptas, adipisci rerum fugit qui ut quae
          eligendi quaerat quas, deserunt facere at eos aliquam ipsam animi.
        </p>
      </div>
        <Image src={homeImage} className="object-fill bg-gradient-to-b from-[#88000000] to-black" alt="pizza" />
    </div>
  );
};

export default HomeComponents;
