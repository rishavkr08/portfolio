import Reveal from './Reveal';

export default function SectionHeading({ index, title, kicker }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 font-mono text-sm text-glow-cyan/80">
        <span>{index}</span>
        <span className="h-px w-10 bg-glow-cyan/40" />
        <span className="uppercase tracking-[0.2em] text-white/40">{kicker}</span>
      </div>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}
