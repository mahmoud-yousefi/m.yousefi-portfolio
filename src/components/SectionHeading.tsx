import Reveal from './Reveal';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  lead?: string;
  align?: 'start' | 'center';
  index?: string;
}

export default function SectionHeading({ kicker, title, lead, align = 'start', index }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal>
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          {index && <span className="font-mono text-xs text-accent-soft">{index}</span>}
          <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
          <span className="mono-label text-accent-soft">{kicker}</span>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
