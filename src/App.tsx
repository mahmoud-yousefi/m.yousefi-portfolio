import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Academy from './components/Academy';
import Projects from './components/Projects';
import Process from './components/Process';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

export default function App() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const initial: Theme = saved ?? 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  useEffect(() => {
    const lang = i18n.language === 'en' ? 'en' : 'fa';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <div className={`min-h-screen ${i18n.language === 'en' ? 'font-sans' : 'font-fa'}`}>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {i18n.t('ui.skipToContent')}
      </a>

      <Background />
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="content">
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Skills />
        <Academy />
        <Projects />
        <Process />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
