import type { IconType } from 'react-icons';
import { FaMapLocationDot, FaPuzzlePiece, FaLaptopCode, FaShieldHalved } from 'react-icons/fa6';
import type { Bilingual } from '../lib/lang';

export interface ProcessStep {
  step: string;
  title: Bilingual;
  body: Bilingual;
  icon: IconType;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: { fa: 'کشف و تعریف', en: 'Discover & define' },
    body: {
      fa: 'قبل از کد: کاربر کیست، داده از کجا می‌آید و «موفقیت» چه شکلی دارد. یک صفحهٔ مشخصات کوتاه، جلوی دوباره‌کاری‌های گران را می‌گیرد.',
      en: 'Before code: who the user is, where data comes from, and what success looks like. A one-page spec prevents expensive rework.',
    },
    icon: FaMapLocationDot,
  },
  {
    step: '02',
    title: { fa: 'طراحی و معماری', en: 'Design & architecture' },
    body: {
      fa: 'مدل داده و مرز کامپوننت‌ها، قبل از زیبایی. مرزهای درست یعنی اضافه کردن یک صفحهٔ جدید، کار یک روز باشد نه یک هفته.',
      en: 'Data model and component boundaries before visual polish. Right boundaries mean a new page is a day of work, not a week.',
    },
    icon: FaPuzzlePiece,
  },
  {
    step: '03',
    title: { fa: 'پیاده‌سازی تدریجی', en: 'Incremental build' },
    body: {
      fa: 'تحویل در تکه‌های قابل تست؛ هر تکه با حالت‌های خالی، بارگذاری و خطا. هیچ صفحه‌ای بدون بررسی موبایل تحویل نمی‌شود.',
      en: 'Delivery in testable slices, each with empty, loading and error states. No screen ships without a mobile pass.',
    },
    icon: FaLaptopCode,
  },
  {
    step: '04',
    title: { fa: 'تست و تحویل', en: 'Test & hand over' },
    body: {
      fa: 'تست مسیرهای حیاتی، مستندسازی تصمیم‌ها و استقرار تکرارپذیر. کد بدون راهنمای ادامه دادن، تحویل نشده است.',
      en: 'Testing critical journeys, documenting decisions and repeatable deployment. Code without a continuation guide is not delivered.',
    },
    icon: FaShieldHalved,
  },
];
