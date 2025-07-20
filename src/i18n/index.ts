import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  header: {
    title: 'Mahmoud Yousefi',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    resume: 'Resume',
    contact: 'Contact',
    blog: 'Blog',
    more: 'More',
  },
  about: {
    title: 'About Me',
    paragraph1:
      "I'm Mahmoud Yousefi, a passionate Full-Stack Developer with a strong background in Computer Science, currently pursuing a Master's degree in Algorithms and Theory of Computation at Shahed University, Tehran, Iran. I specialize in building modern, responsive web applications using technologies like React, TypeScript, Node.js, and GIS tools such as OpenLayers and Maplibre.",
    paragraph2:
      "My journey in tech began with a Bachelor’s degree in Computer Science from Shahed University (graduated 2024), where I developed a solid foundation in programming, data structures, and software engineering principles. During my undergraduate studies, I explored various programming paradigms and built projects that sparked my interest in creating user-friendly interfaces and scalable backend systems. This led me to specialize in full-stack development, with a focus on React for front-end and frameworks like Django and Nest.js for backend development.",
    paragraph3:
      "Currently, I’m pursuing a Master’s degree in Algorithms and Theory of Computation, which deepens my understanding of complex algorithms, optimization techniques, and computational theory. This academic pursuit enhances my ability to design efficient solutions for real-world problems, particularly in large-scale web applications and GIS-based systems. My coursework includes advanced topics like graph theory, computational complexity, and algorithm design, which I apply to optimize code and improve system performance.",
    paragraph4:
      "Professionally, I’ve worked as a Front-End Developer at Hoshan Kavosh Borna, where I designed intuitive UIs for enterprise systems like the Bizagi workflow engine and customized open-source tools like MapStore2. I thrive in collaborative environments, adhering to SOLID principles and leveraging tools like Git, Docker, and Cypress for testing to deliver high-quality code.",
    paragraph5:
      "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects on GitHub, or diving into a good book on algorithms or software design. I’m fluent in Persian and have upper-intermediate proficiency in English, enabling me to communicate effectively in diverse teams.",
  },
  theme: {
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
  },
  language: {
    switchToPersian: 'Switch to Persian',
    switchToEnglish: 'Switch to English',
  },
};

// Persian translations
const faTranslations = {
  header: {
    title: 'محمود یوسفی',
    home: 'خانه',
    about: 'درباره',
    skills: 'مهارت‌ها',
    projects: 'پروژه‌ها',
    resume: 'رزومه',
    contact: 'تماس',
    blog: 'بلاگ',
    more: 'بیشتر',
  },
  about: {
    title: 'درباره من',
    paragraph1:
      'من محمود یوسفی، یک توسعه‌دهنده فول‌استک پرشور با پیشینه قوی در علوم کامپیوتر هستم و در حال حاضر در حال تحصیل در مقطع کارشناسی ارشد الگوریتم‌ها و نظریه محاسبات در دانشگاه شاهد، تهران، ایران هستم. من در ساخت برنامه‌های وب مدرن و پاسخ‌گو با استفاده از فناوری‌هایی مانند React، TypeScript، Node.js و ابزارهای GIS مانند OpenLayers و Maplibre تخصص دارم.',
    paragraph2:
      'سفر من در فناوری با مدرک کارشناسی در علوم کامپیوتر از دانشگاه شاهد (فارغ‌التحصیل ۱۴۰۳) آغاز شد، جایی که پایه‌ای محکم در برنامه‌نویسی، ساختارهای داده و اصول مهندسی نرم‌افزار کسب کردم. در طول تحصیلات کارشناسی، پارادایم‌های مختلف برنامه‌نویسی را کاوش کردم و پروژه‌هایی ساختم که علاقه‌ام را به ایجاد رابط‌های کاربری کاربرپسند و سیستم‌های بک‌اند مقیاس‌پذیر برانگیخت. این موضوع من را به تخصص در توسعه فول‌استک سوق داد، با تمرکز بر React برای فرانت‌اند و چارچوب‌هایی مانند Django و Nest.js برای توسعه بک‌اند.',
    paragraph3:
      'در حال حاضر، در حال تحصیل در مقطع کارشناسی ارشد الگوریتم‌ها و نظریه محاسبات هستم که درک من از الگوریتم‌های پیچیده، تکنیک‌های بهینه‌سازی و نظریه محاسباتی را عمیق‌تر می‌کند. این پیگیری تحصیلی توانایی من را در طراحی راه‌حل‌های کارآمد برای مشکلات دنیای واقعی، به‌ویژه در برنامه‌های وب در مقیاس بزرگ و سیستم‌های مبتنی بر GIS، تقویت می‌کند. دروس من شامل موضوعات پیشرفته‌ای مانند نظریه گراف، پیچیدگی محاسباتی و طراحی الگوریتم است که برای بهینه‌سازی کد و بهبود عملکرد سیستم به کار می‌برم.',
    paragraph4:
      'از نظر حرفه‌ای، به‌عنوان توسعه‌دهنده فرانت‌اند در شرکت هوشان کاوش برنا کار کرده‌ام، جایی که رابط‌های کاربری بصری برای سیستم‌های سازمانی مانند موتور گردش کار Bizagi طراحی کردم و ابزارهای متن‌باز مانند MapStore2 را سفارشی‌سازی کردم. من در محیط‌های همکاری‌محور رشد می‌کنم، به اصول SOLID پایبندم و از ابزارهایی مانند Git، Docker و Cypress برای تست استفاده می‌کنم تا کد باکیفیتی ارائه دهم.',
    paragraph5:
      'وقتی کدنویسی نمی‌کنم، از کاوش فناوری‌های جدید، مشارکت در پروژه‌های متن‌باز در GitHub یا مطالعه کتاب‌های خوب در زمینه الگوریتم‌ها یا طراحی نرم‌افزار لذت می‌برم. من به زبان پارسی مسلط هستم و تسلط متوسط رو به پیشرفته‌ای در زبان انگلیسی دارم که به من امکان می‌دهد در تیم‌های متنوع به‌طور مؤثری ارتباط برقرار کنم.',
  },
  theme: {
    switchToDark: 'تغییر به تم تیره',
    switchToLight: 'تغییر به تم روشن',
  },
  language: {
    switchToPersian: 'تغییر به پارسی',
    switchToEnglish: 'تغییر به انگلیسی',
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fa: { translation: faTranslations },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React handles XSS
    },
  });

export default i18n;