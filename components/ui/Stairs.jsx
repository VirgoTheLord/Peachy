import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay...
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* We have to render 6 motion divs, each representing a step of the staircase. Each div will have the same animation defined by the stairsAnimation object. The delay for each div is calculated dynamically based on the reversed index. Creating a staggered effect with decreasing delay for each subsequent step*/}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            intial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.09,
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};
export default Stairs;
