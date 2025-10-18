import React from "react";
import Breadcrumb from "./Breadcrumb";
import bread from "@/data/breadData";
import social from "@/data/socailData";
import SocialIcon from "./SocialIcon";

const HeroSection = () => {
  return (
    <section id="heroSection">
      <Breadcrumb breadcrumbItems={bread} />
      <h1 className="text-[32px] font-bold mt-5">
        Starting SEO as your Home <span>Based Business</span>
      </h1>
      <video
        controls
        poster="/videos/videoPoster.png"
        className="mt-5  w-full aspect-[1.5] object-cover rounded-lg"
      >
        <source src="/videos/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex gap-5 mt-5 ml-5">
      {social.map((item, index) => (
        <SocialIcon Icon={item.icon} name={item.name} sectionId={item.sectionId} key={index} />
      ))}
      </div>
    </section>
  );
};

export default HeroSection;
