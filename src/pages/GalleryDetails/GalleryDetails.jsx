import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGallery } from "../../context/GalleryContext";
import ProgressBar from "@ramonak/react-progress-bar";

const GalleryDetails = () => {
  const { id } = useParams();
  const { data } = useGallery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const index = data.findIndex(item => item.id.toString() === id);
    setCurrentIndex(index !== -1 ? index : 0);
    setSelectedItem(data[index]);
  }, [id, data]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    setSelectedItem(data[(currentIndex + 1) % data.length]);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setSelectedItem(
      data[currentIndex === 0 ? data.length - 1 : currentIndex - 1]
    );
  };

  return (
    <div className="p-10 flex flex-col justify-between font-custom max-lg:h-[1300px] ">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index === currentIndex ? "" : "hidden"
          } flex max-md:flex-col lg:flex-row items-center max-lg:gap-4  gap-24 mb-8  max-lg:mb-32`}
        >
          <div className="relative w-full  max-lg:w-fit">
            <img
              className="h-[500px] w-[100%]  max-lg:w-[450px] object-cover"
              src={item?.images?.hero?.large}
              alt={item.name}
            />
            <div className="absolute top-0 right-0 bg-white text-black text-center p-4">
              <h1 className="text-2xl  max-lg:text-6xl font-bold">
                {item?.name}
              </h1>
              <p className="text-sm  max-lg:text-[#7d7f9c]">
                {item?.artist?.name}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-black text-center px-4 pb-4">
              <img
                className="w-16 h-16  max-lg:w-[100px]  max-lg:h-[100px] object-cover rounded-full"
                src={item?.artist?.image}
                alt=""
              />
            </div>
          </div>
          <div className="w-full   max-lg:w-[450px] h-[500px] relative z-10 pl-10 mt-[-100px]">
            <span className="text-[12rem]  max-lg:text-[11em] text-[#f3f3f3]">
              {item?.year}
            </span>
            <div className=" pl-14  pr-44 text-sm  absolute top-44  max-lg:top-52 leading-6 text-[#a17d7d] font-bold">
              <p>{item?.description}</p>
            </div>
            <a
              href={item?.source}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-0 left-24 text-xs  max-lg:text-sm uppercase underline text-[#7d7fa0] hover:text-black"
            >
              Go To source
            </a>
          </div>
        </div>
      ))}

      <div className="flex  flex-col  mt-4  ">
        <ProgressBar
          completed={currentIndex}
          maxCompleted={data.length - 1}
          bgColor="#000000"
          height=".2rem"
          isLabelVisible={false}
        />
        <section className="flex justify-between mt-5">
          <div>
            <h1 className="text-lg  max-lg:text-2xl font-bold">
              {selectedItem?.name}
            </h1>
            <p className="text-xs  max-lg:text-sm text-[#7d7f9c]">
              {selectedItem?.artist?.name}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={handlePrev}>
              <img src="/assets/shared/icon-back-button.svg" alt="Previous" />
            </button>
            <button onClick={handleNext}>
              <img src="/assets/shared/icon-next-button.svg" alt="Next" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryDetails;
