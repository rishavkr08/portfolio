import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { stacks, aiTools } from '../data/content';

const accentMap = {
  violet: 'from-glow-violet/20 to-transparent text-glow-violet',
  cyan: 'from-glow-cyan/20 to-transparent text-glow-cyan',
  lime: 'from-glow-lime/20 to-transparent text-glow-lime',
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="02" kicker="What I use" title="Skills & AI tooling" />

      {/* Stacks */}
      <div className="grid gap-5 md:grid-cols-3">
        {stacks.map((stack, i) => (
          <Reveal key={stack.title} delay={i * 0.1}>
            <div className={`glass h-full rounded-2xl bg-gradient-to-b ${accentMap[stack.accent]} p-6`}>
              <h3 className="text-lg font-semibold text-white">{stack.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* AI tools spotlight */}
      <Reveal className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-2xl">✨</span>
          <h3 className="text-xl font-semibold">
            AI in my <span className="gradient-text">daily workflow</span>
          </h3>
        </div>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {aiTools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.1}>
            <TiltCard className="h-full">
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{tool.name}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/50">
                    {tool.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{tool.blurb}</p>
                <motion.div
                  className="mt-5 h-1 rounded-full bg-gradient-to-r from-glow-violet via-glow-cyan to-glow-fuchsia"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
