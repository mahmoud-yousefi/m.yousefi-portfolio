import type { Bilingual, BilingualList } from '../lib/lang';

export const profile = {
  name: { fa: 'محمود یوسفی', en: 'Mahmoud Yousefi' } as Bilingual,
  initials: 'MY',
  role: { fa: 'توسعه‌دهندهٔ فول‌استک', en: 'Full-stack developer' } as Bilingual,
  email: 'mahmoudyousefics@gmail.com',
  location: { fa: 'تهران، ایران', en: 'Tehran, Iran' } as Bilingual,
  timezone: 'Asia/Tehran (GMT+3:30)',
};

export type SocialKey = 'github' | 'linkedin' | 'telegram' | 'whatsapp' | 'email';

export const socials: { key: SocialKey; label: string; handle: string; url: string }[] = [
  { key: 'github', label: 'GitHub', handle: 'mahmoud-yousefi', url: 'https://github.com/mahmoud-yousefi' },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: 'mahmood-yoosefi',
    url: 'https://www.linkedin.com/in/mahmood-yoosefi-1586a526b/',
  },
  { key: 'telegram', label: 'Telegram', handle: '@UsefiMf14', url: 'https://t.me/UsefiMf14' },
  { key: 'whatsapp', label: 'WhatsApp', handle: '+98 990 263 5947', url: 'https://wa.me/09902635947' },
  { key: 'email', label: 'Email', handle: 'mahmoudyousefics@gmail.com', url: 'mailto:mahmoudyousefics@gmail.com' },
];

export const headlineStats = [
  { key: 'years', value: 6, suffix: '+' },
  { key: 'projects', value: 15, suffix: '+' },
  { key: 'tech', value: 30, suffix: '+' },
  { key: 'degrees', value: 2, suffix: '' },
];

export const aboutStory: BilingualList = {
  fa: [
    'من محمود یوسفی هستم؛ توسعه‌دهندهٔ فول‌استک با تمرکز بر فرانت‌اند. مسیرم از دانشکدهٔ علوم کامپیوتر دانشگاه شاهد شروع شد و امروز در همان دانشگاه، کارشناسی ارشد الگوریتم‌ها و نظریهٔ محاسبات می‌خوانم. این ترکیب باعث شده هم به زیبایی و تجربهٔ کاربری فکر کنم و هم به پیچیدگی محاسباتی چیزی که می‌سازم.',
    'بیشتر کار حرفه‌ای من در سامانه‌های سازمانی گذشته است: رابط کاربری موتور گردش کار Bizagi، فرم‌های چندمرحله‌ای سازمانی، سفارشی‌سازی MapStore2 و اتصال به جریان‌های دادهٔ Apache NiFi. این پروژه‌ها یک ویژگی مشترک دارند: دادهٔ زیاد، قواعد پیچیده و کاربرانی که روزانه ساعت‌ها با آن کار می‌کنند — یعنی جایی که جزئیات کوچک، تفاوت بزرگی می‌سازند.',
    'در فرانت‌اند با React و TypeScript کار می‌کنم و برای وضعیت پیچیده از Redux Toolkit و برای حالت‌های سبک‌تر از Zustand استفاده می‌کنم. سمت سرور با NestJS، Django و FastAPI راحت‌ام و با PostgreSQL و MongoDB کار کرده‌ام. در حوزهٔ GIS، OpenLayers و MapLibre ابزار روزمرهٔ من هستند.',
    'چیزی که بیشتر از همه برایم اهمیت دارد، قابل‌اعتماد بودن است: کدی که شش ماه بعد هم بتوان تغییرش داد، رابطی که در حالت خطا هم آبرومند باشد و تحویلی که نیاز به توضیح دوباره نداشته باشد. اگر پروژه‌ای این ویژگی‌ها را داشته باشد، بقیهٔ چیزها روی آن ساخته می‌شود.',
  ],
  en: [
    "I'm Mahmoud Yousefi, a full-stack developer with a front-end focus. My path started in the computer science department at Shahed University, where I am now completing an MSc in Algorithms and Theory of Computation. That mix keeps me thinking about both user experience and the computational cost of what I build.",
    'Most of my professional work has been in enterprise systems: the UI for the Bizagi workflow engine, multi-step organisational forms, MapStore2 customisation and integration with Apache NiFi data flows. They share one trait: heavy data, complex rules and users who spend hours in them every day — the place where small details make a big difference.',
    'On the front end I work with React and TypeScript, reaching for Redux Toolkit when state is complex and Zustand when it is light. On the server I am comfortable with NestJS, Django and FastAPI, and I have worked with PostgreSQL and MongoDB. For GIS, OpenLayers and MapLibre are my daily tools.',
    'What matters most to me is reliability: code that can still be changed six months later, an interface that stays presentable in its error states, and a handover that needs no second explanation. When a project has that, everything else can be built on top of it.',
  ],
};

export const principles: { title: Bilingual; body: Bilingual }[] = [
  {
    title: { fa: 'کد قابل نگه‌داری', en: 'Maintainable code' },
    body: {
      fa: 'اصول SOLID و مرزبندی روشن ماژول‌ها؛ کدی که شش ماه بعد هم قابل خواندن باشد.',
      en: 'SOLID principles and clear module boundaries — code that still reads well six months later.',
    },
  },
  {
    title: { fa: 'کیفیت در لبه‌ها', en: 'Quality at the edges' },
    body: {
      fa: 'حالت‌های خالی، خطا، بارگذاری و موبایل به‌اندازهٔ حالت خوش‌بینانه جدی گرفته می‌شوند.',
      en: 'Empty, error, loading and mobile states get as much attention as the happy path.',
    },
  },
  {
    title: { fa: 'تصمیم مکتوب', en: 'Written decisions' },
    body: {
      fa: 'هر انتخاب فنی یک دلیل کوتاه دارد؛ اگر نتوانم بنویسمش، احتمالاً انتخاب درستی نیست.',
      en: 'Every technical choice has a one-line reason. If I cannot write it down, it is probably wrong.',
    },
  },
  {
    title: { fa: 'تحویل تدریجی', en: 'Incremental delivery' },
    body: {
      fa: 'تکه‌های کوچک و قابل تست، به‌جای یک انتشار بزرگ و پرریسک در پایان پروژه.',
      en: 'Small, testable slices instead of one risky release at the end.',
    },
  },
];

export const workingLanguages: BilingualList = {
  fa: ['فارسی — زبان مادری', 'انگلیسی — متوسط رو به پیشرفته (مطالعهٔ فنی، مکاتبه)'],
  en: ['Persian — native', 'English — upper-intermediate (technical reading, written communication)'],
};

export const sections = [
  'home',
  'about',
  'journey',
  'skills',
  'academy',
  'projects',
  'process',
  'blog',
  'contact',
] as const;
