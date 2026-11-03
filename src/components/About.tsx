import { useTranslation } from 'react-i18next';
import { FaLocationDot, FaBriefcase, FaGraduationCap, FaLanguage, FaLayerGroup, FaCircleCheck } from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { principles, profile, aboutStory } from '../content/profile';
import { trList, tr } from '../lib/lang';

const factIcons = [FaLocationDot, FaBriefcase, FaGraduationCap, FaLanguage, FaLayerGroup, FaCircleCheck];

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const story = trList(aboutStory, lang);

  const facts = [
    { key: 'location', value: t('about.facts.location') },
    { key: 'role', value: t('about.facts.role') },
    { key: 'education', value: t('about.facts.education') },
    { key: 'languages', value: t('about.facts.languages') },
    { key: 'focus', value: t('about.facts.focus') },
    { key: 'status', value: t('about.facts.status') },
  ];

  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading index="01" kicker={t('about.kicker')} title={t('about.title')} lead={t('about.lead')} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div className="space-y-5">
            {story.map((paragraph, index) => (
              <Reveal key={index} delay={index * 60}>
                <p className="text-[15px] leading-8 text-muted sm:text-base">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <p className="mt-6 border-s-2 border-accent/60 ps-4 text-sm leading-7 text-ink/80">
                {lang === 'en'
                  ? 'I care about the parts users never notice until they break: loading states, empty states, and the transitions between them.'
                  : 'چیزهایی برایم مهم‌اند که کاربر تا وقتی خراب نشوند متوجهشان نمی‌شود: حالت بارگذاری، حالت خالی و رفت‌وآمد بین این دو.'}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="card sticky top-24 p-6">
              <h3 className="mono-label">{t('about.factsTitle')}</h3>
              <ul className="mt-5 space-y-4">
                {facts.map((fact, index) => {
                  const Icon = factIcons[index];
                  return (
                    <li key={fact.key} className="flex gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-muted">{t(`about.factLabels.${fact.key}`)}</p>
                        <p className="mt-0.5 text-sm font-medium leading-6 text-ink">{fact.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
                <span className="h-2 w-2 rounded-full bg-lime" />
                <a href={`mailto:${profile.email}`} className="link-underline text-xs font-medium text-muted hover:text-ink">
                  {profile.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mono-label">{t('about.principlesTitle')}</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <Reveal key={item.title.en} delay={index * 70}>
                <div className="card group h-full p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                  <span className="font-mono text-[11px] text-accent-soft">{String(index + 1).padStart(2, '0')}</span>
                  <h4 className="mt-3 text-sm font-bold text-ink">{tr(item.title, lang)}</h4>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{tr(item.body, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
