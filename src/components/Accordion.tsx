'use client'
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CourseContent from "./CourseContent";
import { useIsMobile } from "@/hooks/useMobile";




const Accordion = ({titles}:{titles:string[]}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
   const isMobile = useIsMobile();
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="w-full ml-auto flex flex-col gap-15">
      {titles.map((title, index) => (
        <AccordionItem
          key={index}
          title={title}
          content={<CourseContent index={index} />}
          isOpen={openIndex === index}
          isMobile={isMobile}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion