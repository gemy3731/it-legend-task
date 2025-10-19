'use client'
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CourseContent from "./CourseContent";




const Accordion = ({titles}:{titles:string[]}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="w-full ml-auto flex flex-col gap-6">
      {titles.map((title, index) => (
        <AccordionItem
          key={index}
          title={title}
          content={<CourseContent index={index} />}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion