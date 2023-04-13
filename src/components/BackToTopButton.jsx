import { TfiArrowCircleUp } from "react-icons/tfi";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBackToTopBtn(true) : setBackToTopBtn(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopBtn && (
        <button
          className="fixed  bottom-8 right-4 z-100
        text-5xl font-bold text-sky-400 rounded-full 
        dark:text-white md:bottom-8 md:right-8
        opacity-50 hover:opacity-100"
          onClick={scrollUp}
        >
          <TfiArrowCircleUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
