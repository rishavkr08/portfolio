import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="01" kicker="Who I am" title={about.heading} />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 md:col-span-3">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-white/70">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="md:col-span-2">
          <Reveal delay={0.15}>
            <div className="grid gap-4">
              {about.stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl px-6 py-5">
                  <div className="bg-gradient-to-r from-glow-violet to-glow-cyan bg-clip-text text-3xl font-bold text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
