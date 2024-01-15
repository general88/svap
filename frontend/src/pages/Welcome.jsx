import React from "react";
import HeroOverlay from "../components/HeroOverlay";

const Welcome = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"SIGNAL VIEWING AND ARCHIVING PORTAL (SVAP)"}
        pageAbreviation={"SVAP"}
        overlayURL={
          "https://www.military.africa/wp-content/uploads/2021/07/nigerian-air-force-jf-17-thunder-airstrike-scaled.jpg"
        }
      />
    </>
  );
};

export default Welcome;
