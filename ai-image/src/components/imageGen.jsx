import React from 'react'
import Gallery from '../components/gallery'
import bG from '../assets/bghero.jpg'

function imageGen() {
  const sectionStyle = {
    backgroundImage: `url(${bG})`,
  };
  return (
    <>
    <div style={sectionStyle}>
    <section className=' min-h-screen flex items-center justify-center'>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left box-border backdrop-blur border-white h-auto py-8">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-4xl font-bold leading-none tracking-tighter text-gray-200 md:text-5xl lg:text-6xl lg:max-w-7xl">
          Elevate Your Vision with VisionGen:  <br className="hidden lg:block"/>
          AI-Powered Image Mastery
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-300">Welcome to VisionGen, your doorway to artistic innovation! Harness the power of artificial intelligence to redefine visual storytelling. Whether you're an artist or enthusiast, our platform transforms ideas into stunning images effortlessly. Explore a world where creativity knows no limits. Join VisionGen and unlock a new dimension of image generation today.</p>
          <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Explore Now</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    <Gallery/>
   
      
    </>
  )
}

export default imageGen
