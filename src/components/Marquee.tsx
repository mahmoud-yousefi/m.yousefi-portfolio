const techs = [
  'React',
  'TypeScript',
  'Zustand',
  'Next.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'OpenLayers',
  'MapLibre',
  'TailwindCSS',
  'Cypress',
  'D3.js',
  'FastAPI',
  'Django',
  'Prisma',
  'Git',
  'Ant Design',
  'Apache NiFi',
];

export default function Marquee() {
  return (
    <div className="marquee-group relative border-y border-line/70 bg-surface/30 py-4">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex w-max shrink-0 items-center gap-10 pe-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-10" aria-hidden={copy === 1}>
              {techs.map((tech) => (
                <span key={`${copy}-${tech}`} className="flex items-center gap-10">
                  <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-ink">
                    {tech}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
