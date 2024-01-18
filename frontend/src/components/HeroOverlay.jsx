import React from "react";

const HeroOverlay = ({ pageTitle, overlayURL, pageAbreviation }) => {
  return (
    <div className="max-w-full mx-auto h-[350px] w-full relative mt-4">
      <img src={overlayURL} className="w-full h-full object-cover" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-opacity-50 h-[400px] w-full flex items-center px-4">
        <h1 className="text-[30px] sm:text-[50px] font-sans font-extrabold text-white sm:text-gray-800 max-w-2xl text-center">
          {pageTitle}
        </h1>
        {/* <h1 className="text-[40px] font-sans font-extrabold text-gray-800 max-w-2xl text-center">{pageAbreviation}</h1> */}
      </div>
    </div>
  );
};

export default HeroOverlay;
