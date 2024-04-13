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
    <>
      <section className="p-10 flex flex-col justify-between  font-custom">
        {data.map((item, index) => (
          <section
            key={item.id}
            className={`${
              index === currentIndex ? "" : "hidden"
            } flex  items-center max-lg:flex-col  gap-24 mb-32`}
          >
            <section className="relative w-fit">
              <img
                className="h-[500px] w-[450px]"
                src={item?.images?.hero?.large}
                alt={item.name}
              />
              <section className="absolute w-[380px] h-fit py-5 top-0 right-[-20rem] max-lg:bottom-0 bg-white text-black text-center">
                <h1 className="text-6xl font-bold">{item?.name}</h1> <br />
                <p className="text-sm text-[#7d7f9c]">{item?.artist?.name}</p>
              </section>

              <section className="absolute w-[300px] h-[200px] bottom-[-10rem] right-[-20rem] text-black text-center px-14">
                <img src={item?.artist?.image} alt="" />
              </section>
            </section>
            <section className="w-[450px] z-10 absolute right-10 0 pt-10 h-full">
              <span className="text-[11em] text-[#f3f3f3] z-0">
                {item?.year}
              </span>
              <section className="pl-14 pr-20 text-sm absolute top-52 leading-6 text-[#a17d7d] font-bold">
                <p> {item?.description}</p>
              </section>
              <a href={item?.source} target="_blank" rel="noreferrer">
                <span className="uppercase absolute bottom-[-10px] left-14 text-xs underline text-[#7d7fa0] hover:text-black">
                  Go To source
                </span>
              </a>
            </section>
          </section>
        ))}
        <ProgressBar
          completed={currentIndex}
          maxCompleted={data.length - 1}
          bgColor="#000000"
          height=".2rem"
          isLabelVisible={false}
        />
        <section className="flex justify-between mt-10">
          <section>
            <h1 className="text-2xl font-bold">{selectedItem?.name}</h1> <br />
            <p className="text-sm text-[#7d7f9c]">
              {selectedItem?.artist?.name}
            </p>
          </section>
          <section className="flex gap-8 items-center pr-2">
            <button onClick={handlePrev}>
              <img src="/assets/shared/icon-back-button.svg" alt="Previous" />{" "}
            </button>
            <button onClick={handleNext}>
              {" "}
              <img src="/assets/shared/icon-next-button.svg" alt="Next" />
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default GalleryDetails;
