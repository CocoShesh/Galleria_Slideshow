import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSlideShow, setIsSlideShow] = useState(false);
  const navigate = useNavigate();

  const handleStartSlideShow = () => {
    setIsSlideShow(!isSlideShow);
    if (isSlideShow) {
      navigate("/");
    } else {
      navigate("/gallery/1");
    }
  };
  return (
    <>
      <nav className="flex justify-center items-center  ">
        <section className="flex items-center justify-between max-sm:mx-5 mx-10   pt-8 pb-8 border-b-2 w-full  2xl:w-[1350px] border-[#f0f0f0]">
          <Link to="/">
            <img
              src="/assets/shared/logo.svg"
              alt=""
              className="max-sm:w-[150px]"
            />{" "}
          </Link>
          <button
            onClick={handleStartSlideShow}
            className="uppercase font-custom  text-sm  -tracking-tighter max-sm:text-xs  2xl:mr-20 max-xl:mr-0 text-[#a3a3a3]"
          >
            {isSlideShow ? "stop slideshow" : "start slideshow"}
          </button>
        </section>
      </nav>
    </>
  );
};

export default Header;
