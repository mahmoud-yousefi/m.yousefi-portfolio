import type { IconType } from 'react-icons';
import {
  FaReact,
  FaJs,
  FaBolt,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaDocker,
  FaMap,
  FaVial,
  FaCss3Alt,
  FaPython,
  FaCubes,
} from 'react-icons/fa6';
import type { SkillCategory } from './skills';
import type { Bilingual, BilingualList } from '../lib/lang';

export type ArticleLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Article {
  id: string;
  title: string;
  icon: IconType;
  category: SkillCategory;
  level: ArticleLevel;
  minutes: number;
  tagline: Bilingual;
  why: Bilingual;
  concepts: BilingualList;
  snippet: { language: string; code: string };
  detail: Bilingual;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 'react',
    title: 'React',
    icon: FaReact,
    category: 'frontend',
    level: 'beginner',
    minutes: 6,
    tagline: {
      fa: 'کتابخانه‌ای برای ساختن رابط کاربری از قطعات کوچک و قابل استفادهٔ مجدد.',
      en: 'A library for building interfaces out of small, reusable pieces.',
    },
    why: {
      fa: 'بیشتر سامانه‌های سازمانی‌ای که ساخته‌ام فرم‌های پیچیده و جدول‌های دادهٔ سنگین دارند. مدل کامپوننتی React اجازه می‌دهد هر تکه را جدا توسعه بدهم، تست کنم و بدون بازنویسی کل صفحه جابه‌جا کنم.',
      en: 'Most enterprise systems I build have complex forms and heavy data tables. The component model lets me develop, test and move each piece without rewriting the page.',
    },
    concepts: {
      fa: [
        'وضعیت (state) منبع حقیقت است؛ رابط چیزی جز تابعی از آن نیست.',
        'افکت‌ها (useEffect) برای همگام‌سازی با دنیای بیرون‌اند، نه برای محاسبهٔ داده.',
        'کلید یکتا در لیست‌ها، هویت هر آیتم را برای React مشخص می‌کند.',
        'ترکیب کامپوننت‌ها بهتر از ارث‌بری و پراپ‌های بی‌پایان است.',
      ],
      en: [
        'State is the source of truth; the UI is just a function of it.',
        'Effects synchronise with the outside world — they are not for computing data.',
        'A stable key in lists tells React which item is which.',
        'Composition beats inheritance and endless prop drilling.',
      ],
    },
    snippet: {
      language: 'tsx',
      code: `function Counter({ step = 1 }: { step?: number }) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + step)}>
      {count}
    </button>
  );
}`,
    },
    detail: {
      fa: 'قاعده‌ای که بیشترین کمک را به من کرده این است: «اگر می‌توانی از وضعیت محاسبه کنی، آن را در وضعیت نگه ندار». هر مقدار تکراری در state یک فرصت برای ناسازگاری است. در فرم‌های بزرگ سازمانی این قاعده تعداد باگ‌های همگام‌سازی را به‌شدت کم می‌کند.',
      en: 'The rule that helped me most: if you can derive it from state, do not store it. Every duplicated value is a chance to drift out of sync. In large enterprise forms this cuts synchronisation bugs dramatically.',
    },
    tags: ['Front-end', 'UI', 'Hooks'],
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    icon: FaJs,
    category: 'frontend',
    level: 'beginner',
    minutes: 5,
    tagline: {
      fa: 'جاوااسکریپت با تایپ؛ کامپایلر قبل از کاربر، اشتباه‌ها را پیدا می‌کند.',
      en: 'JavaScript with types — the compiler finds mistakes before your users do.',
    },
    why: {
      fa: 'در پروژه‌ای که چند نفر روی یک مدل داده کار می‌کنند، تایپ نقش مستند زنده را بازی می‌کند. تغییر یک فیلد در API، فهرست همهٔ جاهایی که باید اصلاح شوند را نشان می‌دهد.',
      en: 'When several people work on one data model, types act as living documentation. Changing an API field surfaces every place that needs updating.',
    },
    concepts: {
      fa: [
        'type برای توصیف شکل داده و union برای حالت‌های ممکن.',
        'unknown امن‌تر از any است؛ اول بررسی کن، بعد استفاده کن.',
        'جنریک‌ها منطق را بدون از دست دادن تایپ بازاستفاده می‌کنند.',
        'strict mode را از روز اول روشن کن؛ بعداً گران است.',
      ],
      en: [
        'Use type to describe shape and unions for possible states.',
        'unknown is safer than any: check first, then use.',
        'Generics reuse logic without losing type information.',
        'Turn strict mode on from day one; retrofitting is expensive.',
      ],
    },
    snippet: {
      language: 'ts',
      code: `type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'ok'; data: User[] }
  | { status: 'error'; message: string };

function render(s: State) {
  if (s.status === 'ok') return s.data; // data is typed here
}`,
    },
    detail: {
      fa: 'الگوی «وضعیت‌های انحصاری» بالا، از همهٔ booleanهای جداگانه بهتر است. به‌جای isLoading و isError و data، یک union دارید که کامپایلر مطمئن می‌شود حالت غیرممکن (مثلاً هم‌زمان بارگذاری و خطا) اصلاً قابل نوشتن نیست.',
      en: 'The exclusive-state pattern above beats separate booleans. Instead of isLoading, isError and data, one union makes impossible states unrepresentable — the compiler will not let you write them.',
    },
    tags: ['Types', 'Safety', 'DX'],
  },
  {
    id: 'zustand',
    title: 'Zustand',
    icon: FaBolt,
    category: 'frontend',
    level: 'intermediate',
    minutes: 4,
    tagline: {
      fa: 'مدیریت وضعیت جهانی، در حد چند خط کد و بدون Provider.',
      en: 'Global state management in a few lines, with no provider.',
    },
    why: {
      fa: 'وقتی وضعیت مشترک (کاربر، تم، فیلترها) از دو سه کامپوننت عبور می‌کند، Redux بیش از نیاز است و Context باعث رندرهای اضافی می‌شود. Zustand دقیقاً همان حد وسط است و انتخاب‌گرهایش رندر را به قطعهٔ لازم محدود می‌کند.',
      en: 'When shared state (user, theme, filters) crosses a few components, Redux is more machinery than needed and Context re-renders too much. Zustand sits in the middle, and selectors keep renders local.',
    },
    concepts: {
      fa: [
        'استور یک هوک است؛ هر کامپوننت فقط چیزی را که می‌خواهد انتخاب می‌کند.',
        'اکشن‌ها داخل استور تعریف می‌شوند و وضعیت را در یک‌جا تغییر می‌دهند.',
        'middlewareهایی مثل persist و immer کارهای تکراری را حذف می‌کنند.',
        'برای منطق پیچیده و تاریخچهٔ رویداد، همچنان Redux گزینهٔ بهتری است.',
      ],
      en: [
        'The store is a hook; each component selects only what it needs.',
        'Actions live inside the store and mutate state in one place.',
        'Middleware like persist and immer removes repetitive work.',
        'For complex logic and event history, Redux is still the better fit.',
      ],
    },
    snippet: {
      language: 'ts',
      code: `import { create } from 'zustand';

type UI = {
  theme: 'light' | 'dark';
  toggle: () => void;
};

export const useUI = create<UI>((set) => ({
  theme: 'dark',
  toggle: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
}));`,
    },
    detail: {
      fa: 'بزرگ‌ترین مزیت عملی Zustand در پروژه‌های من، حذف لایهٔ boilerplate است: بدون action type، بدون reducer، بدون Provider. اما یک هشدار: اگر وضعیت را در چند استور تکه‌تکه کنید و بین آن‌ها همگام‌سازی دستی بنویسید، همان پیچیدگی Redux را دوباره ساخته‌اید — فقط با نام دیگری.',
      en: 'The practical win in my projects is removing boilerplate: no action types, reducers or providers. One warning: splitting state across stores and syncing them by hand recreates Redux complexity under a different name.',
    },
    tags: ['State', 'Zustand', 'React'],
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    icon: FaLayerGroup,
    category: 'frontend',
    level: 'intermediate',
    minutes: 6,
    tagline: {
      fa: 'چارچوبی روی React که رندر سمت سرور، مسیریابی و بهینه‌سازی را اضافه می‌کند.',
      en: 'A framework on top of React that adds SSR, routing and optimisation.',
    },
    why: {
      fa: 'برای صفحاتی که باید سریع دیده شوند و در موتور جست‌وجو پیدا شوند، رندر سمت سرور تفاوت واقعی می‌سازد. در پروژهٔ احراز هویت هم مسیرهای محافظت‌شده و کوکی‌های امن را با همین چارچوب پیاده کردم.',
      en: 'For pages that must appear fast and be indexable, server rendering makes a real difference. I also used it for the auth project, with protected routes and secure cookies.',
    },
    concepts: {
      fa: [
        'کامپوننت سرور یعنی داده نزدیک منبع خوانده می‌شود، نه در مرورگر.',
        'کامپوننت کلاینت را فقط جایی به کار ببر که تعامل لازم است.',
        'کش و بازاعتبارسنجی، هزینهٔ درخواست‌های تکراری را حذف می‌کند.',
        'مسیرهای API همین چارچوب، برای عملیات کوچک کافی‌اند.',
      ],
      en: [
        'Server components read data close to the source, not in the browser.',
        'Reach for client components only where interaction is required.',
        'Caching and revalidation remove the cost of repeated requests.',
        'The built-in route handlers are enough for small operations.',
      ],
    },
    snippet: {
      language: 'tsx',
      code: `// app/projects/page.tsx  (server component)
export default async function Projects() {
  const res = await fetch('https://api.example.com/projects', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return <ProjectGrid items={data} />;
}`,
    },
    detail: {
      fa: 'بزرگ‌ترین اشتباه رایج، بردن کل اپلیکیشن به سمت کلاینت است. اگر همه‌چیز use client باشد، مزیت اصلی Next.js را از دست داده‌اید و فقط پیچیدگی اضافه کرده‌اید. مرز سرور و کلاینت را آگاهانه انتخاب کنید.',
      en: 'The common mistake is pushing the whole app to the client. If everything is "use client", you have lost the main advantage and only added complexity. Choose the server/client boundary deliberately.',
    },
    tags: ['SSR', 'Routing', 'Performance'],
  },
  {
    id: 'nestjs',
    title: 'NestJS',
    icon: FaServer,
    category: 'backend',
    level: 'intermediate',
    minutes: 6,
    tagline: {
      fa: 'معماری ماژولار برای APIهای Node، با الهام از ایده‌های Angular.',
      en: 'Modular architecture for Node APIs, inspired by Angular ideas.',
    },
    why: {
      fa: 'وقتی تعداد endpointها از چند مورد رد می‌شود، Express بدون ساختار به یک فایل هزارخطی تبدیل می‌شود. NestJS با ماژول، سرویس و لایهٔ اعتبارسنجی، مرزها را از روز اول مشخص می‌کند.',
      en: 'Once endpoints grow past a handful, unstructured Express turns into a thousand-line file. NestJS sets boundaries from day one with modules, services and validation.',
    },
    concepts: {
      fa: [
        'Controller فقط ورودی/خروجی HTTP را می‌شناسد؛ منطق در Service است.',
        'تزریق وابستگی، تست واحد را بدون راه‌اندازی سرور ممکن می‌کند.',
        'Pipe و DTO اعتبارسنجی را قبل از ورود داده به منطق انجام می‌دهند.',
        'Guard و Interceptor برای احراز هویت و کارهای عرضی به کار می‌آیند.',
      ],
      en: [
        'Controllers only know HTTP; logic lives in services.',
        'Dependency injection makes unit tests possible without booting a server.',
        'Pipes and DTOs validate before data reaches the logic.',
        'Guards and interceptors handle auth and cross-cutting concerns.',
      ],
    },
    snippet: {
      language: 'ts',
      code: `@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.users.findOne(id);
  }
}`,
    },
    detail: {
      fa: 'هزینهٔ NestJS یادگیری مفاهیم DI و دکوراتورها است؛ سودش در پروژه‌های تیمی و بلندمدت بروز می‌کند. برای یک سرویس کوچک تک‌نفره، Express یا Fastify همچنان انتخاب سریع‌تری است.',
      en: 'NestJS costs you DI and decorator concepts upfront; it pays off in team projects with a long life. For a tiny single-person service, Express or Fastify is still faster to ship.',
    },
    tags: ['API', 'Node.js', 'Architecture'],
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    icon: FaDatabase,
    category: 'data',
    level: 'intermediate',
    minutes: 5,
    tagline: {
      fa: 'پایگاه دادهٔ رابطه‌ای بالغ، با تایپ قوی و پشتیبانی از دادهٔ مکانی.',
      en: 'A mature relational database with strong typing and spatial support.',
    },
    why: {
      fa: 'بیشتر داده‌های سازمانی رابطه‌ای‌اند: کاربر، نقش، گردش کار، سابقه. PostgreSQL هم این روابط را دقیق مدل می‌کند و هم وقتی به فیلد انعطاف‌پذیر یا مختصات جغرافیایی رسیدیم، ما را مجبور به تغییر پایگاه داده نمی‌کند.',
      en: 'Most enterprise data is relational: users, roles, workflows, history. PostgreSQL models those precisely and does not force a database change when you need a flexible field or coordinates.',
    },
    concepts: {
      fa: [
        'کلید خارجی و محدودیت‌ها، دادهٔ ناسازگار را در سطح پایگاه داده متوقف می‌کنند.',
        'ایندکس درست می‌تواند کندترین کوئری را چند برابر سریع‌تر کند.',
        'تراکنش تضمین می‌کند چند تغییر یا همه اعمال شوند یا هیچ‌کدام.',
        'JSONB برای فیلدهای نیمه‌ساختار‌یافته، بدون ترک مدل رابطه‌ای.',
      ],
      en: [
        'Foreign keys and constraints stop inconsistent data at the database level.',
        'The right index can make the slowest query several times faster.',
        'Transactions guarantee that several changes all apply or none do.',
        'JSONB covers semi-structured fields without abandoning the relational model.',
      ],
    },
    snippet: {
      language: 'sql',
      code: `-- پروژه‌های یک کاربر، مرتب بر اساس آخرین به‌روزرسانی
SELECT p.id, p.title, p.updated_at
FROM projects p
JOIN memberships m ON m.project_id = p.id
WHERE m.user_id = $1
ORDER BY p.updated_at DESC
LIMIT 20;`,
    },
    detail: {
      fa: 'با ORM (Prisma یا TypeORM) شروع می‌کنم، اما همیشه EXPLAIN ANALYZE را بلد می‌مانم. اورم‌ها کوئری‌های غیرمنتظره تولید می‌کنند و در جدول‌های بزرگ، تفاوت بین N+1 و یک JOIN ساده، تفاوت بین ۲ ثانیه و ۲۰ میلی‌ثانیه است.',
      en: 'I start with an ORM (Prisma or TypeORM) but never forget EXPLAIN ANALYZE. ORMs generate surprising queries, and on large tables the gap between N+1 and a single JOIN is the gap between 2 seconds and 20 milliseconds.',
    },
    tags: ['SQL', 'Data', 'Modeling'],
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: FaDocker,
    category: 'devops',
    level: 'beginner',
    minutes: 4,
    tagline: {
      fa: 'اپلیکیشن و همهٔ وابستگی‌هایش، در یک تصویر قابل اجرا در هر جا.',
      en: 'Your app and its dependencies, in one image that runs anywhere.',
    },
    why: {
      fa: 'جملهٔ «روی سیستم من کار می‌کرد» با Docker تمام می‌شود. برای تحویل سامانه‌های سازمانی، محیط یکسان بین توسعه و سرور یعنی خطاهای استقرار قابل تکرار و قابل رفع.',
      en: 'Docker ends the "it worked on my machine" conversation. For enterprise delivery, an identical environment across dev and server means deployment errors are reproducible and fixable.',
    },
    concepts: {
      fa: [
        'تصویر (image) لایه‌های فقط‌خواندنی است؛ کانتینر لایهٔ نوشتنی روی آن.',
        'هر دستور Dockerfile یک لایهٔ کش می‌سازد، پس ترتیب دستورها مهم است.',
        'copy کردن package.json قبل از سورس، کش نصب را حفظ می‌کند.',
        'docker compose برای بالا آوردن اپ و پایگاه داده با هم.',
      ],
      en: [
        'An image is a set of read-only layers; a container adds a writable one.',
        'Each Dockerfile instruction is a cached layer, so order matters.',
        'Copy package.json before source to keep the install cached.',
        'Use docker compose to bring up the app and database together.',
      ],
    },
    snippet: {
      language: 'dockerfile',
      code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
    },
    detail: {
      fa: 'برای توسعهٔ روزمره، ایمیج را کوچک و تک‌منظوره نگه می‌دارم و از build چندمرحله‌ای استفاده می‌کنم تا ابزارهای ساخت وارد ایمیج نهایی نشوند. این کار هم امنیت را بهتر می‌کند و هم زمان استقرار را کوتاه.',
      en: 'For day-to-day work I keep images small and single-purpose, using multi-stage builds so build tooling never enters the final image. It improves both security and deploy time.',
    },
    tags: ['Deploy', 'Containers', 'DevOps'],
  },
  {
    id: 'openlayers',
    title: 'OpenLayers',
    icon: FaMap,
    category: 'gis',
    level: 'advanced',
    minutes: 7,
    tagline: {
      fa: 'کتابخانهٔ نقشهٔ تعاملی برای نمایش، تحلیل و ویرایش دادهٔ مکانی در وب.',
      en: 'An interactive mapping library for viewing, analysing and editing spatial data on the web.',
    },
    why: {
      fa: 'در پروژه‌های نقشه‌محور سازمانی، لایه‌های WMS/WFS، سیستم‌های مختصات مختلف و فرم‌های ویرایش هندسه لازم می‌شود. OpenLayers دقیقاً همین موارد را جدی می‌گیرد و به اندازهٔ کافی قابل سفارشی‌سازی است.',
      en: 'Enterprise map projects need WMS/WFS layers, multiple coordinate systems and geometry editing. OpenLayers takes exactly those seriously and is customisable enough.',
    },
    concepts: {
      fa: [
        'نقشه از لایه‌ها ساخته می‌شود؛ هر لایه منبع داده و سبک خودش را دارد.',
        'سیستم مختصات (projection) باید بین منبع و نمایش هماهنگ باشد.',
        'رویدادها (click، pointermove) نقطهٔ اتصال تعامل با نقشه‌اند.',
        'برای نقشهٔ برداری WebGL، MapLibre گزینهٔ سبک‌تری است.',
      ],
      en: [
        'A map is made of layers; each layer owns its source and style.',
        'Projections must agree between the source and the view.',
        'Events (click, pointermove) are where interaction attaches.',
        'For WebGL vector maps, MapLibre is the lighter option.',
      ],
    },
    snippet: {
      language: 'ts',
      code: `const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({ source: new OSM() }),
    new VectorLayer({ source: geoJsonSource, style: featureStyle }),
  ],
  view: new View({ center: fromLonLat([51.39, 35.69]), zoom: 11 }),
});`,
    },
    detail: {
      fa: 'بیشترین زمانی که در پروژه‌های GIS صرف می‌شود، نوشتن کد نیست؛ تطبیق سیستم‌های مختصات و کیفیت داده است. قبل از هر چیز مطمئن شوم دادگاه منبع با projection نقشه یکی است، وگرنه همه‌چیز چند کیلومتر جابه‌جا نمایش داده می‌شود.',
      en: 'Most GIS project time is not spent writing code but reconciling projections and data quality. First I confirm the source CRS matches the map projection, otherwise everything renders kilometres off.',
    },
    tags: ['GIS', 'Maps', 'WMS/WFS'],
  },
  {
    id: 'cypress',
    title: 'Cypress',
    icon: FaVial,
    category: 'quality',
    level: 'intermediate',
    minutes: 4,
    tagline: {
      fa: 'تست سرتاسری در مرورگر واقعی، با اجرای پله‌پله و دیباگ آسان.',
      en: 'End-to-end testing in a real browser, with step-by-step runs and easy debugging.',
    },
    why: {
      fa: 'در گردش کارهای سازمانی، یک فرم چندمرحله‌ای می‌تواند ده‌ها حالت داشته باشد. تست سرتاسری مطمئن می‌شود مسیر کاربر واقعی بعد از هر تغییر همچنان کار می‌کند.',
      en: 'In enterprise workflows a multi-step form can have dozens of states. End-to-end tests make sure the real user path still works after every change.',
    },
    concepts: {
      fa: [
        'تست را از دید کاربر بنویس، نه از دید پیاده‌سازی.',
        'انتخاب‌گرهای پایدار (data-testid) از کلاس‌های CSS قابل اعتمادترند.',
        'درخواست‌های شبکه را stub کن تا تست به سرویس بیرونی وابسته نباشد.',
        'تست‌های کند و شکننده را حذف کن؛ تست بی‌اعتماد بدتر از نداشتن تست است.',
      ],
      en: [
        'Write tests from the user perspective, not the implementation.',
        'Stable selectors (data-testid) beat CSS classes.',
        'Stub network requests so tests do not depend on external services.',
        'Delete slow, flaky tests — untrusted tests are worse than none.',
      ],
    },
    snippet: {
      language: 'ts',
      code: `it('submits the workflow form', () => {
  cy.visit('/workflow/new');
  cy.findByLabelText('عنوان').type('درخواست مرخصی');
  cy.findByRole('button', { name: 'ثبت' }).click();
  cy.contains('درخواست شما ثبت شد').should('be.visible');
});`,
    },
    detail: {
      fa: 'قاعدهٔ من: برای منطق خالص تست واحد، برای مسیرهای حیاتی تست سرتاسری. تلاش برای پوشش همه‌چیز با Cypress فقط مجموعه‌ای کند و ناپایدار می‌سازد.',
      en: 'My rule: unit tests for pure logic, end-to-end tests for critical journeys. Trying to cover everything with Cypress only produces a slow, flaky suite.',
    },
    tags: ['Testing', 'E2E', 'Quality'],
  },
  {
    id: 'tailwindcss',
    title: 'TailwindCSS',
    icon: FaCss3Alt,
    category: 'frontend',
    level: 'beginner',
    minutes: 4,
    tagline: {
      fa: 'استایل‌دهی با کلاس‌های کوچک و یک مقیاس طراحی مشترک.',
      en: 'Styling with small utilities and one shared design scale.',
    },
    why: {
      fa: 'در تیم‌های کوچک، بزرگ‌ترین مشکل CSS نبود نام‌گذاری نیست؛ نبود مقیاس مشترک است. Tailwind فاصله‌ها، رنگ‌ها و اندازه‌ها را محدود می‌کند و نتیجه به‌طور طبیعی یکدست می‌شود.',
      en: 'In small teams the biggest CSS problem is not naming — it is a missing shared scale. Tailwind constrains spacing, colour and size so the result is consistent by default.',
    },
    concepts: {
      fa: [
        'کلاس‌ها در markup می‌مانند؛ دیگر CSS یتیم و بدون استفاده نداریم.',
        'design token‌ها را در تنظیمات تعریف کن تا تیم یک زبان داشته باشد.',
        'کلاس‌های تکراری را در یک کامپوننت خلاصه کن، نه در یک فایل CSS.',
        'برای حالت‌های پیچیده از CSS خام استفاده کن؛ Tailwind جایگزین آن نیست.',
      ],
      en: [
        'Classes live in the markup, so there is no orphan CSS.',
        'Define design tokens in config so the team shares one language.',
        'Extract repeated classes into a component, not a CSS file.',
        'Use plain CSS for complex cases; Tailwind does not replace it.',
      ],
    },
    snippet: {
      language: 'tsx',
      code: `<button className="rounded-full px-6 py-3 text-sm font-semibold
  bg-accent text-white shadow-glow
  transition hover:-translate-y-0.5
  focus-visible:ring-2 focus-visible:ring-accent">
  شروع
</button>`,
    },
    detail: {
      fa: 'برای RTL، ویژگی‌های منطقی (margin-inline-start به‌جای margin-left) را ترجیح می‌دهم. یک رابط که فقط با تغییر dir درست شود، از یک رابط که به‌ازای هر زبان بازنویسی شود بسیار قابل نگه‌داری‌تر است — همین سایت نمونهٔ آن است.',
      en: 'For RTL I prefer logical properties (margin-inline-start over margin-left). An interface that works by flipping dir is far more maintainable than one rewritten per language — this site is the proof.',
    },
    tags: ['CSS', 'Design system', 'RTL'],
  },
  {
    id: 'fastapi',
    title: 'Python / FastAPI',
    icon: FaPython,
    category: 'backend',
    level: 'intermediate',
    minutes: 5,
    tagline: {
      fa: 'ساخت API سریع در پایتون، با اعتبارسنجی خودکار و مستندات زنده.',
      en: 'Fast Python APIs with automatic validation and live docs.',
    },
    why: {
      fa: 'وقتی سرویس باید داده را تحلیل کند یا به مدل نزدیک باشد، پایتون انتخاب طبیعی است. FastAPI با Pydantic، تایپ‌ها را در زمان اجرا هم بررسی می‌کند و مستندات OpenAPI را بدون کار اضافه می‌سازد.',
      en: 'When a service analyses data or sits next to a model, Python is the natural choice. With Pydantic, FastAPI validates types at runtime and generates OpenAPI docs for free.',
    },
    concepts: {
      fa: [
        'مدل Pydantic هم اعتبارسنجی می‌کند و هم تایپ می‌دهد.',
        'وابستگی‌ها (Depends) احراز هویت و نشست را تمیز جدا می‌کنند.',
        'async برای I/O مناسب است؛ کار سنگین CPU را به صف بسپار.',
        'مهاجرت پایگاه داده با Alembic نسخه‌بندی می‌شود.',
      ],
      en: [
        'A Pydantic model both validates and types.',
        'Dependencies (Depends) keep auth and sessions cleanly separated.',
        'async suits I/O; hand heavy CPU work to a queue.',
        'Version database changes with Alembic migrations.',
      ],
    },
    snippet: {
      language: 'py',
      code: `class ProjectIn(BaseModel):
    title: str = Field(min_length=3, max_length=80)
    tags: list[str] = []

@app.post("/projects", status_code=201)
async def create_project(payload: ProjectIn, db: Session = Depends(get_db)):
    return db.create(payload)`,
    },
    detail: {
      fa: 'بیشترین سود FastAPI در پروژه‌هایی بود که چند مصرف‌کنندهٔ مختلف (وب، موبایل، ابزار داخلی) داشتند؛ چون قرارداد API خودش مستند و قابل تست است. نقطهٔ ضعفش هم همان جاست که منطق دامنه پیچیده می‌شود و به ساختار ماژولار بیشتری نیاز دارید.',
      en: 'FastAPI paid off most where several consumers (web, mobile, internal tools) shared an API, because the contract documents itself. Its weak spot appears when domain logic grows and you need more modular structure.',
    },
    tags: ['Python', 'API', 'Pydantic'],
  },
  {
    id: 'algorithms',
    title: 'الگوریتم و پیچیدگی',
    icon: FaCubes,
    category: 'foundations',
    level: 'advanced',
    minutes: 6,
    tagline: {
      fa: 'انتخاب ساختار دادهٔ درست، اغلب مهم‌تر از بهینه‌سازی ریز کد است.',
      en: 'Choosing the right data structure usually matters more than micro-optimisation.',
    },
    why: {
      fa: 'تحصیلات ارشدم در الگوریتم‌ها و نظریهٔ محاسبات باعث شده قبل از نوشتن کد، به اندازهٔ داده و الگوی دسترسی فکر کنم. همین نگاه، در جدول‌های سنگین سازمانی تفاوت محسوسی ساخته است.',
      en: 'My MSc in algorithms and computation theory taught me to think about data size and access patterns before writing code. That habit has made a visible difference on heavy enterprise tables.',
    },
    concepts: {
      fa: [
        'O بزرگ، رشد را توصیف می‌کند نه زمان دقیق را؛ اما جهت را درست نشان می‌دهد.',
        'جست‌وجو در مجموعهٔ مرتب با دودویی، از پیمایش خطی بسیار ارزان‌تر است.',
        'کش و memoization وقتی تکرار زیاد است، هزینه را یک‌بار پرداخت می‌کند.',
        'گاهی ساده‌ترین الگوریتم برای n کوچک، بهترین انتخاب است.',
      ],
      en: [
        'Big O describes growth, not exact time — but it gets the direction right.',
        'Binary search on a sorted set is far cheaper than a linear scan.',
        'Caching or memoisation pays the cost once when repeats are frequent.',
        'For small n, the simplest algorithm is often the right one.',
      ],
    },
    snippet: {
      language: 'ts',
      code: `// گروه‌بندی در یک گذر: O(n) به‌جای O(n²)
const byStatus = items.reduce<Record<string, Item[]>>((acc, item) => {
  (acc[item.status] ??= []).push(item);
  return acc;
}, {});`,
    },
    detail: {
      fa: 'در عمل، پروفایل گرفتن قبل از بهینه‌سازی را جدی می‌گیرم؛ چون حدس من دربارهٔ گلوگاه اغلب اشتباه است. ابتدا اندازه بگیر، بعد تغییر بده — و بعد دوباره اندازه بگیر.',
      en: 'In practice I profile before optimising, because my guess about the bottleneck is often wrong. Measure first, then change — then measure again.',
    },
    tags: ['Algorithms', 'Performance', 'CS'],
  },
];

export const roadmap: { step: string; title: Bilingual; body: Bilingual }[] = [
  {
    step: '01',
    title: { fa: 'پایهٔ وب و جاوااسکریپت', en: 'Web and JavaScript fundamentals' },
    body: {
      fa: 'HTML، CSS و جاوااسکریپت مدرن (ES6+). بدون این پایه، هر فریم‌ورکی شکننده است. یک صفحهٔ ساده بدون کتابخانه بساز.',
      en: 'HTML, CSS and modern JavaScript (ES6+). Without this base every framework feels brittle. Build one simple page with no library.',
    },
  },
  {
    step: '02',
    title: { fa: 'React و TypeScript', en: 'React and TypeScript' },
    body: {
      fa: 'کامپوننت، وضعیت و افکت را یاد بگیر و هم‌زمان تایپ‌ها را جدی بگیر. یک اپ کوچک با فرم و لیست بساز؛ همان‌جا مدیریت وضعیت (Zustand) را اضافه کن.',
      en: 'Learn components, state and effects while taking types seriously. Build a small app with a form and a list, then add state management (Zustand).',
    },
  },
  {
    step: '03',
    title: { fa: 'بک‌اند و داده', en: 'Back-end and data' },
    body: {
      fa: 'یک API با NestJS یا FastAPI بساز و به PostgreSQL وصلش کن. مدل داده، اعتبارسنجی و مهاجرت را تمرین کن.',
      en: 'Build an API with NestJS or FastAPI and connect it to PostgreSQL. Practise modelling, validation and migrations.',
    },
  },
  {
    step: '04',
    title: { fa: 'تست، استقرار و نگه‌داری', en: 'Testing, deployment and maintenance' },
    body: {
      fa: 'مسیرهای حیاتی را با Cypress تست کن، اپ را داکرایز کن و منتشرش کن. سپس کد خودت را شش ماه بعد بخوان — این بهترین معیار یادگیری است.',
      en: 'Test critical journeys with Cypress, containerise the app and ship it. Then read your own code six months later — the best learning benchmark there is.',
    },
  },
];
