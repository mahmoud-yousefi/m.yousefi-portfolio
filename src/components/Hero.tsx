import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaDownload, FaLocationDot, FaReact, FaMap, FaBolt } from 'react-icons/fa6';
import Reveal from './Reveal';
import { profile, headlineStats } from '../content/profile';
import { num, tr } from '../lib/lang';
import portrait from '../assets/IMG_20250327_031322_411.webp';
import resumePdf from '../assets/CV-Mahmoud-Yousefi-EN.pdf';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isFa = lang !== 'en';
  const rotating = t('hero.rotating', { returnObjects: true }) as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % rotating.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [rotating.length]);

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-70" style={{ animation: 'pulse-ring 2.2s ease-out infinite' }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                {t('hero.badge')}
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                <span className="block text-sm font-medium text-muted sm:text-base">{t('hero.greeting')}</span>
                <span className="gradient-text mt-2 block">{tr(profile.name, lang)}</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold text-ink/90 sm:text-2xl">
                <span className="text-muted">{t('hero.rolePrefix')}</span>
                <span className="relative inline-flex h-8 items-center overflow-hidden sm:h-9">
                  <span key={index} className="animate-word bg-gradient-to-r from-accent-soft to-aqua bg-clip-text text-transparent">
                    {rotating[index]}
                  </span>
                </span>
              </p>
            </Reveal>

            <Reveal delay={210}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t('hero.description')}</p>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary group">
                  {t('hero.ctaProjects')}
                  <FaArrowRight
                    className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 ${isFa ? 'rotate-180' : ''}`}
                  />
                </a>
                <a href={resumePdf} download="Mahmoud-Yousefi-CV.pdf" className="btn-ghost group">
                  <FaDownload className="h-3.5 w-3.5 text-accent-soft transition-transform duration-300 group-hover:translate-y-0.5" />
                  {t('hero.ctaResume')}
                </a>
              </div>
            </Reveal>

            <Reveal delay={330}>
              <p className="mt-5 flex items-center gap-2 text-xs text-muted">
                <FaLocationDot className="h-3.5 w-3.5 text-accent-soft" />
                {tr(profile.location, lang)}
                <span className="text-line">|</span>
                {t('hero.availability')}
              </p>
            </Reveal>

            <Reveal delay={390}>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
                {headlineStats.map((stat) => (
                  <div key={stat.key}>
                    <dt className="order-2 mt-1 text-[11px] leading-tight text-muted">{t(`hero.stats.${stat.key}`)}</dt>
                    <dd className="font-mono text-2xl font-bold text-ink">
                      {num(stat.value, lang)}
                      <span className="text-accent-soft">{stat.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/25 via-transparent to-aqua/25 blur-2xl" />
              <div className="absolute inset-2 animate-spin-slow rounded-full border border-dashed border-line/80" />
              <div
                className="absolute inset-8 rounded-full border border-accent/20"
                style={{ animation: 'spin-slow 40s linear infinite reverse' }}
              >
                <span className="absolute -top-1 start-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-aqua shadow-[0_0_16px_4px_rgba(34,211,238,0.6)]" />
              </div>

              <div className="absolute inset-[16%] overflow-hidden rounded-full border border-line shadow-2xl">
                <img
                  src={portrait}
                  alt={tr(profile.name, lang)}
                  className="h-full w-full object-cover"
                  width={420}
                  height={420}
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-2 start-0 animate-float rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-card backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <FaReact className="h-4 w-4 text-[#61DAFB]" />
                  React · TS
                </div>
              </div>
              <div
                className="absolute -top-1 end-0 animate-float rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-card backdrop-blur"
                style={{ animationDelay: '-2.5s' }}
              >
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <FaMap className="h-4 w-4 text-aqua" />
                  GIS · OpenLayers
                </div>
              </div>
              <div
                className="absolute bottom-8 end-[-6%] animate-float rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-card backdrop-blur"
                style={{ animationDelay: '-4.5s' }}
              >
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <FaBolt className="h-4 w-4 text-[#F59E0B]" />
                  Zustand
                  <span className="rounded-full bg-lime/15 px-1.5 py-0.5 text-[9px] font-bold text-lime">
                    {t('ui.newBadge')}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={450} className="mt-16 hidden items-center gap-3 text-muted lg:flex">
          <span className="mono-label">{t('hero.scroll')}</span>
          <span className="relative h-px w-24 overflow-hidden bg-line">
            <span className="absolute inset-y-0 start-0 w-8 animate-marquee bg-gradient-to-r from-transparent via-accent to-transparent" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
