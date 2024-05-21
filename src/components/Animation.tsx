import React from "react";
import { motion } from "framer-motion";

const Animation = ({ children }: any) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
