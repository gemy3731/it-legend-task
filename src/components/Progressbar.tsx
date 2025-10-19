"use client";
import { useEffect, useRef, useState } from "react";

const Progressbar = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);
  return (
    <div ref={ref} className="w-full h-1.5 bg-[#C7DCEB] rounded-full ">
      <div
        className={`h-full relative bg-[#6abd8a] rounded-full transition-all duration-1000 ease-in-out ${
          inView ? "w-[63%]" : "w-0"
        } `}
      >
        <span className="absolute top-[130%] left-[100%] transform -translate-x-1/2 text-[12px]">
          63%
        </span>
        <span className="myProgress absolute -top-[55px] left-[100%] transform -translate-x-1/2 text-[11px] font-medium rounded-full h-[20px] w-[20px] border border-[#c5c5c5] p-4 flex items-center justify-center">
          You
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
