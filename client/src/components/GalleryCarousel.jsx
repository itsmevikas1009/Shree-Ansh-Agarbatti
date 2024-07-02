import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

const GalleryCarousel = ({ gallery }) => {
  return (
    <div className="flex flex-col justify-center items-center md:mx-[16px] py-4 hover:cursor-pointer rounded-lg border my-4 mx-8">
      <img
        className="px-[16px] lg:w-[288px] md:w-[240px] w-[200px] lg:h-[200px] md:h-[200px] h-[200px]"
        src={gallery?.imgURL}
        alt="Shree200"
      />
    </div>
  );
};

export default GalleryCarousel;
