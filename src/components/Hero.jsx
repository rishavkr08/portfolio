import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content';

// Animated rotating role text.
function RotatingRole({ roles }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);
  return (
    <span className="relative inline-block">
      <motion.span
        key={i}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -18, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="gradient-text"
      >
        {roles[i]}
      </motion.span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-lime" />
            </span>
            Open to interesting work
          </span>
        </motion.div>

        <motion.p variants={item} className="mb-4 font-mono text-sm text-white/50">
          Hi, I’m {profile.name} 👋
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          I’m a <RotatingRole roles={profile.roles} />
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-pretty text-lg text-white/65 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-glow-violet to-glow-cyan px-7 py-3.5 font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-xl border border-white/15 px-7 py-3.5 font-medium text-white/90 transition hover:border-white/40 hover:bg-white/5"
          >
            Résumé
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
