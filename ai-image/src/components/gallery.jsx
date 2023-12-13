import React from "react";
import img1 from "../assets/game.jpg";
import img2 from "../assets/alchemyrefiner_alchemymagic_3_8cb32106-7b99-410d-9c35-323163d198f9_0.jpg";
import img3 from "../assets/PhotoReal_Young_Chinese_girl_sitting_by_lotus_pond_wearing_flo_1.jpg";
import img4 from "../assets/horr.jpg";
import img5 from "../assets/bg.jpg";
import img6 from "../assets/Default_cinematic_close_up_stunning_blonde_woman_in_red_robes_0_9560f93a-aa76-4162-8fd3-e5b498ab194d_1.jpg";

function gallery() {
  return (
    <div>
     { /** image section */}
      <section className=" bg-gradient-dark">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-[500px] h-[300px]  object-cover object-center block rounded-lg hover:scale-105"
                  src={img1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-[501px] h-[301px]  object-cover object-center block rounded-lg hover:scale-105"
                  src={img2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-[601px] h-[360px]  object-cover object-center block rounded-lg hover:scale-105"
                  src={img3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-[600px] h-[360px]  object-cover object-center block rounded-lg hover:scale-105"
                  src={img4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-[502px] h-[302px]  object-cover  object-center block rounded-lg hover:scale-105"
                  src={img5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-[503px] h-[303px]  object-cover  object-center block rounded-lg hover:scale-105"
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default gallery;
