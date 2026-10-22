import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE } from "../utils/motion.js";

/**
 * Fluid accordion with animated height and rotating indicator.
 * One item open at a time. Fully keyboard accessible.
 */
const FaqAccordion = ({ faqs }) => {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="py-5">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-6 text-left text-base font-semibold text-stone-800 transition hover:text-brand"
            >
              {f.q}
              <motion.span
                aria-hidden="true"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 transition-colors duration-300 ${
                  isOpen
                    ? "bg-brand text-white ring-brand"
                    : "ring-stone-300 text-stone-600"
                }`}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pt-4 text-sm leading-relaxed text-stone-600">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
