"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Leaderboard from "./Leaderboard";

const SocialIcon = ({
  Icon,
  name,
  sectionId,
}: {
  Icon: StaticImageData;
  name: string;
  sectionId: string;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const goToSection = () => {
    if(sectionId=="leaderboard") {
      setIsOpen(true);
      return;
    };
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={goToSection}
        className="border border-[#b3b3b357] rounded-full p-3 relative cursor-pointer"
      >
        <Image src={Icon} alt="icon" width={20} height={20}></Image>
        {isHovered && (
          <div className="text-[12px] bg-black text-white px-1 py-1 text-center rounded-[16px] absolute top-[110%] left-0 min-w-[110px]">
            {name}
          </div>
        )}
      </div>
      {isOpen && <Leaderboard setIsOpen={setIsOpen} />}
    </>
  );
};

export default SocialIcon;
