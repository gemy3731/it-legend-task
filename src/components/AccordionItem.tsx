import { JSX } from "react";
import { PiPlus } from "react-icons/pi";

interface AccordionItemProps {
    title: string;
    content: JSX.Element;
    isOpen: boolean;
    onClick: () => void;
}
const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="w-full border border-[#0000001f] rounded-lg">
    <button
      onClick={onClick}
      className={`text-[18px] flex items-center justify-between cursor-pointer px-4 py-3 w-full ${isOpen && "border-b border-[#0000001f]"}`}
    >
      {title}
      <span>{isOpen ? "−" : <PiPlus size={25} />}</span>
    </button>
    {isOpen && (
      <div className="courseContent text-gray-600 ">
        {content}
      </div>
    )}
  </div>
  )
}

export default AccordionItem