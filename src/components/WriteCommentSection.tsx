"use client";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

const WriteCommentSection = () => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <section id="writeComment" className="flex flex-col gap-5 mt-6">
      <textarea
        name="comment"
        id="comment"
        cols={30}
        rows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a comment"
        className="w-full resize-none bg-white rounded-lg p-5 placeholder:text-[#81818157]  outline-0"
      ></textarea>
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={!value}
        className="flex items-center gap-2 bg-[#41b69d] rounded-lg text-white px-4 py-2 font-semibold text-center w-fit disabled:opacity-50 disabled:!cursor-not-allowed"
      >
        Submit Review <GrFormNextLink />
      </button>
    </section>
  );
};

export default WriteCommentSection;
