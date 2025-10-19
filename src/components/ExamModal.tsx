"use client";
import { IoClose } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import examData from "./../data/examData";
import usePreventScroll from "@/hooks/usePreventScroll";
import { useState } from "react";
import { answers } from "./CourseContent";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswers: React.Dispatch<React.SetStateAction<answers>>;
  answers: answers;
  duration?: number;
}
const ExamModal = ({ setIsOpen, duration, setAnswers, answers }: Props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  usePreventScroll();

  const handleAnswerChange = (value: string) => {
    const questionKey = (activeQuestion + 1) as keyof answers;

    setAnswers((prev) => ({
      ...prev,
      [questionKey]: value,
    }));
  };

  const currentAnswer = answers[(activeQuestion + 1) as keyof answers] || "";
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000]/50 flex items-center justify-center z-[999]">
      <div className="relative bg-[#4057ba] p-6 rounded-lg max-w-[500px] min-w-[400px]">
        <span
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 cursor-pointer text-white"
        >
          <IoClose size={25} />
        </span>
        <div className="flex items-center gap-2 text-white text-[14px] bg-[#fbd500] rounded-lg py-2 px-4 mx-auto w-fit font-semibold">
          <span>
            <LuAlarmClock />
          </span>
          <span>{duration ?? "00:00"}</span>
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          {examData.map((item) => (
            <div
              key={item.number}
              onClick={() => {
                setActiveQuestion(item.number - 1);
              }}
              className={`w-[40px] h-[40px] flex items-center caret-transparent justify-center rounded-full font-bold border border-[#b6b6b6] text-white cursor-pointer hover:bg-[#fff] hover:text-black ${
                activeQuestion + 1 === item.number
                  ? "bg-[#fff] !text-black"
                  : ""
              } `}
            >
              {item.number}
            </div>
          ))}
        </div>
        <div className="bg-[#eeeeee] flex flex-col gap-3 mt-8 p-4 rounded-[10px]">
          <span className="font-bold">{examData[activeQuestion].number}.</span>
          <p className="text-[14px] font-semibold">
            {examData[activeQuestion].question}
          </p>
          <form className="mt-6">
            <ul className="flex flex-col gap-5">
              {examData[activeQuestion].options.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center !justify-start gap-3 text-[14px] shadow-xl  shadow-gray-400 !p-0 rounded-[10px] cursor-pointer ${
                    currentAnswer === item
                      ? "bg-[#4057ba] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="p-4 border-r border-[#9191911f]">
                    <input
                      type="radio"
                      name="answer"
                      id={item}
                      value={item}
                      checked={currentAnswer === item}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                    />
                  </div>
                  <label htmlFor={item} className="w-full cursor-pointer">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExamModal;
