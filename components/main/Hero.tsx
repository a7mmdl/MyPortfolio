"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-300px] h-full w-full left-0 z-[1] object-cover videoStyles"
      >
        <source src="/blackhole.webm" type="video/webm" />
        <source src="/blackhole.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HeroContent />

      <style jsx>{`
        .videoStyles {
          top: -300px; /* Adjust this value to move the video up or down on desktop */
        }

        @media (max-width: 767px) {
          .videoStyles {
            top: -470px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
