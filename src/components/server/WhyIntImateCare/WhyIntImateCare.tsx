import React from "react";
import Image from "next/image"
import clsx from "clsx";
import AnImatedFlipCard from "../AnimatedFlipCard/AnimatedFlipCard";
import LikeIcon from "public/icons/LikeIcon";
import SmileIcon from "public/icons/SmileIcon";
import HygieneAndComfortIcon from "public/icons/HygieneAndComfortIcon";
import "./WhyIntimate.css"

const WhyIntimateCare = () => {
  return (
    <div className="p-4 mt-67 relative top-1 min-h-[658px] bg-white">
      <h2 className="text-3xl sm:text-[44px] font-bold text-center">
        Why Intimate Care Is Important?
      </h2>
      <p className="text-center text-black mt-4 font-normal font-sans text-base md:text-lg lg:text-xl">
        Neglecting intimate hygiene risks infections and discomfort. Prioritize it to maintain a  <br />healthy genital area and overall well-being.
      </p>
      <div className="flex justify-center items-center w-full mt-16">
        <div
          className={clsx(
            " flex flex-col justify-between",
            "lg:flex-row"
          )}
        >
          <AnImatedFlipCard
            image={<HygieneAndComfortIcon />}
            title={"Hygiene and Comfort"}
            para={
              "Removing excess hair in sensitive areas can reduce sweat, odor, and bacterial buildup, keeping you feeling fresh and confident throughout the day."
            }
          />

          <AnImatedFlipCard
            image={<SmileIcon />}
            title={"Enhanced Appearance"}
            para={
              "Neatly removing body hair can accentuate your physique, allowing your hard work at the gym to shine."
            }
          />

          <AnImatedFlipCard
            image={<LikeIcon />}
            title={"Boosted Confidence"}
            para={
              "A well-groomed look boosts self-confidence, as caring for your body positively impacts self-image and outlook across life's aspects."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyIntimateCare;
