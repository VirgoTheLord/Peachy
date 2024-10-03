"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Circle */}
        <motion.svg
          className="w-[300px] md:w-[400px] xl:w-[506px] h-[300px] md:h-[400px] xl:h-[506px] absolute"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#FF6F61"
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[506px] xl:h-[506px] rounded-full overflow-hidden flex justify-center items-center"
        >
          <Image
            src="/assets/Alwin-fotor-ai-art-effects-20241002173518-Photoroom.png"
            priority
            quality={100}
            width={506}
            height={506}
            alt=""
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;