import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../utils/motion.js";

/**
 * Masked word-by-word reveal for display headlines.
 * Each word rises out of an overflow-hidden mask.
 * Padding compensation keeps descenders (g, y, p) from clipping.
 */
const SplitWords = ({ text, className = "", delay = 0, stagger = 0.07 }) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default SplitWords;
