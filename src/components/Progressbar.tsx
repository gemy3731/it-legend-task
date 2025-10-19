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
    <div
      ref={ref}
      className="w-full h-1.5 bg-[#C7DCEB] rounded-full overflow-hidden"
    >
      <div
        className={`h-full bg-[#6abd8a] rounded-full transition-all duration-1000 ease-in-out ${
          inView ? "w-[70%]" : "w-0"
        } `}
      ></div>
    </div>
  );
};

export default Progressbar;
