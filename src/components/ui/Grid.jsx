import React from "react";
import { Link } from "react-router-dom";
const Grid = ({ item }) => {
  return (
    <>
      <Link to={`/gallery/${item.id}`} key={item.id}>
        <div className="relative">
          <img
            className="h-full w-full rounded-lg cursor-pointer brightness-75 hover:brightness-100"
            src={item?.images?.thumbnail}
            alt={item?.name}
          />
          <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white py-4 px-5">
            <h2 className="text-xl font-bold">{item?.name}</h2>
            <p className="text-sm">{item?.artist?.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Grid;
