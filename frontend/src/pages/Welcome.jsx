import React from "react";
import HeroOverlay from "../components/HeroOverlay";

const Welcome = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"SIGNAL VIEWING AND ARCHIVING PORTAL (SVAP)"}
        pageAbreviation={"SVAP"}
        overlayURL={"/hero.jpg"}
      />
    </>
  );
};

export default Welcome;
