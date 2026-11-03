import { useTranslation } from 'react-i18next';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa6';
import { profile, socials, sections, type SocialKey } from '../content/profile';
import { num, tr } from '../lib/lang';

const icons: Record<SocialKey, typeof FaGithub> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

export default function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const links = sections.filter((id) => id !== 'home');

  return (
    <footer className="relative mt-10 border-t border-line bg-surface/30">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-aqua font-mono text-sm font-bold text-white">
                MY
              </span>
              <span className="text-sm font-bold text-ink">{tr(profile.name, i18n.language)}</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-7 text-muted">{t('footer.tagline')}</p>
            <a
              href={`mailto:${profile.email}`}
              dir="ltr"
              className="link-underline mt-3 inline-block text-xs text-muted hover:text-ink"
            >
              {profile.email}
            </a>
          </div>

          <nav aria-label={t('footer.quickLinks')}>
            <p className="mono-label">{t('footer.quickLinks')}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {links.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-[12.5px] text-muted transition hover:text-ink">
                    {t(`nav.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label">{t('nav.contact')}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = icons[social.key];
                return (
                  <li key={social.key}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 font-mono text-[10px] leading-5 text-muted/70">{t('footer.builtWith')}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-[11px] text-muted">
            © {num(year, i18n.language)} {tr(profile.name, i18n.language)} — {t('footer.rights')}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-muted transition hover:border-accent/50 hover:text-ink"
          >
            <FaArrowUp className="h-2.5 w-2.5" />
            {t('footer.backToTop')}
          </a>
        </div>
      </div>
    </footer>
  );
}
