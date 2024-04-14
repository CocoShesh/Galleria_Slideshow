import React, { useEffect } from "react";
import Grid from "../ui/Grid";
import { useGallery } from "../../context/GalleryContext";
import UseAosAnimation from "../../hooks/UseAosAnimation";
const Gallery = () => {
  const { data } = useGallery();

  UseAosAnimation();

  return (
    <div className="2xl:flex 2xl:justify-center flex  justify-center items-center ">
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-sm:content-center  px-10  max-sm:px-5  py-10 2xl:w-[1440px]"
      >
        <div className="grid gap-8">
          {data.slice(0, 4).map(item => (
            <Grid item={item} key={item.id} />
          ))}
        </div>
        <div className="grid gap-8  ">
          {data.slice(4, 8).map(item => (
            <Grid item={item} key={item.id} />
          ))}
        </div>
        <div className="grid gap-8  ">
          {data.slice(8, 11).map(item => (
            <Grid item={item} key={item.id} />
          ))}
        </div>
        <div className="grid gap-8   ">
          {data.slice(11, 15).map(item => (
            <Grid item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
