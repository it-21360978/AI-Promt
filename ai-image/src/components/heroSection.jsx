import React from "react";
import hero from "../assets/artwork 1.png";
import { Link } from "react-router-dom";
import Gallery from "../components/gallery";
import { motion } from "framer-motion";

function heroSection() {
  return (
    <div className=" min-h-screen bg-back">
      <section className="text-gray-600 body-font flex items-center justify-center r">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl md:text-7xl mb-4 font-medium text-gray-200 ">
              {" "}
              VisionGen:
              <br className="hidden lg:inline-block" />
              <span className=" text-5xl">AI-Powered Image Mastery</span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Welcome to VisionGen, your doorway to artistic innovation! Harness
              the power of artificial intelligence to redefine visual
              storytelling. Whether you're an artist or enthusiast, our platform
              transforms ideas into stunning images effortlessly. Explore a
              world where creativity knows no limits. Join VisionGen and unlock
              a new dimension of image generation today.
            </p>
            { /** button method to navigate prompt */ }
            <div className="flex justify-center">
              <Link to="/p">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-2"
                >
                  Explore Now
                </motion.button>
              </Link>
            </div>
          </div>
          {/** image section */}
          <div className="">
            <img
              className="hidden md:block object-cover object-center h-[600px] scale-150 "
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
     { /** imported gallery */}
      <Gallery />
    </div>
  );
}

export default heroSection;
