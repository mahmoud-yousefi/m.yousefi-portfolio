import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaClock } from 'react-icons/fa6';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { posts } from '../content/posts';
import { num, tr, trList } from '../lib/lang';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [openId, setOpenId] = useState<string | null>(posts[0]?.id ?? null);

  return (
    <section id="blog" className="section">
      <div className="container-x">
        <SectionHeading index="07" kicker={t('blog.kicker')} title={t('blog.title')} lead={t('blog.lead')} />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {posts.map((post, index) => {
            const open = openId === post.id;
            return (
              <Reveal key={post.id} delay={index * 50}>
                <article>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : post.id)}
                    aria-expanded={open}
                    className="group flex w-full items-start gap-4 py-6 text-start"
                  >
                    <span className="mt-1 font-mono text-[11px] text-muted/70">{String(index + 1).padStart(2, '0')}</span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-ink transition group-hover:text-accent-soft sm:text-lg">
                          {tr(post.title, lang)}
                        </h3>
                      </div>
                      <p className="mt-2 text-[13px] leading-7 text-muted">{tr(post.excerpt, lang)}</p>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-muted">
                        <span>{tr(post.date, lang)}</span>
                        <span className="h-1 w-1 rounded-full bg-line" />
                        <span className="inline-flex items-center gap-1">
                          <FaClock className="h-2.5 w-2.5" />
                          {num(post.minutes, lang)} {t('blog.readTime')}
                        </span>
                        {post.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-raised px-1.5 py-0.5 text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span
                      className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-500 group-hover:border-accent/50 group-hover:text-ink ${
                        open ? 'rotate-180' : ''
                      }`}
                    >
                      <FaChevronDown className="h-3 w-3" />
                    </span>
                  </button>

                  <div
                    aria-hidden={!open}
                    className={`grid transition-all duration-500 ease-smooth ${
                      open ? 'grid-rows-[1fr] pb-8 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ms-0 max-w-3xl space-y-4 border-s-2 border-accent/30 ps-5 sm:ms-8">
                        {trList(post.body, lang).map((paragraph, i) => (
                          <p key={i} className="text-[13.5px] leading-8 text-muted">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
