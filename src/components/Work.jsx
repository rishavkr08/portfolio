import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { experience, projects } from '../data/content';

function Timeline() {
  return (
    <div className="relative mt-4 border-l border-white/10 pl-8">
      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 0.1} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-glow-violet to-glow-cyan ring-4 ring-ink" />
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h4 className="text-lg font-semibold text-white">{job.role}</h4>
            <span className="font-mono text-xs text-white/45">{job.period}</span>
          </div>
          <p className="text-glow-cyan/90">{job.company}</p>
          <ul className="mt-3 space-y-1.5">
            {job.points.map((pt, j) => (
              <li key={j} className="flex gap-2 text-sm text-white/60">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                {pt}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08}>
          <TiltCard className="h-full">
            <a
              href={p.link}
              className="glass flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white">{p.name}</h4>
                <span className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-white/55"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="03" kicker="Where I've been" title="Experience & projects" />
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <h3 className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-white/40">
            Experience
          </h3>
          <Timeline />
        </div>
        <div>
          <h3 className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-white/40">
            Selected projects
          </h3>
          <Projects />
        </div>
      </div>
    </section>
  );
}
