import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGallery } from "../../context/GalleryContext";
import ProgressBar from "@ramonak/react-progress-bar";
import UseAosAnimation from "../../hooks/UseAosAnimation";
const GalleryDetails = () => {
  const { id } = useParams();
  const { data } = useGallery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewImage, setIsViewImage] = useState(false);
  const [image, setImage] = useState("");
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

  const handleViewImage = item => {
    setIsViewImage(prevState => !prevState);
    setImage(item);
  };

  UseAosAnimation();
  return (
    <>
      <section
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        className="p-10 flex flex-col justify-between max-lg:pb-5 max-lg:p-0 mt-5  2xl:flex 2xl:items-center 2xl:justify-center font-custom"
      >
        {data.map((item, index) => (
          <section
            key={item.id}
            className={`${
              index === currentIndex ? "" : "hidden"
            } flex  items-center max-lg:flex-col   max-lg:px-3  gap-64 max-lg:h-fit 2xl:w-[1440px]  max-lg:gap-10  mb-32`}
          >
            <section className="relative w-fit   max-lg:w-full  max-lg:flex max-lg:items-center max-lg:justify-center ">
              <img
                className="h-[500px] w-[450px] "
                src={item?.images?.hero?.large}
                alt={item.name}
              />
              <section
                onClick={() => handleViewImage(item?.images?.hero?.large)}
                className="w-62 h-12 px-5 py-3 absolute bottom-5 left-5 max-lg:top-5  cursor-pointer  hover:brightness-75 bg-black text-white flex justify-center items-center  gap-3"
              >
                <img src="/assets/shared/icon-view-image.svg" alt="" />
                <span className="uppercase"> View Image </span>
              </section>
              <section className="absolute w-[300px] max-sm:w-[250px] max-lg:bottom-0  max-lg:left-0  h-fit py-5 lg:top-[-5px] lg:right-[-200px] bg-white text-black text-center">
                <h1 className="text-5xl max-sm:text-3xl font-bold">
                  {item?.name}
                </h1>{" "}
                <br />
                <p className="text-sm text-[#7d7f9c]">{item?.artist?.name}</p>
              </section>

              <section className="absolute max-lg:h-[150px] right-[-200px]  max-lg:bottom-[-50px] max-lg:right-0 bottom-[-50px] text-black text-center ">
                <img
                  src={item?.artist?.image}
                  alt=""
                  className="max-lg:h-[100px]"
                />
              </section>
            </section>
            <section className="lg:w-[600px] relative  flex flex-col justify-between   max-lg:w-full h-[500px]  md:h-[400px] ">
              <section className=" relative  ">
                <span className="text-[11em] max-md:text-8xl absolute max-lg:top-0  top-[-50px] md:top-[-50px]  right-0 z-[-0] text-[#f3f3f3] ">
                  {item?.year}
                </span>
              </section>
              <section className=" right-0  max-lg:pl-5 pr-10 max-lg:pr-10  text-sm  absolute  pt-20 leading-6 text-[#a17d7d] font-bold">
                <p> {item?.description}</p>
              </section>
              <a href={item?.source} target="_blank" rel="noreferrer">
                <span className="uppercase  text-xs  pl-5  underline text-[#7d7fa0] hover:text-black">
                  Go To source
                </span>
              </a>
            </section>
          </section>
        ))}
        <section className="2xl:w-[1440px] max-lg:w-full px-5">
          <ProgressBar
            completed={currentIndex}
            maxCompleted={data.length - 1}
            bgColor="#000000"
            height=".2rem"
            isLabelVisible={false}
          />
          <section className="flex justify-between mt-10 max-lg:px-3">
            <section>
              <h1 className="text-2xl max-sm:text-lg font-bold">
                {selectedItem?.name}
              </h1>{" "}
              <br />
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
      </section>

      {isViewImage && (
        <section className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50  font-custom flex justify-center items-center">
          <section className="relative h-[80%]">
            <section
              onClick={() => setIsViewImage(prevState => !prevState)}
              className="absolute top-[-20px] right-5   uppercase tracking-wider text-lg  cursor-pointer text-white "
            >
              Close
            </section>
            <img
              src={image}
              alt="View Image"
              className="h-[90%] max-md:h-[60%] mt-8 rounded-2xl"
            />
          </section>
        </section>
      )}
    </>
  );
};

export default GalleryDetails;
