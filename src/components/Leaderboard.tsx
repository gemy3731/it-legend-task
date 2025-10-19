"use client";
import usePreventScroll from "@/hooks/usePreventScroll";
import { IoClose } from "react-icons/io5";

const Leaderboard = ({setIsOpen}:{setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    usePreventScroll()
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000]/50 flex items-center justify-center z-[999]">
      <div className="relative bg-white p-6 rounded-lg max-w-[500px]">
        <span onClick={()=>setIsOpen(false)} className="absolute top-2 right-2 cursor-pointer"><IoClose size={25} /></span>
        <p className="text-center">Course Name Shown Here</p>
        <h3 className="text-[20px] font-semibold text-center">Leaderboard</h3>
        <div className="bg-[#f5f9fa] rounded-lg p-3 flex items-center gap-3 my-5">
          <span>💪</span>
          <p>
            Great job, my friend! Your performance in this course is better than
            60% of the other students. Keep it up — I want to see your name on
            the leaderboard here!
          </p>
        </div>
        <div className="bg-[#f5f9fa] rounded-[20px] px-4 py-6 flex flex-col items-center gap-3">
            {[...Array(6)].map((_, index) => (
              <textarea readOnly className="w-full resize-none bg-white rounded-lg p-5  outline-0" key={index}></textarea>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
