import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.2)" : "transparent",
        }}
      />
      {/* Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
