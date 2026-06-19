import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#work'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="gradient-text">{'<rk />'}</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-3 py-2 text-sm text-white/65 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/20"
        >
          Let’s talk
        </a>
      </nav>
    </motion.header>
  );
}
