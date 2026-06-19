import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { experience } from '../data/content';

function ProjectCard({ project }) {
  return (
    <TiltCard className="h-full">
      <a
        href={project.link}
        className="glass flex h-full flex-col rounded-2xl p-5 transition-colors hover:border-white/20"
      >
        <div className="flex items-start justify-between gap-2">
          <h5 className="font-semibold text-white">{project.name}</h5>
          <span className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
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
  );
}

function CompanyBlock({ job, index }) {
  return (
    <Reveal delay={index * 0.06} className="relative pb-14 last:pb-0">
      {/* timeline node */}
      <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
        <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-glow-violet to-glow-cyan ring-4 ring-ink" />
      </span>

      {/* role + company header */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-xl font-semibold text-white">{job.role}</h4>
        <span className="font-mono text-xs text-white/45">{job.period}</span>
      </div>
      <p className="mt-0.5 font-medium text-glow-cyan/90">
        {job.company}
        {job.note && <span className="ml-2 text-sm font-normal text-white/40">· {job.note}</span>}
      </p>

      {/* highlights */}
      <ul className="mt-4 space-y-1.5">
        {job.points.map((pt, j) => (
          <li key={j} className="flex gap-2.5 text-sm text-white/60">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-glow-cyan/60" />
            {pt}
          </li>
        ))}
      </ul>

      {/* projects for this company */}
      {job.projects?.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            {job.projects.length > 1 ? 'Projects' : 'Project'}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {job.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      )}
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading index="03" kicker="Where I've been" title="Experience & projects" />
      <div className="relative border-l border-white/10 pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <CompanyBlock key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
