import React from "react";
import { Link } from "react-router-dom";
import { useGallery } from "../../context/GalleryContext";
const Gallery = () => {
  const { data } = useGallery();

  return (
    <div className="2xl:flex 2xl:justify-center flex  justify-center items-center ">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-sm:content-center  px-10  max-sm:px-5  py-10 2xl:w-[1440px]">
        <div className="grid gap-8">
          {data.slice(0, 4).map(item => (
            <Link to={`/gallery/${item.id}`} key={item.id}>
              <div className="relative ">
                <img
                  className="h-full w-full  rounded-lg cursor-pointer"
                  src={item?.images?.thumbnail}
                />
                <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white  py-4 px-3 ">
                  <h2 className="text-xl font-bold">{item?.name}</h2>
                  <p className="text-sm">{item?.artist?.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid gap-8  ">
          {data.slice(4, 8).map(item => (
            <Link to={`/gallery/${item.id}`} key={item.id}>
              <div className="relative">
                <img
                  className="h-full w-full   rounded-lg cursor-pointer"
                  src={item?.images?.thumbnail}
                />
                <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white   py-4 px-3">
                  <h2 className="text-xl font-bold">{item?.name}</h2>
                  <p className="text-sm">{item?.artist?.name}</p>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>
        <div className="grid gap-8  ">
          {data.slice(8, 11).map(item => (
            <Link to={`/gallery/${item.id}`} key={item.id}>
              <div className="relative">
                <img
                  className="h-full w-full   rounded-lg  cursor-pointer"
                  src={item?.images?.thumbnail}
                />
                <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white   py-4 px-3">
                  <h2 className="text-xl font-bold">{item?.name}</h2>
                  <p className="text-sm">{item?.artist?.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid gap-8   ">
          {data.slice(11, 15).map(item => (
            <Link to={`/gallery/${item.id}`} key={item.id}>
              <div className="relative">
                <img
                  className="h-full w-full   rounded-lg  cursor-pointer"
                  src={item?.images?.gallery}
                />
                <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white  py-4 px-3">
                  <h2 className="text-xl font-bold">{item?.name}</h2>
                  <p className="text-sm">{item?.artist?.name}</p>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
