"use client";
import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";

export const MicroGlideEffect = () => {
  const { text, transitionProps } = useAppStore();

  return (
    <div className="h-full flex flex-wrap items-center justify-center p-4 overflow-auto">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-2xl m-1"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
          transition={{
            type: transitionProps.type,
            stiffness: transitionProps.stiffness,
            damping: transitionProps.damping,
            delay: index * transitionProps.delayPerChar
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};