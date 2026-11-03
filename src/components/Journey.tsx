import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaGraduationCap, FaFlag } from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { journey } from '../content/journey';
import { tr, trList } from '../lib/lang';

const typeStyles = {
  work: { icon: FaBriefcase, ring: 'border-accent/50 text-accent-soft', dot: 'bg-accent' },
  education: { icon: FaGraduationCap, ring: 'border-aqua/50 text-aqua', dot: 'bg-aqua' },
  milestone: { icon: FaFlag, ring: 'border-lime/50 text-lime', dot: 'bg-lime' },
} as const;

export default function Journey() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section id="journey" className="section">
      <div className="container-x">
        <SectionHeading index="02" kicker={t('journey.kicker')} title={t('journey.title')} lead={t('journey.lead')} />

        <div className="relative mt-14">
          <span
            className="absolute bottom-4 start-[13px] top-4 w-px bg-gradient-to-b from-accent/60 via-line to-transparent"
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {journey.map((item, index) => {
              const style = typeStyles[item.type];
              const Icon = style.icon;
              return (
                <Reveal as="li" key={item.title.en} delay={index * 70} className="relative ps-11">
                  <span
                    className={`absolute start-0 top-1 grid h-7 w-7 place-items-center rounded-full border bg-bg ${style.ring}`}
                  >
                    <Icon className="h-3 w-3" />
                  </span>

                  <div className="card p-5 transition-all duration-500 hover:border-accent/40 hover:bg-surface">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-[11px] font-medium text-accent-soft">{tr(item.period, lang)}</span>
                      <span className="h-1 w-1 rounded-full bg-line" />
                      <span className="text-[10px] uppercase tracking-wider text-muted">{t(`journey.types.${item.type}`)}</span>
                    </div>

                    <h3 className="mt-2 text-base font-bold text-ink sm:text-lg">{tr(item.title, lang)}</h3>
                    <p className="mt-0.5 text-sm text-muted">{tr(item.org, lang)}</p>
                    <p className="mt-3 text-[13px] leading-7 text-muted">{tr(item.description, lang)}</p>

                    <ul className="mt-3 space-y-1.5">
                      {trList(item.points, lang).map((point) => (
                        <li key={point} className="flex gap-2 text-[13px] leading-6 text-ink/80">
                          <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${style.dot}`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
