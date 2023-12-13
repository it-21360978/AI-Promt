import React, { useState, useRef, useEffect } from "react";
import Back from "../assets/back.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloudDownload } from "react-icons/io5";

function prompt() {
  const [imageUrl, setImageUrl] = useState("/");// image state
  const [apiKey, setApiKey] = useState("");//api state
  const inputRef = useRef(null);//input value ref

  const generator = async () => {
    try {
      if (!apiKey) {
        {/** prompt massage method */}
        const userApiKey = window.prompt("Please enter your API key:");

       { /* Check value entered*/}
        if (!userApiKey) {
          return;
        }

       { /*Set state to entered API key*/}
        setApiKey(userApiKey);
      }
      toast.info("Generating image...", {
        autoClose: false,
        position: toast.POSITION.TOP_CENTER,
      });

      if (inputRef.current.value === "") {
        return 0;
      }

      {/** open-ai method for create image  */}
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            model: "dall-e-3",
            /* "User-Agent": "chrome", */
          },
          body: JSON.stringify({
            prompt: `${inputRef.current.value}`,
            n: 1,
            size: "512x512",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(`OpenAI API error: ${data.errors[0].message}`);
      }

      console.log(data);

      {  /** image url response */}
      const imageUrl = data.data[0].url;
      toast.dismiss();
      toast.success("image generated successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
     { /* Update state to generated object*/}
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      toast.dismiss();
      toast.error("Error generating image", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  {/** generated image download */}
  const handleDownload = async () => {
    console.log("Downloading image:", imageUrl);

    if (imageUrl !== "/") {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

      {/* blob url trigger and download method*/}
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "generated_one.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error("Error downloading image:", error);
        toast.error("Error downloading image.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.warn("Sorry, You cannot download the default image", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  {
   
  }
{/* blob url trigger and download method*/}
  useEffect(() => {
    const refresh = setTimeout(() => {
      window.location.reload(true);
    }, 60 * 3 * 1000); //after 3 minutes refresh
    return () => clearTimeout(refresh);
  }, []);

  return (
    <>
      <div className=" min-h-screen bg-back">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          {  /**image section */}
            <img
              className="w-72 h-72 mb-10 object-cover object-center rounded shadow-2xl"
              alt="hero"
              src={imageUrl === "/" ? Back : imageUrl}
            />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                Ignite Your Creativity with Custom Prompts
              </h1>
              <p className="mb-8 leading-relaxed dark:text-white">
                Tailor your creative journey by generating unique prompts
                tailored to your artistic vision. Whether you're a writer,
                artist, or creator, our personalized prompts will spark your
                imagination. Elevate your work with prompts as unique as you
                are. Let the creativity flow!
              </p>
              {/**prompt section */}
              <div className=" flex flex-col md:flex-row items-center justify-center">
                {/** prompt input method */}
                <div className=" mr-4 w-auto text-left">
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    ref={inputRef}
                    className="w-full dark:text-white bg-gray-100 bg-opacity-50 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-transparent"
                    placeholder="Enter your Prompt"
                  />
                </div>
                {/** prompt button and download button */}
                <div className=" flex  mt-2 md:mt-0">
                  <button
                    onClick={() => {
                      generator();
                    }}
                    className=" h-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl border-0 py-2 px-6 focus:outline-none rounded-full text-md"
                  >
                    Generate
                  </button>
                  <button
                    onClick={handleDownload}
                    className=" text-5xl text-orange-600 ml-5"
                  >
                    <IoCloudDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**adding toast container */}
        <ToastContainer />
      </div>
    </>
  );
}

export default prompt;
