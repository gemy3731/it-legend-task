"use client"

import { useEffect } from "react";

const usePreventScroll = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    return null
}

export default usePreventScroll