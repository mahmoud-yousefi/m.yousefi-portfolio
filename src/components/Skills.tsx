import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../content/skills';
import { tr } from '../lib/lang';

export default function Skills() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [filter, setFilter] = useState<string>('all');

  const groups = useMemo(
    () => (filter === 'all' ? skillGroups : skillGroups.filter((group) => group.key === filter)),
    [filter],
  );

  const total = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading index="03" kicker={t('skills.kicker')} title={t('skills.title')} lead={t('skills.lead')} />

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
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
              <span className="ms-1.5 font-mono text-[10px] text-muted">{total}</span>
            </button>
            {skillGroups.map((group) => {
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

        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <div key={group.key}>
              <Reveal>
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-bold text-ink">{t(`skills.filters.${group.key}`)}</h3>
                  <span className="h-px flex-1 bg-line" />
                  <span className="font-mono text-[10px] text-muted">{group.skills.length}</span>
                </div>
              </Reveal>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Reveal key={`${group.key}-${skill.name}`} delay={index * 40}>
                      <article
                        className="card group h-full p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
                        title={t(`skills.levels.${skill.level}`)}
                      >
                        <div className="flex items-start justify-between">
                          <Icon
                            className="h-6 w-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                            style={{ color: skill.color }}
                          />
                          {skill.isNew && (
                            <span className="rounded-full bg-lime/15 px-1.5 py-0.5 text-[9px] font-bold text-lime">
                              {t('ui.newBadge')}
                            </span>
                          )}
                        </div>

                        <h4 className="mt-3 text-[13px] font-bold leading-tight text-ink">{skill.name}</h4>
                        <p className="mt-1.5 min-h-[2.5rem] text-[11px] leading-5 text-muted">
                          {tr(skill.hint, lang)}
                        </p>

                        <div className="mt-3 flex items-center gap-1" aria-hidden="true">
                          {[1, 2, 3, 4, 5].map((step) => (
                            <span
                              key={step}
                              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                                step <= skill.level ? 'bg-gradient-to-r from-accent to-aqua' : 'bg-line'
                              }`}
                            />
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-xs text-muted">{t('skills.note')}</p>
        </Reveal>
      </div>
    </section>
  );
}
