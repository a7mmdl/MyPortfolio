"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    // Check if the window object is available
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)

      const handleResize = () => setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-300px] h-full w-full left-0 z-[1] object-cover videoStyles"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-32 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]"> Fullstack Developer Portfolio </h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <div>
              <span>
                Hi!{" "}
                <span className="md:inline-block">
                  I am <br className="block md:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Ahmed
                  </span>
                  {screenWidth && screenWidth > 768 && <span> Rafi</span>}
                </span>
              </span>
              <span style={{ fontSize: "40px" }}> Full Stack Developer </span>
            </div>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w[600px]"
          >
            I'm a Full Stack Software Engineer with expertise in Django backend development and Next.Js for polished front end results. Check out my projects and skills.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            href="#skills"
          >
            Learn More!
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650} />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .videoStyles {
          top: -300px;
        }

        @media (max-width: 767px) {
          .videoStyles {
            top: -430px;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero