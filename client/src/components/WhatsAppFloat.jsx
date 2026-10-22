import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WHATSAPP_URL =
  "https://wa.me/919889733153?text=" +
  encodeURIComponent(
    "Hi! I'd like to know more about Shree Ansh Agarbatti products."
  );

/**
 * Site-wide floating WhatsApp chat button.
 * Enters after a short delay so it never competes with the hero sequence.
 */
const WhatsAppFloat = () => {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0.6, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-colors hover:bg-[#1fb356] sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon fontSize="medium" />
    </motion.a>
  );
};

export default WhatsAppFloat;
