"use client";
import React, { useRef, useEffect } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleEnded = () => {
        videoElement.currentTime = 0;
        videoElement.play();
      };

      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-300px] h-full w-full left-0 z-[1] object-cover videoStyles"
      >
        <source src="/blackhole.webm" type="video/webm" />
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
