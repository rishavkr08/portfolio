import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { profile } from '../data/content';

const socialLinks = [
  ['GitHub', profile.socials.github],
  ['LinkedIn', profile.socials.linkedin],
  ['Twitter / X', profile.socials.twitter],
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-32 text-center">
      <Reveal>
        <p className="font-mono text-sm text-glow-cyan/80">04 — Say hello</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Let’s build something <span className="gradient-text">worth shipping</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Have a project, role, or idea in mind? My inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-block rounded-2xl bg-gradient-to-r from-glow-violet to-glow-cyan px-9 py-4 text-lg font-semibold text-ink"
        >
          {profile.email}
        </motion.a>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl px-5 py-2.5 text-sm text-white/70 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
