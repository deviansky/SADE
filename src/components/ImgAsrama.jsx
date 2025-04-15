import React from "react";
import Asrama from "../assets/Asrama.png";

const ImgAsrama = () => {
  return (
    <div className="flex h-screen">
      <img src={Asrama} alt="Image" className="w-xl rounded-r-2xl " />
    </div>
  );
};

export default ImgAsrama;