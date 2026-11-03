import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { processSteps } from '../content/process';
import { tr } from '../lib/lang';

export default function Process() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section id="process" className="section">
      <div className="container-x">
        <SectionHeading index="06" kicker={t('process.kicker')} title={t('process.title')} lead={t('process.lead')} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={index * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-raised/70 text-accent-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-xs text-muted/60">{step.step}</span>
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-ink">{tr(step.title, lang)}</h3>
                  <p className="mt-2 text-[12.5px] leading-6 text-muted">{tr(step.body, lang)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
