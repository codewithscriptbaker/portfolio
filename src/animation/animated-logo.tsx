import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-accent"
        aria-label="Muhammad Sawaiz logo"
        fill="none"
      >
        {/* Thin ring — outline only */}
        <motion.circle
          cx="32"
          cy="32"
          r="29"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* M — line monogram */}
        <motion.path
          d="M16 44 V22 L24 36 L32 22 V44"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.15 }}
        />

        {/* S — line monogram */}
        <motion.path
          d="M48 26 C48 22 44 20 40 20 C35 20 32 23 32 26 C32 30 36 31 42 33 C47 35 50 37 50 42 C50 47 45 50 39 50 C33 50 29 47 28 43"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.35 }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
