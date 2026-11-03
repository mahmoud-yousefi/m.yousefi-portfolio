import type { Bilingual, BilingualList } from '../lib/lang';

export interface Post {
  id: string;
  title: Bilingual;
  excerpt: Bilingual;
  body: BilingualList;
  date: Bilingual;
  minutes: number;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 'exclusive-states',
    title: {
      fa: 'وضعیت‌های انحصاری: راهی برای حذف باگ‌های «غیرممکن»',
      en: 'Exclusive states: removing the impossible bugs',
    },
    excerpt: {
      fa: 'هر بار که isLoading و isError و data را جدا نگه می‌داریم، یک حالت غیرممکن می‌سازیم که دیر یا زود اتفاق می‌افتد.',
      en: 'Every time isLoading, isError and data live as separate flags, we create an impossible state that eventually happens.',
    },
    body: {
      fa: [
        'در فرم‌های سازمانی، سه boolean جداگانه برای بارگذاری، خطا و داده کافی است تا روزی صفحه‌ای ببینیم که هم‌زمان «در حال بارگذاری» و «خطا» است. مشکل از منطق نیست؛ از مدل داده است: چهار حالت ممکن را با سه متغیر مستقل می‌سازیم که ۸ ترکیب دارند و فقط ۳ تای آن‌ها معنا دارند.',
        'راه‌حل ساده است: یک union با یک فیلد تشخیص‌دهنده. کامپایلر TypeScript وقتی داخل شرط status === "ok" هستید، وجود data را تضمین می‌کند و اجازه نمی‌دهد حالت‌های بی‌معنی را بنویسید.',
        'در عمل، بازنویسی همهٔ حالت‌ها به union یک بار انجام می‌شود و بعد از آن، هر حالت جدید که اضافه می‌شود کامپایلر همهٔ جاهایی که باید رسیدگی شوند را نشان می‌دهد. این دقیقاً همان چیزی است که از تایپ انتظار داریم: نه مستند، بلکه نگهبان.',
      ],
      en: [
        'In enterprise forms, three separate booleans for loading, error and data are enough to eventually show a page that is loading and failed at the same time. The bug is not in the logic but in the model: four possible states encoded as three independent variables gives eight combinations of which only three make sense.',
        'The fix is a union with a discriminating field. Inside a status === "ok" branch, TypeScript guarantees data exists and refuses to let you write meaningless combinations.',
        'In practice the rewrite happens once, and afterwards every new state shows you — through the compiler — every place that must handle it. That is what types are for: not documentation, but a guard.',
      ],
    },
    date: { fa: 'مهر ۱۴۰۵', en: 'Sep 2026' },
    minutes: 4,
    tags: ['TypeScript', 'React', 'State'],
  },
  {
    id: 'rtl-logical-properties',
    title: { fa: 'RTL بدون بازنویسی: ویژگی‌های منطقی در CSS', en: 'RTL without a rewrite: logical properties in CSS' },
    excerpt: {
      fa: 'اگر margin-left می‌نویسید، برای فارسی باید یک نسخهٔ دوم بسازید. اگر margin-inline-start بنویسید، هیچ.',
      en: 'Write margin-left and you need a second version for Persian. Write margin-inline-start and you need none.',
    },
    body: {
      fa: [
        'اولین نسخهٔ یک سایت دوزبانه معمولاً با کلاس‌های rtl: و ltr: پر می‌شود. کار می‌کند، اما هر کامپوننت جدید دو برابر کلاس دارد و یک جا حتماً فراموش می‌شود.',
        'ویژگی‌های منطقی (inline-start / inline-end به‌جای left / right) این مشکل را از ریشه حل می‌کنند: جهت را مرورگر از روی dir تشخیص می‌دهد و ما فقط یک نسخه می‌نویسیم. در Tailwind معادلشان ps/pe/ms/me و text-start/text-end است.',
        'نکتهٔ ظریف: برای آیکون‌هایی که معنای جهت دارند (مثل فلش «بعدی») باید آگاهانه آینه شوند، اما برای فاصله‌ها و چیدمان، ویژگی منطقی همیشه انتخاب درست است. نتیجه: یک استایل‌شیت، دو زبان، بدون شاخهٔ شرطی.',
      ],
      en: [
        'The first version of a bilingual site usually fills up with rtl: and ltr: classes. It works, but every new component carries double the classes and one place is always forgotten.',
        'Logical properties (inline-start / inline-end instead of left / right) solve it at the source: the browser derives direction from dir and we write one version. In Tailwind the equivalents are ps/pe/ms/me and text-start/text-end.',
        'The subtlety: icons with directional meaning (like a "next" arrow) should be mirrored deliberately, but for spacing and layout, logical properties are always the right call. The result is one stylesheet, two languages, no conditionals.',
      ],
    },
    date: { fa: 'شهریور ۱۴۰۵', en: 'Aug 2026' },
    minutes: 3,
    tags: ['CSS', 'RTL', 'i18n'],
  },
  {
    id: 'scroll-reveal-no-library',
    title: { fa: 'انیمیشن اسکرول بدون کتابخانه', en: 'Scroll animation without a library' },
    excerpt: {
      fa: 'برای «ظاهر شدن هنگام اسکرول» نه Framer Motion لازم است نه پلاگین؛ یک IntersectionObserver و دو خط CSS کافی است.',
      en: 'For scroll reveal you need neither Framer Motion nor a plugin: one IntersectionObserver and two lines of CSS.',
    },
    body: {
      fa: [
        'الگوی کار ساده است: عنصر با کلاس reveal و opacity صفر شروع می‌کند، یک IntersectionObserver وقتی وارد دید شد کلاس is-in را اضافه می‌کند و CSS بقیه را با transition انجام می‌دهد. مرورگر این کار را روی لایهٔ کامپوزیت انجام می‌دهد، پس هزینه‌اش بسیار کم است.',
        'دو نکته که تجربهٔ کاربری را نجات می‌دهد: اول، انیمیشن یک‌باره باشد — عنصری که یک بار ظاهر شده نباید هنگام اسکرول به عقب دوباره ناپدید شود. دوم، prefers-reduced-motion را جدی بگیرید؛ برای بعضی کاربران این حرکت‌ها آزاردهنده یا مشکل‌ساز است.',
        'در همین سایت، یک observer مشترک بین همهٔ بخش‌ها استفاده می‌شود و بعد از اولین نمایش، عنصر از فهرست رصد حذف می‌شود. نتیجه: بدون وابستگی اضافه، بدون رندر مجدد و بدون اثر روی امتیاز عملکرد.',
      ],
      en: [
        'The pattern is simple: an element starts with class reveal and zero opacity, an IntersectionObserver adds is-in when it enters the viewport, and CSS handles the rest with a transition. The browser does this on the compositor, so it is cheap.',
        'Two details that save the experience: make it one-shot — an element that appeared should not vanish when you scroll back. And respect prefers-reduced-motion; for some users these motions are unpleasant or harmful.',
        'On this site a single shared observer serves every section and unhooks an element after its first reveal. The result: no extra dependency, no re-renders, no hit to performance scores.',
      ],
    },
    date: { fa: 'مرداد ۱۴۰۵', en: 'Jul 2026' },
    minutes: 4,
    tags: ['CSS', 'Performance', 'UX'],
  },
  {
    id: 'zustand-vs-redux',
    title: { fa: 'Zustand یا Redux؟ معیار انتخاب', en: 'Zustand or Redux? How I choose' },
    excerpt: {
      fa: 'هیچ‌کدام «بهتر» نیستند؛ مسئله این است که چه مقدار ساختار لازم دارید و چه کسی آن را نگه می‌دارد.',
      en: 'Neither is "better". The question is how much structure you need and who maintains it.',
    },
    body: {
      fa: [
        'Redux Toolkit را وقتی انتخاب می‌کنم که تیم بزرگ است، رویدادها باید قابل ردیابی باشند و منطق پیچیده‌ای مثل undo/redo یا همگام‌سازی چندبخشی داریم. ساختار بیشتر، اینجا هزینه نیست؛ سرمایه‌گذاری است.',
        'Zustand را وقتی انتخاب می‌کنم که وضعیت مشترک محدود است (کاربر، تم، فیلترها) و تعداد کامپوننت‌هایی که به آن نیاز دارند زیاد نیست. یک استور، چند اکشن، تمام. تعداد فایل‌های کمتر یعنی تغییر سریع‌تر.',
        'معیار عملی من: اگر می‌توانید همهٔ اکشن‌های وضعیت را در یک صفحه بنویسید، Redux بیش از نیاز است. اگر منطق وضعیت خودش یک ماژول قابل تست است، Redux Toolkit را انتخاب کنید. و در هر دو حالت، وضعیت سرور را از وضعیت رابط جدا نگه دارید — این مهم‌تر از انتخاب کتابخانه است.',
      ],
      en: [
        'I pick Redux Toolkit when the team is large, actions must be traceable, and there is complex logic such as undo/redo or multi-slice synchronisation. More structure is not a cost there; it is an investment.',
        'I pick Zustand when shared state is limited (user, theme, filters) and only a few components need it. One store, a few actions, done. Fewer files means faster change.',
        'My practical test: if you can list every action on a single page, Redux is overkill. If the state logic is itself a testable module, choose Redux Toolkit. In both cases, keep server state separate from UI state — that matters more than the library.',
      ],
    },
    date: { fa: 'تیر ۱۴۰۵', en: 'Jun 2026' },
    minutes: 5,
    tags: ['Zustand', 'Redux', 'Architecture'],
  },
];
