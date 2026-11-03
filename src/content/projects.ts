import type { Bilingual } from '../lib/lang';

export type PreviewVariant = 'shop' | 'auth' | 'graph' | 'map' | 'dashboard' | 'api' | 'portfolio';
export type ProjectCategory = 'product' | 'gis' | 'backend' | 'experiment';

export interface ProjectItem {
  id: string;
  title: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  role: Bilingual;
  highlight: Bilingual;
  stack: string[];
  year: string;
  category: ProjectCategory;
  preview: PreviewVariant;
  accent: string;
  live?: string;
  code?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'modern-shop',
    title: { fa: 'فروشگاه مدرن', en: 'Modern Shop' },
    tagline: { fa: 'ویترین محصولات با تجربهٔ خرید روان', en: 'A product storefront with a smooth buying flow' },
    description: {
      fa: 'یک فروشگاه کامل سمت کلاینت با صفحهٔ محصول، سبد خرید و فیلترهای ترکیبی. تمرین اصلی این پروژه، مدیریت وضعیت سبد و بازخورد فوری در تعامل‌های پرتکرار بود.',
      en: 'A complete client-side shop with product pages, cart and combined filters. The core exercise was cart state management and instant feedback on frequent interactions.',
    },
    role: { fa: 'طراحی و پیاده‌سازی کامل فرانت‌اند', en: 'Full front-end design and implementation' },
    highlight: {
      fa: 'وضعیت سبد با الگوی اتمیک مدیریت می‌شود تا هر تغییر فقط کامپوننت‌های وابسته را رندر کند.',
      en: 'Cart state is managed with an atomic pattern so a change re-renders only dependent components.',
    },
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    year: '۲۰۲۵',
    category: 'product',
    preview: 'shop',
    accent: '#22d3ee',
    live: 'https://mahmoud-yousefi.github.io/modern-shop-repo/',
    code: 'https://github.com/mahmoud-yousefi/modern-shop-repo',
  },
  {
    id: 'auth-app',
    title: { fa: 'سامانهٔ احراز هویت', en: 'Auth App' },
    tagline: { fa: 'ورود امن، مسیرهای محافظت‌شده و نشست پایدار', en: 'Secure login, protected routes and persistent sessions' },
    description: {
      fa: 'پیاده‌سازی کامل چرخهٔ ورود: ثبت‌نام، ورود، بازیابی رمز و مسیرهای محافظت‌شده. تمرکز پروژه روی مرزهای امنیتی و رفتار درست هنگام انقضای نشست بود.',
      en: 'A full authentication cycle: sign-up, sign-in, password recovery and protected routes. The focus was security boundaries and correct behaviour on session expiry.',
    },
    role: { fa: 'توسعهٔ فول‌استک', en: 'Full-stack development' },
    highlight: {
      fa: 'توکن‌ها در کوکی HttpOnly نگه داشته می‌شوند؛ هیچ توکنی به حافظهٔ قابل دسترس جاوااسکریپت نمی‌رسد.',
      en: 'Tokens live in HttpOnly cookies; nothing sensitive is reachable from JavaScript.',
    },
    stack: ['Next.js', 'TypeScript', 'REST API', 'Zod'],
    year: '۲۰۲۵',
    category: 'product',
    preview: 'auth',
    accent: '#818cf8',
    live: 'https://mahmoud-yousefi.github.io/auth-app/auth',
    code: 'https://github.com/mahmoud-yousefi/auth-app',
  },
  {
    id: 'advanced-graph',
    title: { fa: 'گراف پیشرفته', en: 'Advanced Graph' },
    tagline: { fa: 'نمایش تعاملی ساختارهای گرافی پیچیده', en: 'Interactive visualisation of complex graphs' },
    description: {
      fa: 'ابزاری برای کاوش گراف‌های بزرگ: جابه‌جایی گره‌ها، بزرگ‌نمایی و بررسی همسایگی. چالش اصلی، رندر آرام با هزاران گره و حفظ خوانایی بود.',
      en: 'A tool for exploring large graphs: drag nodes, zoom and inspect neighbourhoods. The challenge was smooth rendering with thousands of nodes while staying readable.',
    },
    role: { fa: 'طراحی تعامل و پیاده‌سازی', en: 'Interaction design and implementation' },
    highlight: {
      fa: 'رندر روی canvas به‌جای DOM انجام می‌شود؛ همان تصمیمی که پروژه را از توقف در چند صد گره نجات داد.',
      en: 'Rendering happens on canvas instead of the DOM — the decision that kept the app usable past a few hundred nodes.',
    },
    stack: ['React', 'D3.js', 'TypeScript'],
    year: '۲۰۲۴',
    category: 'experiment',
    preview: 'graph',
    accent: '#a3e635',
    live: 'https://mahmoud-yousefi.github.io/AdvancedGraph/',
    code: 'https://github.com/mahmoud-yousefi/AdvancedGraph',
  },
  {
    id: 'gis-example',
    title: { fa: 'نقشهٔ تعاملی GIS', en: 'Interactive GIS Map' },
    tagline: { fa: 'لایه‌های مکانی، جست‌وجو و تعامل روی نقشه', en: 'Spatial layers, search and map interaction' },
    description: {
      fa: 'نمونه‌ای از کار با دادهٔ برداری و رستری در مرورگر: لایه‌های GeoJSON، سبک‌دهی شرطی و پاپ‌آپ اطلاعات عارضه. پایهٔ همان رویکردی است که در پروژه‌های نقشه‌محور سازمانی به کار می‌برم.',
      en: 'A working sample of vector and raster data in the browser: GeoJSON layers, conditional styling and feature popups. It is the same approach I use in enterprise mapping projects.',
    },
    role: { fa: 'پیاده‌سازی فرانت‌اند GIS', en: 'GIS front-end implementation' },
    highlight: {
      fa: 'سیستم مختصات منبع و نقشه هم‌تراز شده تا عوارض بدون جابه‌جایی روی نقشه بنشینند.',
      en: 'Source and map projections are aligned so features land exactly where they belong.',
    },
    stack: ['OpenLayers', 'MapLibre', 'TypeScript'],
    year: '۲۰۲۴',
    category: 'gis',
    preview: 'map',
    accent: '#2dd4bf',
    code: 'https://github.com/mahmoud-yousefi/GIS-example',
  },
  {
    id: 'antd-dashboard',
    title: { fa: 'داشبورد سازمانی', en: 'Enterprise Dashboard' },
    tagline: { fa: 'جدول‌های دادهٔ سنگین روی Ant Design', en: 'Heavy data tables on Ant Design' },
    description: {
      fa: 'یک داشبورد با جدول‌های قابل مرتب‌سازی، فیلتر پیشرفته و فرم‌های چندمرحله‌ای؛ ساخته‌شده با کامپوننت‌های Ant Design و بررسی رفتار آن‌ها در سناریوهای واقعی.',
      en: 'A dashboard with sortable tables, advanced filters and multi-step forms, built on Ant Design components and tested against realistic scenarios.',
    },
    role: { fa: 'توسعهٔ رابط کاربری', en: 'UI development' },
    highlight: {
      fa: 'برای جدول‌های بزرگ، صفحه‌بندی سمت سرور جای رندر همهٔ ردیف‌ها را گرفت.',
      en: 'For large tables, server-side pagination replaced rendering every row.',
    },
    stack: ['React', 'Ant Design', 'TypeScript'],
    year: '۲۰۲۵',
    category: 'experiment',
    preview: 'dashboard',
    accent: '#60a5fa',
    live: 'https://mahmoud-yousefi.github.io/antd-test/',
    code: 'https://github.com/mahmoud-yousefi/antd-test',
  },
  {
    id: 'nestjs-typeorm',
    title: { fa: 'API با NestJS و TypeORM', en: 'NestJS + TypeORM API' },
    tagline: { fa: 'معماری ماژولار، تزریق وابستگی و مدل دادهٔ رابطه‌ای', en: 'Modular architecture, DI and a relational model' },
    description: {
      fa: 'یک بک‌اند با ساختار ماژول، سرویس و کنترلر؛ همراه با DTO و اعتبارسنجی. هدف، تمرین مرزهای روشن بین لایه‌ها و تست‌پذیری منطق دامنه بود.',
      en: 'A back-end structured with modules, services and controllers, plus DTOs and validation. The goal was clean layer boundaries and testable domain logic.',
    },
    role: { fa: 'توسعهٔ بک‌اند', en: 'Back-end development' },
    highlight: {
      fa: 'محدودیت‌ها هم در دیتابیس و هم در DTO اعمال می‌شوند تا دادهٔ نامعتبر از هر مسیری متوقف شود.',
      en: 'Constraints are enforced in both the database and the DTOs so invalid data stops on every path.',
    },
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Docker'],
    year: '۲۰۲۴',
    category: 'backend',
    preview: 'api',
    accent: '#f87171',
    code: 'https://github.com/mahmoud-yousefi/nestjs-typeorm',
  },
  {
    id: 'fastapi-alembic',
    title: { fa: 'FastAPI + Alembic', en: 'FastAPI + Alembic' },
    tagline: { fa: 'API پایتونی با مهاجرت نسخه‌بندی‌شده', en: 'A Python API with versioned migrations' },
    description: {
      fa: 'سرویس API با FastAPI و SQLAlchemy که تغییرات پایگاه داده را با Alembic نسخه‌بندی می‌کند. مستندات OpenAPI به‌صورت خودکار از مدل‌های Pydantic ساخته می‌شود.',
      en: 'An API built with FastAPI and SQLAlchemy that versions schema changes through Alembic. OpenAPI docs are generated automatically from the Pydantic models.',
    },
    role: { fa: 'توسعهٔ بک‌اند', en: 'Back-end development' },
    highlight: {
      fa: 'هر مهاجرت قابل بازگشت (downgrade) نوشته شده تا استقرار اشتباه به یک مسئلهٔ ده‌دقیقه‌ای تبدیل شود.',
      en: 'Every migration has a working downgrade, turning a bad deploy into a ten-minute problem.',
    },
    stack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL'],
    year: '۲۰۲۴',
    category: 'backend',
    preview: 'api',
    accent: '#34d399',
    code: 'https://github.com/mahmoud-yousefi/fastapi-alembic-sqlalchemy',
  },
  {
    id: 'portfolio',
    title: { fa: 'همین پرتفولیو', en: 'This portfolio' },
    tagline: { fa: 'طراحی، پیاده‌سازی و انتشار خودکار', en: 'Design, implementation and automated publishing' },
    description: {
      fa: 'همین سایتی که می‌بینید: دوزبانه با پشتیبانی کامل RTL، طراحی مبتنی بر توکن، انیمیشن‌های ظاهر شدن در اسکرول و استقرار روی GitHub Pages.',
      en: 'The site you are reading: bilingual with full RTL support, token-based design, scroll-reveal animation and deployment on GitHub Pages.',
    },
    role: { fa: 'طراحی و توسعه', en: 'Design and development' },
    highlight: {
      fa: 'همهٔ انیمیشن‌ها با CSS و یک IntersectionObserver مشترک ساخته شده‌اند؛ بدون کتابخانهٔ اضافه و با احترام به prefers-reduced-motion.',
      en: 'All animation uses CSS plus a single shared IntersectionObserver — no extra libraries, and prefers-reduced-motion is respected.',
    },
    stack: ['React', 'TypeScript', 'TailwindCSS', 'i18next'],
    year: '۲۰۲۶',
    category: 'product',
    preview: 'portfolio',
    accent: '#f472b6',
    live: 'https://mahmoud-yousefi.github.io/m.yousefi-portfolio/',
    code: 'https://github.com/mahmoud-yousefi/m.yousefi-portfolio',
  },
];
