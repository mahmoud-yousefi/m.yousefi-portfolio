import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
} from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile, socials, type SocialKey } from '../content/profile';
import { tr } from '../lib/lang';

const icons: Record<SocialKey, typeof FaGithub> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const availability = t('contact.availability', { returnObjects: true }) as string[];

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading index="08" kicker={t('contact.kicker')} title={t('contact.title')} lead={t('contact.lead')} />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card relative overflow-hidden p-6 sm:p-8">
              <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

              <p className="mono-label">{t('contact.email')}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  dir="ltr"
                  className="link-underline break-all text-lg font-bold text-ink transition hover:text-accent-soft sm:text-xl"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition ${
                    copied
                      ? 'border-lime/50 bg-lime/10 text-lime'
                      : 'border-line bg-surface/60 text-muted hover:border-accent/50 hover:text-ink'
                  }`}
                >
                  {copied ? <FaCheck className="h-3 w-3" /> : <FaCopy className="h-3 w-3" />}
                  {copied ? t('contact.copied') : t('contact.copy')}
                </button>
              </div>

              <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-lime" />
                {t('contact.responseTime')}
              </p>

              <div className="mt-8 border-t border-line pt-6">
                <p className="mono-label">{t('contact.socials')}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {socials
                    .filter((social) => social.key !== 'email')
                    .map((social) => {
                      const Icon = icons[social.key];
                      return (
                        <a
                          key={social.key}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-line/70 bg-raised/30 px-3 py-2.5 transition hover:border-accent/40 hover:bg-raised/70"
                        >
                          <Icon className="h-4 w-4 text-accent-soft" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-xs font-semibold text-ink">{social.label}</span>
                            <span dir="ltr" className="block truncate text-[10px] text-muted">
                              {social.handle}
                            </span>
                          </span>
                          <FaArrowUpRightFromSquare className="h-2.5 w-2.5 text-muted/60 transition group-hover:text-ink" />
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card h-full p-6 sm:p-8">
              <p className="mono-label">{t('contact.availabilityTitle')}</p>
              <ul className="mt-5 space-y-3">
                {availability.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] leading-6 text-muted">
                    <FaCircleCheck className="mt-1 h-3 w-3 shrink-0 text-lime" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-line/70 bg-raised/40 p-3.5">
                <p className="text-[11px] font-semibold text-ink/80">{tr(profile.location, i18n.language)}</p>
                <p className="mt-1 font-mono text-[10px] text-muted">{profile.timezone}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
