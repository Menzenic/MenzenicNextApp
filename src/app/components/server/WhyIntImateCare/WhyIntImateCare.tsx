import React from "react";
// import "../../utils/styles/styles.css";

import clsx from "clsx";
import AnImatedFlipCard from "../AnimatedFlipcard/AnimatedFlipCard";
// import AnimatedFlipCard from "../AnimatedFlipcard/AnimatedFlipCard";

const WhyIntimateCare = () => {
  return (
    <div className="p-4 min-h-[658px] mt-14">
      <h2 className="text-3xl sm:text-[44px] font-bold text-center">
        Why Manscape?
      </h2>

      <div className="flex justify-center items-center w-full mt-16">
        <div
          className={clsx(
            "w-[80%] flex flex-col justify-between",
            "lg:flex-row"
          )}
        >
          <AnImatedFlipCard
            // image={<HygieneAndComfortIcon />}
            title={"Hygiene and Comfort"}
            para={
              "Removing excess hair in sensitive areas can reduce sweat, odor, and bacterial buildup, keeping you feeling fresh and confident throughout the day."
            }
          />

          {/* Enhanced Appearance */}
          <AnImatedFlipCard
            // image={<SmileIcon />}
            title={"Enhanced Appearance"}
            para={
              "Neatly removing body hair can accentuate your physique, allowing your hard work at the gym to shine."
            }
          />

          {/* Boosted Confidence */}
          <AnImatedFlipCard
            // image={<LikeIcon />}
            title={"Boosted Confidence"}
            para={
              "A well groomed look boosts self-confidence, as caring for your body positively impacts self-image and outlook across life's aspects."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyIntimateCare;
