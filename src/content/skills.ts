import type { IconType } from 'react-icons';
import {
  FaReact,
  FaJs,
  FaPython,
  FaPhp,
  FaNode,
  FaMap,
  FaGlobe,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaDocker,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaSass,
  FaCss3Alt,
  FaBootstrap,
  FaCodeBranch,
  FaChartBar,
  FaVial,
  FaCircleCheck,
  FaPaintbrush,
  FaGears,
  FaLayerGroup,
  FaServer,
  FaBolt,
  FaCubes,
  FaRoute,
} from 'react-icons/fa6';

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'devops'
  | 'gis'
  | 'quality'
  | 'foundations';

export interface Skill {
  name: string;
  icon: IconType;
  /** 1 = aware … 5 = core expertise */
  level: 1 | 2 | 3 | 4 | 5;
  color: string;
  hint: { fa: string; en: string };
  isNew?: boolean;
}

export interface SkillGroup {
  key: SkillCategory;
  icon: IconType;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'frontend',
    icon: FaReact,
    skills: [
      {
        name: 'React',
        icon: FaReact,
        level: 5,
        color: '#61DAFB',
        hint: { fa: 'ساخت رابط کاربری بر پایهٔ کامپوننت و وضعیت', en: 'Component-based UI and state' },
      },
      {
        name: 'TypeScript',
        icon: FaJs,
        level: 5,
        color: '#3178C6',
        hint: { fa: 'تایپ‌های ایستا روی جاوااسکریپت برای خطای کمتر', en: 'Static types on top of JavaScript' },
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        level: 5,
        color: '#F7DF1E',
        hint: { fa: 'زبان پایهٔ وب؛ ES6+ و رفتار async', en: 'The language of the web; ES6+ and async' },
      },
      {
        name: 'Next.js',
        icon: FaLayerGroup,
        level: 3,
        color: '#A5B4FC',
        hint: { fa: 'رندر سمت سرور و مسیریابی برای React', en: 'SSR and routing for React' },
      },
      {
        name: 'Zustand',
        icon: FaBolt,
        level: 4,
        color: '#F59E0B',
        hint: { fa: 'مدیریت وضعیت سبک و بدون boilerplate', en: 'Lightweight state without boilerplate' },
        isNew: true,
      },
      {
        name: 'Redux Toolkit',
        icon: FaCubes,
        level: 4,
        color: '#764ABC',
        hint: { fa: 'وضعیت قابل پیش‌بینی برای اپ‌های بزرگ', en: 'Predictable state for larger apps' },
      },
      {
        name: 'TailwindCSS',
        icon: FaCss3Alt,
        level: 5,
        color: '#38BDF8',
        hint: { fa: 'استایل‌دهی utility-first با طراحی سازگار', en: 'Utility-first styling with a consistent scale' },
      },
      {
        name: 'Ant Design',
        icon: FaPaintbrush,
        level: 4,
        color: '#0170FE',
        hint: { fa: 'کامپوننت‌های آمادهٔ سامانه‌های سازمانی', en: 'Ready-made enterprise components' },
      },
      {
        name: 'Material UI',
        icon: FaLayerGroup,
        level: 4,
        color: '#0081CB',
        hint: { fa: 'سیستم طراحی متریال برای React', en: 'Material design system for React' },
      },
      {
        name: 'HTML & CSS',
        icon: FaHtml5,
        level: 5,
        color: '#E34F26',
        hint: { fa: 'ساختار و چیدمان؛ پایهٔ هر رابط', en: 'Structure and layout — the base of every UI' },
      },
      {
        name: 'SASS / Less',
        icon: FaSass,
        level: 4,
        color: '#CC6699',
        hint: { fa: 'پیش‌پردازنده‌های CSS با متغیر و ماژول', en: 'CSS preprocessors with variables and modules' },
      },
      {
        name: 'Bootstrap',
        icon: FaBootstrap,
        level: 4,
        color: '#7952B3',
        hint: { fa: 'شبکه و کامپوننت‌های کلاسیک CSS', en: 'Classic CSS grid and components' },
      },
      {
        name: 'D3.js',
        icon: FaChartBar,
        level: 3,
        color: '#F9A03C',
        hint: { fa: 'تجمیع داده و گراف‌های سفارشی در مرورگر', en: 'Custom data visualisation in the browser' },
      },
    ],
  },
  {
    key: 'backend',
    icon: FaServer,
    skills: [
      {
        name: 'Node.js',
        icon: FaNode,
        level: 4,
        color: '#4ADE80',
        hint: { fa: 'اجرای جاوااسکریپت سمت سرور', en: 'JavaScript on the server' },
      },
      {
        name: 'NestJS',
        icon: FaNode,
        level: 4,
        color: '#E0234E',
        hint: { fa: 'معماری ماژولار و تزریق وابستگی برای API', en: 'Modular architecture with dependency injection' },
      },
      {
        name: 'Express',
        icon: FaRoute,
        level: 4,
        color: '#9CA3AF',
        hint: { fa: 'مینیمال‌ترین لایهٔ HTTP در Node', en: 'The most minimal HTTP layer for Node' },
      },
      {
        name: 'Django',
        icon: FaPython,
        level: 3,
        color: '#0C4B33',
        hint: { fa: 'فریم‌ورک باتری‌دار پایتون', en: 'Batteries-included Python framework' },
      },
      {
        name: 'Django REST Framework',
        icon: FaServer,
        level: 3,
        color: '#A78BFA',
        hint: { fa: 'ساخت API روی مدل‌های جنگو', en: 'APIs on top of Django models' },
      },
      {
        name: 'FastAPI',
        icon: FaBolt,
        level: 3,
        color: '#059669',
        hint: { fa: 'API سریع و تایپ‌شدهٔ پایتون', en: 'Fast, typed Python APIs' },
      },
      {
        name: 'Flask',
        icon: FaPython,
        level: 3,
        color: '#94A3B8',
        hint: { fa: 'میکروفریم‌ورک ساده برای سرویس‌های کوچک', en: 'Small framework for small services' },
      },
      {
        name: 'PHP',
        icon: FaPhp,
        level: 3,
        color: '#777BB4',
        hint: { fa: 'زبان سمت سرور کلاسیک وب', en: 'The classic server-side web language' },
      },
      {
        name: 'REST API',
        icon: FaCodeBranch,
        level: 5,
        color: '#22D3EE',
        hint: { fa: 'طراحی منابع، وضعیت و نسخه‌بندی API', en: 'Resources, status codes and versioning' },
      },
    ],
  },
  {
    key: 'data',
    icon: FaDatabase,
    skills: [
      {
        name: 'PostgreSQL',
        icon: FaDatabase,
        level: 4,
        color: '#60A5FA',
        hint: { fa: 'پایگاه دادهٔ رابطه‌ای با پشتیبانی از JSON و GIS', en: 'Relational database with JSON and GIS support' },
      },
      {
        name: 'MySQL',
        icon: FaDatabase,
        level: 4,
        color: '#4479A1',
        hint: { fa: 'پایگاه دادهٔ رابطه‌ای پرکاربرد', en: 'Widely used relational database' },
      },
      {
        name: 'MongoDB',
        icon: FaDatabase,
        level: 3,
        color: '#47A248',
        hint: { fa: 'پایگاه دادهٔ سندمحور و انعطاف‌پذیر', en: 'Flexible document database' },
      },
      {
        name: 'Prisma',
        icon: FaCode,
        level: 3,
        color: '#A5B4FC',
        hint: { fa: 'ORM تایپ‌سیف و مهاجرت خودکار', en: 'Type-safe ORM with migrations' },
      },
      {
        name: 'TypeORM',
        icon: FaCode,
        level: 4,
        color: '#F87171',
        hint: { fa: 'ORM مبتنی بر دکوراتور برای Node', en: 'Decorator-based ORM for Node' },
      },
      {
        name: 'SQLAlchemy',
        icon: FaPython,
        level: 3,
        color: '#A78BFA',
        hint: { fa: 'قدرتمندترین لایهٔ ORM پایتون', en: 'The most capable Python ORM layer' },
      },
      {
        name: 'Alembic',
        icon: FaDatabase,
        level: 3,
        color: '#7DD3FC',
        hint: { fa: 'مهاجرت پایگاه داده در اکوسیستم پایتون', en: 'Database migrations in Python' },
      },
    ],
  },
  {
    key: 'devops',
    icon: FaDocker,
    skills: [
      {
        name: 'Git',
        icon: FaGitAlt,
        level: 5,
        color: '#F05032',
        hint: { fa: 'مدیریت نسخه، برنچ و ادغام', en: 'Version control, branching and merges' },
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        level: 5,
        color: '#9CA3AF',
        hint: { fa: 'میزبانی کد، Pull Request و GitHub Pages', en: 'Code hosting, pull requests, Pages' },
      },
      {
        name: 'GitLab',
        icon: FaGitlab,
        level: 4,
        color: '#FC6D26',
        hint: { fa: 'مخزن سازمانی و خطوط CI', en: 'Enterprise repos and CI pipelines' },
      },
      {
        name: 'Docker',
        icon: FaDocker,
        level: 3,
        color: '#2496ED',
        hint: { fa: 'بسته‌بندی اپلیکیشن در محیط یکسان', en: 'Package an app into an identical environment' },
      },
      {
        name: 'Apache NiFi',
        icon: FaGears,
        level: 3,
        color: '#728E9B',
        hint: { fa: 'جریان‌های داده و اتوماسیون پردازش', en: 'Data flows and processing automation' },
      },
    ],
  },
  {
    key: 'gis',
    icon: FaMap,
    skills: [
      {
        name: 'OpenLayers',
        icon: FaMap,
        level: 4,
        color: '#2DD4BF',
        hint: { fa: 'کتابخانهٔ نقشهٔ تعاملی با لایه و تصویر', en: 'Interactive maps with layers and projections' },
      },
      {
        name: 'MapLibre GL',
        icon: FaGlobe,
        level: 3,
        color: '#60A5FA',
        hint: { fa: 'نقشهٔ برداری با رندر WebGL', en: 'Vector maps rendered with WebGL' },
      },
      {
        name: 'MapStore2',
        icon: FaLayerGroup,
        level: 3,
        color: '#38BDF8',
        hint: { fa: 'چارچوب متن‌باز نقشهٔ سازمانی', en: 'Open-source enterprise mapping framework' },
      },
      {
        name: 'OGC / WMS',
        icon: FaMap,
        level: 3,
        color: '#22D3EE',
        hint: { fa: 'استانداردهای تبادل دادهٔ مکانی', en: 'Spatial data exchange standards' },
      },
    ],
  },
  {
    key: 'quality',
    icon: FaVial,
    skills: [
      {
        name: 'Cypress',
        icon: FaVial,
        level: 4,
        color: '#04C4B4',
        hint: { fa: 'تست سرتاسری در مرورگر واقعی', en: 'End-to-end tests in a real browser' },
      },
      {
        name: 'Zod',
        icon: FaCircleCheck,
        level: 4,
        color: '#3B82F6',
        hint: { fa: 'اعتبارسنجی داده در زمان اجرا با تایپ', en: 'Runtime validation with inferred types' },
      },
      {
        name: 'Yup',
        icon: FaCircleCheck,
        level: 4,
        color: '#10B981',
        hint: { fa: 'اعتبارسنجی فرم‌ها', en: 'Form validation' },
      },
    ],
  },
  {
    key: 'foundations',
    icon: FaCode,
    skills: [
      {
        name: 'SOLID',
        icon: FaCodeBranch,
        level: 4,
        color: '#818CF8',
        hint: { fa: 'پنج اصل طراحی ماژول‌های قابل تغییر', en: 'Five principles for changeable modules' },
      },
      {
        name: 'MVC',
        icon: FaLayerGroup,
        level: 4,
        color: '#94A3B8',
        hint: { fa: 'جداسازی مدل، نمایش و کنترل', en: 'Separating model, view and controller' },
      },
      {
        name: 'الگوریتم و ساختمان داده',
        icon: FaCubes,
        level: 4,
        color: '#A78BFA',
        hint: { fa: 'تحلیل پیچیدگی و انتخاب ساختار درست', en: 'Complexity analysis and the right data structure' },
      },
    ],
  },
];
