import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaArrowUpRightFromSquare, FaCodeBranch } from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectPreview from './ProjectPreview';
import { projects, type ProjectCategory } from '../content/projects';
import { tr } from '../lib/lang';

const filters: (ProjectCategory | 'all')[] = ['all', 'product', 'gis', 'backend', 'experiment'];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const list = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          index="05"
          kicker={t('projects.kicker')}
          title={t('projects.title')}
          lead={t('projects.lead')}
        />

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((key) => {
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                    isActive
                      ? 'border-accent/60 bg-accent/15 text-ink'
                      : 'border-line bg-surface/60 text-muted hover:border-accent/40 hover:text-ink'
                  }`}
                >
                  {t(`projects.filters.${key}`)}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 60}>
              <article className="card group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                <ProjectPreview
                  variant={project.preview}
                  accent={project.accent}
                  label={(project.live ?? project.code ?? '').replace('https://', '')}
                />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-ink">{tr(project.title, lang)}</h3>
                      <p className="mt-1 text-[13px] text-accent-soft">{tr(project.tagline, lang)}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-muted">{project.year}</span>
                  </div>

                  <p className="mt-3 text-[13px] leading-7 text-muted">{tr(project.description, lang)}</p>

                  <div className="mt-3 flex items-start gap-2 rounded-lg border border-line/70 bg-raised/40 p-2.5">
                    <FaCodeBranch className="mt-0.5 h-3 w-3 shrink-0 text-accent-soft" />
                    <p className="text-[11.5px] leading-6 text-muted">
                      <span className="font-semibold text-ink/80">{t('projects.highlight')}: </span>
                      {tr(project.highlight, lang)}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-raised px-1.5 py-0.5 text-[10px] font-medium text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition hover:text-accent-soft"
                      >
                        <FaArrowUpRightFromSquare className="h-3 w-3" />
                        {t('projects.live')}
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-ink"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                        {t('projects.code')}
                      </a>
                    )}
                    <span className="ms-auto text-[10px] text-muted/70">{tr(project.role, lang)}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
