import type { Bilingual } from '../lib/lang';

export type JourneyType = 'work' | 'education' | 'milestone';

export interface JourneyItem {
  period: Bilingual;
  title: Bilingual;
  org: Bilingual;
  description: Bilingual;
  points: { fa: string[]; en: string[] };
  type: JourneyType;
  tags: string[];
}

export const journey: JourneyItem[] = [
  {
    period: { fa: '۱۴۰۳ — اکنون', en: '2024 — present' },
    title: { fa: 'کارشناسی ارشد الگوریتم‌ها و نظریهٔ محاسبات', en: 'MSc, Algorithms & Theory of Computation' },
    org: { fa: 'دانشگاه شاهد، تهران', en: 'Shahed University, Tehran' },
    description: {
      fa: 'تحصیل در حوزهٔ الگوریتم و نظریهٔ محاسبات، نگاه من به کارایی و مدل‌سازی مسئله را تغییر داد؛ چیزی که مستقیم به طراحی رابط‌های دادهٔ سنگین راه پیدا کرد.',
      en: 'Studying algorithms and computation theory changed how I think about performance and problem modelling — something that feeds straight into designing heavy data interfaces.',
    },
    points: {
      fa: ['نظریهٔ گراف و کاربرد آن در مصورسازی داده', 'تحلیل پیچیدگی و بهینه‌سازی الگوریتم‌ها', 'طراحی الگوریتم برای مسائل واقعی'],
      en: ['Graph theory applied to data visualisation', 'Complexity analysis and optimisation', 'Algorithm design for real problems'],
    },
    type: 'education',
    tags: ['Algorithms', 'Theory', 'Research'],
  },
  {
    period: { fa: 'اسفند ۱۴۰۲ — اکنون', en: 'Feb 2024 — present' },
    title: { fa: 'توسعه‌دهندهٔ فرانت‌اند', en: 'Front-end Developer' },
    org: { fa: 'هوشان کاوش برنا، تهران', en: 'Hoshan Kavosh Borna, Tehran' },
    description: {
      fa: 'ساخت رابط کاربری برای سامانه‌های سازمانی: موتور گردش کار Bizagi، سفارشی‌سازی MapStore2 و اتصال به جریان‌های دادهٔ Apache NiFi.',
      en: 'Building interfaces for enterprise systems: the Bizagi workflow engine, MapStore2 customisation and integration with Apache NiFi data flows.',
    },
    points: {
      fa: [
        'طراحی رابط مدرن برای موتور گردش کار Bizagi و تعامل با فرم‌های سازمانی',
        'سفارشی‌سازی MapStore2 برای نیازهای داخلی و بهبود قابلیت‌های نقشه‌برداری',
        'ساخت قالبی یکپارچه با Apache NiFi برای نمایش و مدیریت گروه‌های فرآیند',
        'همکاری با تیم بک‌اند روی قرارداد API و اعتبارسنجی داده',
      ],
      en: [
        'Designed a modern UI for the Bizagi workflow engine and organisational forms',
        'Customised MapStore2 for internal requirements and better mapping features',
        'Built a template integrated with Apache NiFi to manage process groups in tables',
        'Worked with the back-end team on API contracts and data validation',
      ],
    },
    type: 'work',
    tags: ['React', 'MapStore2', 'Bizagi', 'NiFi'],
  },
  {
    period: { fa: '۱۴۰۰ — ۱۴۰۳', en: '2021 — 2024' },
    title: { fa: 'کارشناسی علوم کامپیوتر', en: 'BSc, Computer Science' },
    org: { fa: 'دانشگاه شاهد، تهران', en: 'Shahed University, Tehran' },
    description: {
      fa: 'پایهٔ نظری: ساختمان داده، پایگاه داده، مهندسی نرم‌افزار و شبکه. اینجا بود که از «نوشتن کد» به «طراحی سیستم» رسیدم.',
      en: 'The theoretical base: data structures, databases, software engineering and networks. This is where I moved from writing code to designing systems.',
    },
    points: {
      fa: ['پروژه‌های پایگاه داده و طراحی مدل داده', 'آشنایی با پارادایم‌های برنامه‌نویسی', 'کار تیمی روی پروژه‌های نرم‌افزاری'],
      en: ['Database projects and data modelling', 'Programming paradigms', 'Team work on software projects'],
    },
    type: 'education',
    tags: ['CS', 'Databases', 'Software Engineering'],
  },
  {
    period: { fa: '۱۳۹۹ — ۱۴۰۰', en: '2020 — 2021' },
    title: { fa: 'آغاز مسیر وب', en: 'Starting with the web' },
    org: { fa: 'یادگیری خودآموز و پروژه‌های کوچک', en: 'Self-taught learning and small projects' },
    description: {
      fa: 'از HTML و CSS تا جاوااسکریپت و اولین اپلیکیشن‌های React. همان‌جا یاد گرفتم که ساختن چیزی که کار می‌کند، بهترین راه یادگیری است.',
      en: 'From HTML and CSS to JavaScript and the first React apps. That is where I learned that building something that works is the best way to learn.',
    },
    points: {
      fa: ['تمرین مستمر با پروژه‌های واقعی', 'آشنایی با Git و کار تیمی', 'اولین تجربه‌های طراحی رابط'],
      en: ['Consistent practice on real projects', 'Git and collaborative work', 'First interface design experiments'],
    },
    type: 'milestone',
    tags: ['HTML/CSS', 'JavaScript', 'React'],
  },
];
