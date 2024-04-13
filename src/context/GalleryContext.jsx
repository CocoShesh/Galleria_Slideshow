import { useContext, createContext, useState, useEffect } from "react";
import { getData } from "../api/data";
const GalleryContext = createContext();

export const useGallery = () => {
  return useContext(GalleryContext);
};
export const GalleryProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <GalleryContext.Provider value={{ data }}>
      {children}
    </GalleryContext.Provider>
  );
};
