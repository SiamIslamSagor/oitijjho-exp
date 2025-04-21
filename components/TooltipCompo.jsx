import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function TooltipComponent({
  popup1Text = "Hover me!",
  popup2Text = "Hover me!",
  popup3Text = "Hover me!",
  popup1Link = "/bogurar-doi",
  popup2Link = "/",
  popup3Link = "/",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePopupClick = buttonName => {
    console.log(`${buttonName} is clicked`);
  };

  // Animation variants for top, left, and right positions
  const topButtonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: -100, // Position above the main button
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const leftButtonVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: -120, // Position to the left of the main button
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const rightButtonVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 120, // Position to the right of the main button
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-[300px] relative">
      <div
        className="relative w-[95px] h-[60px] md:w-[120px] md:h-[75px] bg-transparent cursor-pointer flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Popup button - Top */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-full px-3 py-2 rounded cursor-pointer z-10"
                onClick={() => handlePopupClick("Top Button")}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={popup1Link}>
                  <button className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#FF9800,-0.5rem_-0.5rem_#00BCD4] transition w-max">
                    {popup1Text}
                  </button>
                </Link>
              </motion.div>

              {/* Popup button - Left */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-full px-3 py-2 rounded cursor-pointer z-10"
                onClick={() => handlePopupClick("Left Button")}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={popup2Link}>
                  <button className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#FF9800,-0.5rem_-0.5rem_#00BCD4] transition w-max">
                    {popup2Text}
                  </button>
                </Link>
              </motion.div>

              {/* Popup button - Right */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -right-full px-3 py-2 rounded cursor-pointer z-10"
                onClick={() => handlePopupClick("Right Button")}
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={popup3Link}>
                  <button className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#FF9800,-0.5rem_-0.5rem_#00BCD4] transition w-max">
                    {popup3Text}
                  </button>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
//   return (
//     <div className="tooltip-container">
//       <span className="tooltip-1">Create your own designs.</span>
//       <span className="tooltip-2">Find creative elements.</span>
//       <span className="tooltip-3">Participate in challenges.</span>
//       <span className="p-5" />
//     </div>
//   );
