/**
 * Shared motion tokens. One easing language for the whole site.
 * Every component imports from here instead of hand-rolling curves.
 */

/* Signature ease: fast start, long elegant settle */
export const EASE = [0.16, 1, 0.3, 1];

export const DUR = {
  fast: 0.3,
  base: 0.65,
  slow: 0.9,
};

/* Scroll-into-view reveal, used by every section */
export const reveal = (reduce, delay = 0) => ({
  initial: reduce ? false : { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: DUR.base, delay, ease: EASE },
});

/* Mount-time entrance (hero and page headers) */
export const enter = (reduce, delay = 0, y = 32) => ({
  initial: reduce ? false : { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/* Stagger container + child for orchestrated groups */
export const staggerParent = (reduce, stagger = 0.08, delayChildren = 0) => ({
  initial: reduce ? false : "hidden",
  animate: "show",
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
};
