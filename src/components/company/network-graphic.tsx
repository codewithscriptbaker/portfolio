import { motion } from "framer-motion";

/** Decorative node network for the hero — motion only, no interaction. */
export default function NetworkGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M60 70L190 40L330 90L430 200L300 260L150 230L70 190Z M240 150L190 40 M240 150L330 90 M240 150L300 260 M240 150L150 230 M240 150L70 190"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 9"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -140 }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />
      {[
        [60, 70],
        [190, 40],
        [330, 90],
        [430, 200],
        [300, 260],
        [150, 230],
        [70, 190],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={6}
          fill="currentColor"
          animate={{ scale: [1, 1.55, 1], opacity: [1, 0.55, 1] }}
          transition={{
            duration: 3.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: (i % 3) * -1,
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      <motion.circle
        cx={240}
        cy={150}
        r={11}
        fill="currentColor"
        animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
        style={{ transformOrigin: "240px 150px" }}
      />
    </svg>
  );
}
