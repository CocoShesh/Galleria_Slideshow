import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const UseAosAnimation = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);
};

export default UseAosAnimation;
