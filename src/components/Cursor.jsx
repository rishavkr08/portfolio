import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// A soft glowing dot that trails the pointer. Hidden on touch devices.
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHovering(!!(t && t.closest && t.closest('a, button, [data-hover]')));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.5 : 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-3 w-3 rounded-full bg-glow-cyan shadow-[0_0_20px_6px_rgba(34,211,238,0.5)]"
      />
    </motion.div>
  );
}
