import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon, FaBars, FaXmark } from 'react-icons/fa6';
import { profile, sections } from '../content/profile';
import { tr } from '../lib/lang';
import { useScrollProgress, useScrollSpy } from '../lib/hooks';

const navItems = sections.filter((id) => id !== 'home').map((id) => ({ id, key: `nav.${id}` }));

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const progressRef = useScrollProgress();

  useScrollSpy(sections as unknown as string[]);

  useEffect(() => {
    const onSection = (event: Event) => setActive((event as CustomEvent<string>).detail);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('sectionchange', onSection);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('sectionchange', onSection);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isFa = i18n.language !== 'en';
  const toggleLanguage = () => {
    const next = isFa ? 'en' : 'fa';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        ref={progressRef}
        className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent-soft to-aqua ${isFa ? 'origin-right' : 'origin-left'}`}
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-line/80 bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/65'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <a
            href="#home"
            className="group flex min-w-0 items-center gap-2.5"
            aria-label={t('nav.home')}
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-aqua font-mono text-sm font-bold text-white shadow-glow">
              MY
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-sm font-bold tracking-tight">{tr(profile.name, i18n.language)}</span>
              <span className="mt-1 hidden truncate text-[10px] font-medium tracking-wide text-muted sm:block">
                {t('hero.rolePrefix')} · Full-stack
              </span>
            </span>
          </a>

          <nav
            aria-label={t('nav.menu')}
            className="hidden items-center gap-1 rounded-full border border-line/70 bg-surface/50 p-1 backdrop-blur-md lg:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-raised text-ink shadow-sm'
                      : 'text-muted hover:bg-raised/60 hover:text-ink'
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('nav.language')}
              className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 font-mono text-[11px] font-bold text-muted transition hover:border-accent/50 hover:text-ink"
            >
              {isFa ? 'EN' : 'FA'}
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={t('nav.theme')}
              className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition hover:border-accent/50 hover:text-ink"
            >
              {theme === 'dark' ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t('nav.close') : t('nav.menu')}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition hover:border-accent/50 hover:text-ink lg:hidden"
            >
              {open ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'visible max-h-[80vh] opacity-100' : 'invisible pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label={t('nav.menu')} className="container-x grid gap-1 py-4">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                active === item.id ? 'bg-raised text-ink' : 'text-muted hover:bg-raised/60 hover:text-ink'
              }`}
            >
              <span>{t(item.key)}</span>
              <span className="font-mono text-[10px] text-muted/70">
                {String(i + 1).padStart(2, '0')}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
