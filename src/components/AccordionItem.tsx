import { JSX } from "react";
import { PiPlus } from "react-icons/pi";

interface AccordionItemProps {
    title: string;
    content: JSX.Element;
    isOpen: boolean;
    onClick: () => void;
    isMobile: boolean
}
const AccordionItem = ({ title, content, isOpen, onClick,isMobile }: AccordionItemProps) => {
  return (
    <div className="w-full border border-[#0000001f] rounded-lg">
    <button
      onClick={()=> isMobile && onClick()}
      className={`text-[18px] flex flex-col gap-3 ${isMobile ? "cursor-pointer":"!cursor-default border-b border-[#0000001f]"} px-4 py-3 w-full ${isOpen && "border-b border-[#0000001f]"}`}
    >
      <span className="flex items-center justify-between font-bold">
      {title}
      {isMobile && <span>{isOpen ? "−" : <PiPlus size={25} />}</span>}
      </span>
      {!isMobile &&<p className="text-left text-[14px] font-medium text-[#818181a1]">Advanced stiry telling techniques for writers:<br/>Personas, Characters & Plots</p>}
    </button>
    {((isOpen && isMobile) || !isMobile) &&  (
      <div className="courseContent text-gray-600 ">
        {content}
      </div>
    )}
  </div>
  )
}

export default AccordionItem