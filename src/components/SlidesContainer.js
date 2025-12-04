import React, { useRef, useEffect } from "react";
import "./SlidesContainer.css";

export default function SlidesContainer({ children }) {
  const containerRef = useRef(null);

  const moveToSlide = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = window.innerWidth;
    const newScroll =
      direction === "next"
        ? container.scrollLeft + slideWidth
        : container.scrollLeft - slideWidth;

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  // Arrow-key navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") moveToSlide("next");
      if (e.key === "ArrowLeft") moveToSlide("prev");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="slides-container" ref={containerRef}>
      {children}
    </div>
  );
}
