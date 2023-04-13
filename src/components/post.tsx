import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Post({ ...props }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="mt-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="h-96 rounded-lg cursor-pointer">
        <img src={props.image} />
      </div>
    </motion.div>
  );
}
