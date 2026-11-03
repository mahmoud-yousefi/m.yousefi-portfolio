import type { PreviewVariant } from '../content/projects';

interface PreviewProps {
  variant: PreviewVariant;
  accent: string;
  label: string;
}

const bar = (accent: string, width: string, opacity = 0.55, height = 'h-2') => (
  <div
    className={`${height} rounded-full`}
    style={{ width, background: accent, opacity }}
  />
);

function ShopMock({ accent }: { accent: string }) {
  return (
    <div className="space-y-3 p-3">
      <div className="flex items-center justify-between">
        {bar(accent, '2.5rem', 0.9, 'h-2')}
        <div className="flex gap-1.5">
          {bar(accent, '1.25rem', 0.35)}
          {bar(accent, '1.25rem', 0.35)}
          {bar(accent, '1.75rem', 0.75)}
        </div>
      </div>
      <div className="rounded-lg p-3" style={{ background: `linear-gradient(120deg, ${accent}40, transparent)` }}>
        <div className="space-y-2">
          {bar(accent, '70%', 0.85, 'h-3')}
          {bar(accent, '45%', 0.5)}
          <div className="h-5 w-16 rounded-full" style={{ background: accent, opacity: 0.9 }} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5 rounded-lg border border-white/5 p-1.5">
            <div className="h-10 rounded-md" style={{ background: `${accent}2e` }} />
            {bar(accent, '80%', 0.6, 'h-1.5')}
            {bar(accent, '40%', 0.35, 'h-1.5')}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5 rounded-lg border border-white/5 p-1.5">
            <div className="h-10 rounded-md" style={{ background: `${accent}1f` }} />
            {bar(accent, '70%', 0.5, 'h-1.5')}
            {bar(accent, '45%', 0.3, 'h-1.5')}
          </div>
        ))}
      </div>
    </div>
  );
}

function AuthMock({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col items-center gap-3 p-4">
      <div className="mt-2 grid h-9 w-9 place-items-center rounded-xl" style={{ background: `${accent}33` }}>
        <div className="h-4 w-4 rounded-md" style={{ background: accent }} />
      </div>
      {bar(accent, '55%', 0.8, 'h-2.5')}
      <div className="w-full max-w-[12rem] space-y-2">
        {[0, 1].map((i) => (
          <div key={i} className="space-y-1 rounded-lg border border-white/10 p-2">
            {bar(accent, '35%', 0.35, 'h-1')}
            {bar(accent, i === 0 ? '65%' : '50%', 0.25, 'h-1.5')}
          </div>
        ))}
        <div className="h-6 rounded-lg" style={{ background: accent, opacity: 0.9 }} />
        {bar(accent, '45%', 0.3, 'h-1.5')}
      </div>
      <div className="mt-2 flex w-full max-w-[12rem] items-center gap-2 rounded-lg border border-white/10 p-2">
        <div className="h-4 w-4 rounded-full" style={{ background: `${accent}55` }} />
        {bar(accent, '60%', 0.3, 'h-1.5')}
      </div>
    </div>
  );
}

function GraphMock({ accent }: { accent: string }) {
  const nodes = [
    [30, 30],
    [95, 22],
    [60, 70],
    [120, 78],
    [22, 92],
    [150, 42],
  ];
  return (
    <svg viewBox="0 0 170 120" className="h-full w-full p-2" aria-hidden="true">
      {nodes.map(([x, y], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => (
          <line
            key={`${i}-${j}`}
            x1={x}
            y1={y}
            x2={x2}
            y2={y2}
            stroke={accent}
            strokeWidth="0.6"
            opacity={0.18 + ((i + j) % 3) * 0.12}
          />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 6 : 4} fill={accent} opacity={0.55 + i * 0.07} />
      ))}
      <circle cx={60} cy={70} r="10" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.5" />
      <circle cx={60} cy={70} r="16" fill="none" stroke={accent} strokeWidth="0.4" opacity="0.22" />
    </svg>
  );
}

function MapMock({ accent }: { accent: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(${accent}22 1px, transparent 1px), linear-gradient(90deg, ${accent}22 1px, transparent 1px)`,
          backgroundSize: '18px 18px',
        }}
      />
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 65% 40%, ${accent}33, transparent 60%)` }} />
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full">
        <path d="M10 95 C 60 80, 60 40, 110 45 S 170 20, 195 30" fill="none" stroke={accent} strokeWidth="2" opacity="0.8" />
        <path d="M10 95 C 60 80, 60 40, 110 45 S 170 20, 195 30" fill="none" stroke={accent} strokeWidth="6" opacity="0.15" />
        <ellipse cx="110" cy="45" rx="34" ry="26" fill={accent} opacity="0.1" stroke={accent} strokeWidth="0.6" />
      </svg>
      {[
        [110, 45],
        [62, 70],
        [160, 27],
      ].map(([x, y], i) => (
        <span
          key={i}
          className="absolute grid h-4 w-4 place-items-center rounded-full border"
          style={{
            left: `${(x / 200) * 100}%`,
            top: `${(y / 120) * 100}%`,
            borderColor: accent,
            background: `${accent}33`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
        </span>
      ))}
    </div>
  );
}

function DashboardMock({ accent }: { accent: string }) {
  return (
    <div className="space-y-2.5 p-3">
      <div className="flex items-center justify-between">
        {bar(accent, '4rem', 0.8, 'h-2')}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-4 w-10 rounded-md" style={{ background: `${accent}2b` }} />
          ))}
        </div>
      </div>
      <div className="flex items-end gap-1.5 rounded-lg border border-white/5 p-2">
        {[35, 55, 42, 70, 60, 85, 48, 72].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h * 0.35}px`, background: accent, opacity: 0.3 + i * 0.06 }}
          />
        ))}
      </div>
      <div className="overflow-hidden rounded-lg border border-white/5">
        <div className="flex gap-2 border-b border-white/5 px-2 py-1.5" style={{ background: `${accent}14` }}>
          {bar(accent, '20%', 0.4, 'h-1.5')}
          {bar(accent, '30%', 0.4, 'h-1.5')}
          {bar(accent, '15%', 0.4, 'h-1.5')}
        </div>
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} className="flex items-center gap-2 px-2 py-1.5">
            <div className="h-3 w-3 rounded-full" style={{ background: `${accent}55` }} />
            {bar(accent, '34%', 0.28, 'h-1.5')}
            {bar(accent, '22%', 0.2, 'h-1.5')}
            {bar(accent, '14%', 0.35, 'h-1.5')}
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiMock({ accent }: { accent: string }) {
  const lines = ['72%', '54%', '86%', '40%', '63%', '30%', '78%', '48%', '66%', '36%'];
  return (
    <div className="space-y-2 p-3 font-mono">
      <div className="flex items-center gap-2">
        <span className="rounded px-1.5 py-0.5 text-[9px] font-bold" style={{ background: `${accent}33`, color: accent }}>
          200 OK
        </span>
        <span className="text-[9px] text-white/40">GET /api/v1/projects</span>
      </div>
      <div className="space-y-1.5 rounded-lg border border-white/5 p-2">
        {lines.map((width, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-2 text-end text-[8px] text-white/20">{i + 1}</span>
            {bar(accent, width, 0.2 + ((i * 7) % 5) * 0.09, 'h-1.5')}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {['201', '204', '401'].map((code) => (
          <span key={code} className="rounded px-1.5 py-0.5 text-[8px]" style={{ background: `${accent}1f`, color: `${accent}bb` }}>
            {code}
          </span>
        ))}
      </div>
    </div>
  );
}

function PortfolioMock({ accent }: { accent: string }) {
  return (
    <div className="space-y-3 p-3">
      <div className="flex items-center justify-between">
        <div className="h-4 w-4 rounded-md" style={{ background: accent, opacity: 0.85 }} />
        <div className="flex gap-1.5">
          {bar(accent, '1rem', 0.3, 'h-1')}
          {bar(accent, '1rem', 0.3, 'h-1')}
          {bar(accent, '1rem', 0.3, 'h-1')}
        </div>
      </div>
      <div className="space-y-2 pt-2">
        {bar(accent, '78%', 0.85, 'h-3.5')}
        {bar(accent, '58%', 0.6, 'h-3.5')}
        {bar(accent, '42%', 0.3)}
      </div>
      <div className="flex gap-1.5 pt-1">
        <div className="h-5 w-14 rounded-full" style={{ background: accent, opacity: 0.9 }} />
        <div className="h-5 w-14 rounded-full border border-white/15" />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5 rounded-lg border border-white/5 p-1.5">
            <div className="h-8 rounded-md" style={{ background: `${accent}26` }} />
            {bar(accent, '75%', 0.45, 'h-1.5')}
            {bar(accent, '50%', 0.25, 'h-1.5')}
          </div>
        ))}
      </div>
      <div className="space-y-2 rounded-lg border border-white/5 p-2">
        {bar(accent, '100%', 0.2, 'h-1.5')}
        {bar(accent, '88%', 0.2, 'h-1.5')}
        {bar(accent, '92%', 0.2, 'h-1.5')}
        {bar(accent, '70%', 0.2, 'h-1.5')}
      </div>
    </div>
  );
}

export default function ProjectPreview({ variant, accent, label }: PreviewProps) {
  const body = {
    shop: <ShopMock accent={accent} />,
    auth: <AuthMock accent={accent} />,
    graph: <GraphMock accent={accent} />,
    map: <MapMock accent={accent} />,
    dashboard: <DashboardMock accent={accent} />,
    api: <ApiMock accent={accent} />,
    portfolio: <PortfolioMock accent={accent} />,
  }[variant];

  return (
    <div className="relative overflow-hidden rounded-t-2xl border-b border-line bg-[#070a12]">
      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
        </span>
        <span
          dir="ltr"
          className="mx-auto max-w-[10rem] truncate rounded-full bg-white/5 px-2 py-0.5 font-mono text-[9px] text-white/35"
        >
          {label}
        </span>
        <span className="h-2 w-6 rounded-full bg-white/5" />
      </div>

      <div className="relative h-44 overflow-hidden">
        <div className="animate-preview">
          {body}
          <div className="h-6" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#070a12] to-transparent" />
      </div>
    </div>
  );
}
