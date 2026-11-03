import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaLightbulb, FaTerminal, FaClock } from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { articles, roadmap } from '../content/academy';
import { skillGroups } from '../content/skills';
import { num, tr, trList } from '../lib/lang';

export default function Academy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [filter, setFilter] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const list = useMemo(
    () => (filter === 'all' ? articles : articles.filter((article) => article.category === filter)),
    [filter],
  );

  const categories = skillGroups.filter((group) =>
    articles.some((article) => article.category === group.key),
  );

  return (
    <section id="academy" className="section">
      <div className="container-x">
        <SectionHeading
          index="04"
          kicker={t('academy.kicker')}
          title={t('academy.title')}
          lead={t('academy.lead')}
        />

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                filter === 'all'
                  ? 'border-accent/60 bg-accent/15 text-ink'
                  : 'border-line bg-surface/60 text-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {t('skills.filters.all')}
              <span className="ms-1.5 font-mono text-[10px] text-muted">{articles.length}</span>
            </button>
            {categories.map((group) => {
              const Icon = group.icon;
              const isActive = filter === group.key;
              return (
                <button
                  key={group.key}
                  type="button"
                  onClick={() => setFilter(group.key)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                    isActive
                      ? 'border-accent/60 bg-accent/15 text-ink'
                      : 'border-line bg-surface/60 text-muted hover:border-accent/40 hover:text-ink'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  {t(`skills.filters.${group.key}`)}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {list.map((article, index) => {
            const Icon = article.icon;
            const open = openId === article.id;
            const concepts = trList(article.concepts, lang);
            return (
              <Reveal key={article.id} delay={(index % 2) * 60}>
                <article className="card group flex h-full flex-col p-5 transition-all duration-500 hover:border-accent/40 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-raised/60">
                      <Icon className="h-5 w-5 text-accent-soft" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-ink">{article.title}</h3>
                        <span className="chip !px-2 !py-0.5 !text-[10px]">
                          {t(`academy.levels.${article.level}`)}
                        </span>
                      </div>
                      <p className="mt-2 text-[13px] leading-6 text-muted">{tr(article.tagline, lang)}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-line/70 bg-raised/40 p-3.5">
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold text-accent-soft">
                      <FaLightbulb className="h-3 w-3" />
                      {t('academy.why')}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-6 text-muted">{tr(article.why, lang)}</p>
                  </div>

                  <p className="mt-4 text-[11px] font-semibold text-ink/80">{t('academy.concepts')}</p>
                  <ul className="mt-2 space-y-1.5">
                    {concepts.map((concept) => (
                      <li key={concept} className="flex gap-2 text-[12.5px] leading-6 text-muted">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {concept}
                      </li>
                    ))}
                  </ul>

                  <div
                    aria-hidden={!open}
                    className={`grid transition-all duration-500 ease-smooth ${open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[12.5px] leading-7 text-muted">{tr(article.detail, lang)}</p>

                      <div className="mt-3 overflow-hidden rounded-xl border border-line bg-[#0b1020]">
                        <div className="flex items-center justify-between border-b border-white/5 px-3 py-1.5">
                          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/40">
                            <FaTerminal className="h-3 w-3" />
                            {article.snippet.language}
                          </span>
                          <span className="flex gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          </span>
                        </div>
                        <pre dir="ltr" className="overflow-x-auto p-3.5 text-[11.5px] leading-6 text-[#c7d2fe]">
                          <code className="font-mono">{article.snippet.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/70 pt-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {article.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-raised px-1.5 py-0.5 text-[10px] text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-[11px] text-muted">
                      <span className="inline-flex items-center gap-1">
                        <FaClock className="h-2.5 w-2.5" />
                        {num(article.minutes, lang)}
                      </span>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : article.id)}
                        aria-expanded={open}
                        className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 font-medium text-ink transition hover:border-accent/50 hover:text-accent-soft"
                      >
                        {open ? t('academy.collapse') : t('academy.detail')}
                        <FaChevronDown className={`h-2.5 w-2.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Learning roadmap */}
        <div className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-ink sm:text-2xl">{t('academy.roadmapTitle')}</h3>
                <p className="mt-1.5 max-w-xl text-sm text-muted">{t('academy.roadmapLead')}</p>
              </div>
              <span className="mono-label hidden sm:block">PATH · 4</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-5">
                  <span className="absolute -top-3 end-2 font-mono text-5xl font-bold text-line/70">{step.step}</span>
                  <h4 className="relative text-sm font-bold text-ink">{tr(step.title, lang)}</h4>
                  <p className="relative mt-2 text-[12.5px] leading-6 text-muted">{tr(step.body, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
