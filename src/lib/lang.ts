export type Lang = 'fa' | 'en';

export type Bilingual = { fa: string; en: string };
export type BilingualList = { fa: string[]; en: string[] };

/** Pick the right language out of a bilingual content record. */
export function tr(value: Bilingual | string, lang: string): string {
  if (typeof value === 'string') return value;
  return lang === 'en' ? value.en : value.fa;
}

export function trList(value: BilingualList, lang: string): string[] {
  return lang === 'en' ? value.en : value.fa;
}

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

/** Render Latin digits as Persian digits when the locale is Persian. */
export function num(value: number | string, lang: string): string {
  const text = String(value);
  if (lang === 'en') return text;
  return text.replace(/[0-9]/g, (d) => faDigits[Number(d)]);
}

export function isRtl(lang: string): boolean {
  return lang !== 'en';
}
