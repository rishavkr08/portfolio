import { motion, useScroll, useTransform } from 'framer-motion';

// Aurora blobs + grid + drifting orbs that react to scroll.
export default function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-ink" />

      {/* aurora blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full bg-glow-violet/30 blur-[120px] animate-drift"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-glow-cyan/25 blur-[120px] animate-drift"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-glow-fuchsia/20 blur-[130px] animate-drift"
      />

      {/* grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#05060a_100%)]" />
    </div>
  );
}
