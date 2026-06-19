import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { education, achievements } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="04" kicker="Foundation" title="Education & achievements" />
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-white/40">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.08}>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-semibold text-white">{e.school}</h4>
                    <span className="font-mono text-xs text-white/45">{e.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/60">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-white/40">
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((a, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="flex gap-3 text-white/70">
                  <span className="mt-1 select-none text-lg leading-none">🏆</span>
                  <span className="text-sm leading-relaxed">{a}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
