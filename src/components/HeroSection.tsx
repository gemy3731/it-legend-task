import React from "react";
import Breadcrumb from "./Breadcrumb";
import bread from "@/data/breadData";
import social from "@/data/socailData";
import SocialIcon from "./SocialIcon";
import ReactPlayer from "react-player";
const HeroSection = () => {
  return (
    <section id="hero">
      <Breadcrumb breadcrumbItems={bread} />
      <h1 className="text-[32px] font-bold mt-5">
        Starting SEO as your Home <span>Based Business</span>
      </h1>
      <div className="relative w-full max-h-[525px] aspect-[1.5] rounded-lg overflow-hidden mt-5">
      <ReactPlayer
        src="https://www.youtube.com/watch?v=Pf_7qcX0AFs"
        controls
        light="/videos/videoPoster.png"
        width="100%"
        height="525px"
        className="absolute top-0 left-0 object-fill"
      />
      </div>
 
      <div className="flex gap-5 mt-5 ml-5">
      {social.map((item, index) => (
        <SocialIcon Icon={item.icon} name={item.name} sectionId={item.sectionId} key={index} />
      ))}
      </div>
    </section>
  );
};

export default HeroSection;
