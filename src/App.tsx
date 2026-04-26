/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle, Wind, Sun, Coffee, Waves, Star, MapPin, User, Wifi, Phone, ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { LangContext, LANGS, TRANSLATIONS, useT, useLang, type Lang } from './i18n';

function LangSwitcher({ tone = 'dark', useFlags = false }: { tone?: 'dark' | 'light'; useFlags?: boolean }) {
  const { lang, setLang } = useLang();
  const isDark = tone === 'dark';

  if (useFlags) {
    return (
      <div className="flex items-center gap-3">
        {LANGS.map(({ code, flag }) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`text-2xl transition-all duration-200 ${
              lang === code
                ? 'scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                : 'opacity-40 hover:opacity-80 hover:scale-110'
            }`}
            aria-label={code.toUpperCase()}
          >
            {flag}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-0.5 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase ${isDark ? 'text-[#2C2C2C]/60' : 'text-white/70'}`}>
      {LANGS.map(({ code, label }, i) => (
        <React.Fragment key={code}>
          {i > 0 && <span className={`mx-0.5 ${isDark ? 'text-[#2C2C2C]/20' : 'text-white/30'}`}>·</span>}
          <button
            onClick={() => setLang(code)}
            className={`px-1 py-0.5 transition-colors ${lang === code ? (isDark ? 'text-[#2C2C2C]' : 'text-white') : (isDark ? 'hover:text-[#2C2C2C]' : 'hover:text-white')}`}
          >
            {label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

type GalleryCardProps = {
  src: string;
  alt: string;
  label: string;
  index: number;
  className?: string;
};

function GalleryCard({ src, alt, label, index, className = '' }: GalleryCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.08 + 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden group relative shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent md:from-black/55 md:via-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
      {label && (
        <figcaption className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8 right-5 sm:right-8 text-white font-serif text-xl sm:text-2xl opacity-100 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 drop-shadow-lg">
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

function PlayaWidget() {
  const t = useT();
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      style={{
        aspectRatio: '2 / 1',
        boxShadow: hover
          ? '0 18px 40px rgba(40,25,10,0.16), 0 2px 6px rgba(40,25,10,0.08)'
          : '0 4px 12px rgba(40,25,10,0.06)',
        transition: 'box-shadow 400ms ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="/img/playa.webp"
        alt="Playa de Barbate, Costa de la Luz, a 5 minutos a pie de Casa Moli"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        style={{
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 900ms cubic-bezier(.22,.61,.36,1)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(10,30,40,0.7) 0%, rgba(10,30,40,0.28) 55%, rgba(10,30,40,0) 80%)' }}
      />
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center text-[#f5ede0]"
        style={{ width: '55%', padding: 'clamp(20px,4%,44px) clamp(24px,4.5%,48px)' }}>
        <div style={{ fontSize: 'clamp(10px,1.15vw,12px)', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.9em' }}>
          {t.widget.playaEyebrow}
        </div>
        <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(28px,4.8vw,52px)', lineHeight: 1.0, letterSpacing: '-0.015em', fontWeight: 400, marginBottom: '0.45em' }}>
          {t.widget.playaTitle1}<br />
          <span style={{ fontStyle: 'italic', opacity: 0.92 }}>{t.widget.playaTitle2}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3" style={{ fontSize: 'clamp(11px,1.35vw,14px)', color: 'rgba(245,237,224,0.88)' }}>
          <span className="inline-flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 12c4-4 8-4 10 0s6 4 10 0M2 12c4 4 8 4 10 0s6-4 10 0" /></svg>
            {t.widget.playaCity}
          </span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span className="inline-flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            {t.widget.playaTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function MesaWidget() {
  const t = useT();
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      style={{
        aspectRatio: '2 / 1',
        boxShadow: hover
          ? '0 18px 40px rgba(40,25,10,0.16), 0 2px 6px rgba(40,25,10,0.08)'
          : '0 4px 12px rgba(40,25,10,0.06)',
        transition: 'box-shadow 400ms ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="/img/casa/mesapatio.avif"
        alt="Mesa para cuatro en el patio andaluz de Casa Moli, Barbate"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        style={{
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 900ms cubic-bezier(.22,.61,.36,1)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(30,20,12,0.65) 0%, rgba(30,20,12,0.26) 55%, rgba(30,20,12,0) 80%)' }}
      />
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center text-[#f5ede0]"
        style={{ width: '55%', padding: 'clamp(20px,4%,44px) clamp(24px,4.5%,48px)' }}>
        <div style={{ fontSize: 'clamp(10px,1.15vw,12px)', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.9em' }}>
          {t.widget.mesaEyebrow}
        </div>
        <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(28px,4.8vw,52px)', lineHeight: 1.0, letterSpacing: '-0.015em', fontWeight: 400, marginBottom: '0.45em' }}>
          {t.widget.mesaTitle1}<br />
          <span style={{ fontStyle: 'italic', opacity: 0.92 }}>{t.widget.mesaTitle2}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3" style={{ fontSize: 'clamp(11px,1.35vw,14px)', color: 'rgba(245,237,224,0.88)' }}>
          <span className="inline-flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3" /><path d="M3 19c1-3 3.3-4.5 6-4.5s5 1.5 6 4.5" /><circle cx="17" cy="7" r="2.5" /><path d="M15 14c2.5 0 5 1.2 6 4" /></svg>
            4
          </span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span className="inline-flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M3 21h18" /><circle cx="14.5" cy="13" r="0.5" fill="currentColor" /></svg>
            2
          </span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span className="inline-flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12V6a2 2 0 0 1 4 0" /><path d="M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /><path d="M6 19l-1 2M18 19l1 2" /></svg>
            2
          </span>
        </div>
      </div>
    </motion.div>
  );
}

type FaqItemProps = {
  key?: React.Key;
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ item, index, isOpen, onToggle }: FaqItemProps) {
  const [isHover, setIsHover] = useState(false);
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative"
    >
      {/* Animated left rail when open or hovered */}
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-px bg-[#2C2C2C]"
        initial={false}
        animate={{
          scaleY: isOpen ? 1 : isHover ? 0.4 : 0,
          opacity: isOpen ? 1 : isHover ? 0.5 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left py-5 sm:py-7 pl-5 sm:pl-8 pr-3 sm:pr-4 flex items-start gap-4 sm:gap-6 cursor-pointer group focus:outline-none"
      >
        {/* Index number */}
        <motion.span
          aria-hidden
          className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#2C2C2C]/40 mt-2 flex-shrink-0 tabular-nums"
          animate={{
            color: isOpen ? 'rgba(44,44,44,0.9)' : isHover ? 'rgba(44,44,44,0.7)' : 'rgba(44,44,44,0.4)',
            x: isOpen ? 2 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {number}
        </motion.span>

        {/* Question */}
        <motion.h3
          className="flex-1 font-serif text-lg sm:text-xl md:text-2xl leading-snug"
          animate={{
            color: isOpen ? '#2C2C2C' : isHover ? '#2C2C2C' : 'rgba(44,44,44,0.85)',
          }}
          transition={{ duration: 0.3 }}
        >
          {item.q}
        </motion.h3>

        {/* Plus / Minus morphing icon */}
        <motion.span
          aria-hidden
          className="relative mt-1.5 sm:mt-2 flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center"
          animate={{
            backgroundColor: isOpen ? '#2C2C2C' : isHover ? 'rgba(44,44,44,0.06)' : 'rgba(255,255,255,0)',
            borderColor: isOpen ? '#2C2C2C' : 'rgba(44,44,44,0.25)',
            scale: isHover && !isOpen ? 1.08 : 1,
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          {/* Horizontal bar (always visible) */}
          <motion.span
            className="absolute h-px"
            animate={{
              backgroundColor: isOpen ? '#F9F8F6' : '#2C2C2C',
              width: isOpen ? 12 : 11,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Vertical bar (collapses when open) */}
          <motion.span
            className="absolute w-px"
            animate={{
              backgroundColor: isOpen ? '#F9F8F6' : '#2C2C2C',
              height: isOpen ? 0 : 11,
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </button>

      {/* Animated answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.4, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ y: -8, transition: { duration: 0.2 } }}
              className="pb-6 sm:pb-8 pl-12 sm:pl-[4.5rem] pr-12 sm:pr-16"
            >
              <p className="text-sm sm:text-base text-[#2C2C2C]/70 leading-relaxed font-light">
                {item.a}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqSection() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-16 sm:py-20 md:py-32 px-5 sm:px-6 lg:px-12 max-w-4xl mx-auto"
    >
      {/* Decorative ambient gradient */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(44,44,44,0.04), rgba(44,44,44,0) 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#2C2C2C]/50 mb-4 sm:mb-5"
        >
          FAQ
        </motion.span>
        <h2
          id="faq-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-[1.05]"
        >
          {t.faq.title}
        </h2>
        <p className="text-base sm:text-lg text-[#2C2C2C]/60 font-light max-w-xl mx-auto">
          {t.faq.subtitle}
        </p>
      </motion.div>

      <div className="relative">
        {/* Top hairline */}
        <span className="absolute top-0 left-0 right-0 h-px bg-[#2C2C2C]/10" />
        <div className="divide-y divide-[#2C2C2C]/10">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
        {/* Bottom hairline */}
        <span className="absolute bottom-0 left-0 right-0 h-px bg-[#2C2C2C]/10" />
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es';
    const saved = window.localStorage.getItem('casa-moli-lang') as Lang | null;
    if (saved && ['es', 'en', 'fr', 'de'].includes(saved)) return saved;
    const browser = (typeof navigator !== 'undefined' && navigator.language ? navigator.language.slice(0, 2) : 'es') as Lang;
    return ['es', 'en', 'fr', 'de'].includes(browser) ? browser : 'es';
  });
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') window.localStorage.setItem('casa-moli-lang', l);
  };
  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <AppInner />
    </LangContext.Provider>
  );
}

function AppInner() {
  const t = TRANSLATIONS[useLang().lang];
  const [ctaExpanded, setCtaExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setStickyNav(latest > window.innerHeight * 0.6);
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C2C2C] overflow-x-hidden font-sans selection:bg-[#2C2C2C] selection:text-[#F9F8F6]">

      {/* ===== STICKY FLOATING NAV (appears after scrolling past hero) ===== */}
      <AnimatePresence>
        {stickyNav && (
          <motion.div
            key="sticky-nav"
            initial={{ y: -120, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 280, damping: 30, mass: 0.9 },
            }}
            exit={{ y: -120, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }}
            className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4 pointer-events-none"
          >
            <nav className="pointer-events-auto mx-auto max-w-6xl relative flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/70 backdrop-blur-xl border border-[#2C2C2C]/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.18)]">
              <a href="#" className="flex items-center gap-2 sm:gap-3 flex-1">
                <img src="/img/logoarc.png" alt="Casa Moli — casa turística en Barbate" width="40" height="40" className="h-7 sm:h-8 w-auto" />
                <span className="text-base sm:text-lg font-serif tracking-wide text-[#2C2C2C] hidden xs:block">Casa Moli.</span>
              </a>

              <div className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-[#2C2C2C]/80 absolute left-1/2 -translate-x-1/2">
                {[
                  { href: '#concept', label: t.nav.concept },
                  { href: '#gallery', label: t.nav.gallery },
                  { href: '#faq', label: t.faq.title },
                  { href: '#location', label: t.nav.location },
                ].map(({ href, label }) => (
                  <a key={href} href={href} className="relative hover:text-[#2C2C2C] transition-colors group">
                    {label}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#2C2C2C] group-hover:w-full transition-[width] duration-400 ease-out" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-1 justify-end">
                <div className="hidden sm:block"><LangSwitcher tone="dark" /></div>
                <motion.a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#2C2C2C] text-[#F9F8F6] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  {t.nav.reserve}
                </motion.a>
                <motion.button
                  onClick={() => setMobileMenuOpen((v) => !v)}
                  whileTap={{ scale: 0.92 }}
                  aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
                  className="md:hidden p-2 bg-[#2C2C2C]/5 border border-[#2C2C2C]/10 rounded-full text-[#2C2C2C]"
                >
                  <Menu className="w-4 h-4" />
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== STICKY MOBILE MENU OVERLAY (works with the sticky nav too) ===== */}
      <AnimatePresence>
        {mobileMenuOpen && stickyNav && (
          <motion.div
            key="sticky-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-[#F9F8F6]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 px-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            {[
              { href: '#concept', label: t.nav.concept },
              { href: '#gallery', label: t.nav.gallery },
              { href: '#location', label: t.nav.location },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { type: 'spring', stiffness: 300, damping: 26, delay: 0.06 + i * 0.06 },
                }}
                exit={{ opacity: 0, y: 16, filter: 'blur(8px)', transition: { duration: 0.15 } }}
                className="font-serif text-4xl text-[#2C2C2C] tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}
            <div onClick={(e) => e.stopPropagation()}><LangSwitcher tone="dark" useFlags /></div>
            <motion.a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 26, delay: 0.28 } }}
              exit={{ opacity: 0, y: 16, transition: { duration: 0.15 } }}
              className="mt-4 bg-[#2C2C2C] text-[#F9F8F6] px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider"
            >
              {t.nav.reserve}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[100svh] md:h-screen w-full px-2 py-2 sm:px-4 sm:py-4">
        {/* Frame container to simulate a modern card look for the hero */}
        <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black text-white">

          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
            style={{
              backgroundImage: 'url("/img/bghero.png")',
            }}
          >
            {/* Darker bottom gradient so the arch sits naturally */}
            <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/30 via-transparent to-black/95 sm:from-black/20 sm:to-black/90"></div>
          </div>

          {/* Base fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-[6] pointer-events-none"></div>

          {/* Navigation */}
          <nav className="relative z-30 flex items-center px-4 py-5 sm:px-6 sm:py-8 md:px-12">
            <div className="flex items-center gap-2 sm:gap-3 flex-1">
              <img src="/img/logoarc.png" alt="Casa Moli — casa turística en Barbate, Cádiz" width="48" height="48" className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-serif tracking-wide hidden sm:block">Casa Moli.</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase absolute left-1/2 -translate-x-1/2">
              <a href="#concept" className="hover:text-white/70 transition-colors">{t.nav.concept}</a>
              <a href="#gallery" className="hover:text-white/70 transition-colors">{t.nav.gallery}</a>
              <a href="#faq" className="hover:text-white/70 transition-colors">{t.faq.title}</a>
              <a href="#location" className="hover:text-white/70 transition-colors">{t.nav.location}</a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end">
              <div className="hidden md:block"><LangSwitcher tone="light" /></div>
              <motion.a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  setCtaExpanded(true);
                  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:flex bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                {t.nav.reserve}
              </motion.a>
              <motion.button
                onClick={() => setMobileMenuOpen((v) => !v)}
                whileTap={{ scale: 0.92 }}
                aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
                className="md:hidden relative p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.span
                      key="x"
                      initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>

          {/* Mobile menu overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden absolute inset-0 z-20 bg-black/60 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {[
                  { href: '#concept', label: t.nav.concept },
                  { href: '#gallery', label: t.nav.gallery },
                  { href: '#location', label: t.nav.location },
                ].map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { type: 'spring', stiffness: 300, damping: 26, delay: 0.06 + i * 0.06 },
                    }}
                    exit={{ opacity: 0, y: 16, filter: 'blur(8px)', transition: { duration: 0.15 } }}
                    className="font-serif text-4xl text-white tracking-wide"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div onClick={(e) => e.stopPropagation()}><LangSwitcher tone="light" useFlags /></div>
                <motion.a
                  href="#book"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 26, delay: 0.28 } }}
                  exit={{ opacity: 0, y: 16, transition: { duration: 0.15 } }}
                  className="mt-4 bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider"
                >
                  {t.nav.reserve}
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Hero Content Area */}
          <main className="relative z-10 flex flex-col justify-center items-center h-[calc(100%-120px)] sm:h-[calc(100%-150px)] px-4">

            {/* Left Large Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:absolute left-8 xl:left-16 top-1/2 lg:-translate-y-1/2 text-center lg:text-left mb-3 lg:mb-0 w-full lg:w-auto"
            >
              <h1 className="font-serif text-[3.5rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.9] tracking-tight text-white drop-shadow-lg">
                Casa<br className="hidden lg:block" />
                <span className="lg:hidden"> </span>Moli.
              </h1>
            </motion.div>

            {/* Center Text framed inside the Arch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-sm lg:max-w-md xl:max-w-lg z-20 mb-8 lg:mb-0"
            >

            </motion.div>

            {/* Right Large Typography */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:absolute right-8 xl:right-16 top-1/2 lg:-translate-y-1/2 text-center lg:text-right w-full lg:w-auto mt-2 lg:mt-0"
            >
              <p className="font-serif text-[3.5rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.9] tracking-tight text-white drop-shadow-lg">
                <span className="lg:hidden"> </span>Del Sur.
              </p>
            </motion.div>

            {/* CTAs Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0 w-full flex justify-center px-4"
            >
              <motion.div
                id="book"
                layout
                className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.75rem] sm:rounded-[2rem] p-1.5 sm:p-2 flex flex-row items-center gap-1.5 sm:gap-2 shadow-2xl pointer-events-auto w-full sm:w-auto max-w-md sm:max-w-none"
                transition={{
                  layout: { type: 'spring', stiffness: 320, damping: 34, mass: 0.9 },
                }}
              >
                {/* Soft animated halo that shifts when the widget changes mode */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[2rem]"
                  initial={false}
                  animate={{
                    background: ctaExpanded
                      ? 'radial-gradient(120% 140% at 50% 0%, rgba(255,255,255,0.22), rgba(255,255,255,0) 60%)'
                      : 'radial-gradient(120% 140% at 50% 110%, rgba(255,255,255,0.14), rgba(255,255,255,0) 60%)',
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />

                <AnimatePresence mode="popLayout" initial={false}>
                  {!ctaExpanded && (
                    <motion.button
                      key="reserve"
                      layout
                      onClick={() => setCtaExpanded(true)}
                      initial={{ opacity: 0, scale: 0.6, filter: 'blur(8px)' }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        transition: { type: 'spring', stiffness: 360, damping: 28 },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.65,
                        filter: 'blur(8px)',
                        transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative flex flex-1 sm:flex-initial items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                        <span className="sm:hidden">{t.hero.reserve}</span>
                        <span className="hidden sm:inline">{t.hero.reserveLong}</span>
                      </span>
                    </motion.button>
                  )}

                  {!ctaExpanded && (
                    <motion.a
                      key="airbnb"
                      layout
                      href="https://www.airbnb.com/rooms/990479684820183934"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.6, filter: 'blur(8px)' }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        transition: { type: 'spring', stiffness: 360, damping: 28, delay: 0.05 },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.65,
                        filter: 'blur(8px)',
                        transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex flex-1 sm:flex-initial items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 hover:bg-white/10 rounded-full transition-colors group text-white border border-transparent hover:border-white/20"
                    >
                      <span className="text-xs sm:text-sm font-semibold tracking-wide group-hover:text-white/90 transition-colors whitespace-nowrap">
                        <span className="sm:hidden">{t.hero.airbnb}</span>
                        <span className="hidden sm:inline">{t.hero.airbnbLong}</span>
                      </span>
                      <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                      </div>
                    </motion.a>
                  )}

                  {ctaExpanded && (
                    <motion.button
                      key="back"
                      layout
                      onClick={() => setCtaExpanded(false)}
                      initial={{ opacity: 0, scale: 0.4, rotate: -140 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: { type: 'spring', stiffness: 380, damping: 26 },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.4,
                        rotate: 140,
                        transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                      }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={t.hero.back}
                      className="flex items-center justify-center w-11 h-11 sm:w-[3.25rem] sm:h-[3.25rem] bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  )}

                  {ctaExpanded && (
                    <motion.a
                      key="phone"
                      layout
                      href="tel:+34696742513"
                      initial={{ opacity: 0, scale: 0.55, x: -28, filter: 'blur(10px)' }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        filter: 'blur(0px)',
                        transition: { type: 'spring', stiffness: 360, damping: 28, delay: 0.06 },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.6,
                        x: -24,
                        filter: 'blur(8px)',
                        transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative flex flex-1 sm:flex-initial items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors group overflow-hidden"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 relative" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap relative">
                        {t.hero.phone}
                      </span>
                    </motion.a>
                  )}

                  {ctaExpanded && (
                    <motion.a
                      key="whatsapp"
                      layout
                      href="https://wa.me/34696742513"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.55, x: 28, filter: 'blur(10px)' }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        filter: 'blur(0px)',
                        transition: { type: 'spring', stiffness: 360, damping: 28, delay: 0.12 },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.6,
                        x: 24,
                        filter: 'blur(8px)',
                        transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative flex flex-1 sm:flex-initial items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors group overflow-hidden"
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 relative" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap relative">
                        {t.hero.whatsapp}
                      </span>
                    </motion.a>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

          </main>
        </div>
      </section>

      {/* ===== CONCEPT SECTION ===== */}
      <section id="concept" className="py-16 sm:py-20 md:py-32 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] sm:leading-[1.1] mb-6 sm:mb-8">
              {t.concept.headlinePart1}<br /><span className="italic text-neutral-400">{t.concept.headlinePart2}</span><br />{t.concept.headlinePart3}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#2C2C2C]/70 mb-6 sm:mb-8 font-light leading-relaxed">
              {t.concept.intro}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {[
                { Icon: Wind, title: t.concept.breezeTitle, desc: t.concept.breezeDesc },
                { Icon: Sun, title: t.concept.lightTitle, desc: t.concept.lightDesc },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col gap-3 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -6, borderColor: 'rgba(44,44,44,0.5)' }}
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#2C2C2C]/10 flex items-center justify-center bg-white/40 backdrop-blur-sm group-hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C2C2C]" />
                  </motion.div>
                  <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-widest">{title}</h4>
                  <p className="text-xs sm:text-sm text-[#2C2C2C]/60 font-light sm:pr-4">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden order-first lg:order-last shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 bg-[#2C2C2C]/10 z-10"></div>
            <img
              src="/img/casa/patio1.png"
              alt="Patio andaluz tradicional con encalado y plantas en Casa Moli, Barbate"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl z-20"
            >
              <p className="font-serif text-base sm:text-xl italic text-[#2C2C2C]">{t.concept.quote}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section id="gallery" className="py-16 sm:py-20 md:py-32 px-3 sm:px-6">
        <div className="bg-[#EBE7E0] rounded-[1.75rem] sm:rounded-[3rem] px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:px-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 px-2 sm:px-4"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{t.gallery.title}</h2>
            <p className="text-base sm:text-lg text-[#2C2C2C]/70 font-light leading-relaxed">
              {t.gallery.subtitleLine1}<br></br>{t.gallery.subtitleLine2}
            </p>
          </motion.div>

          {/* Masonry-ish Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 w-full max-w-7xl mx-auto">

            {/* Image 1: Living Room */}
            <GalleryCard
              src="/img/casa/salon.avif"
              alt="Salón principal de Casa Moli, casa turística en Barbate, Cádiz"
              label={t.gallery.livingRoom}
              index={0}
              className="md:col-span-8 aspect-[4/3] md:aspect-auto md:h-[60vh]"
            />

            {/* Image 2: Detail */}
            <GalleryCard
              src="/img/casa/mesapatio.avif"
              alt="Mesa para 4 personas en el patio andaluz de Casa Moli"
              label={t.gallery.patioTable}
              index={1}
              className="md:col-span-4 aspect-square md:aspect-auto md:h-[60vh]"
            />

            {/* Image 3: Bedroom 1 */}
            <GalleryCard
              src="/img/casa/habitacion1.avif"
              alt="Dormitorio con cama doble en Casa Moli, Barbate"
              label={t.gallery.bedroom}
              index={2}
              className="md:col-span-5 aspect-[4/5] md:h-[70vh] mt-0 md:mt-12"
            />

            {/* Image 4: Bathroom */}
            <GalleryCard
              src="/img/casa/bano.avif"
              alt="Baño completo de la casa turística Casa Moli en Barbate"
              label={t.gallery.bathroom}
              index={3}
              className="md:col-span-7 aspect-[4/3] md:h-[70vh] mt-0 md:mt-12"
            />

            {/* Image 5: Bedroom 2 */}
            <GalleryCard
              src="/img/casa/habitacion2.avif"
              alt="Segundo dormitorio de Casa Moli, alojamiento en Barbate"
              label={t.gallery.secondBedroom}
              index={4}
              className="md:col-span-6 aspect-[4/3] md:h-[60vh]"
            />

            {/* Image 6: Bedroom 2 detail */}
            <GalleryCard
              src="/img/casa/habitacion2p2.avif"
              alt="Detalle del segundo dormitorio en Casa Moli, Costa de la Luz"
              label=""
              index={5}
              className="md:col-span-6 aspect-[4/3] md:h-[60vh]"
            />

            {/* Row 4: Patios — asymmetric layout, one feature + two stacked */}
            <GalleryCard
              src="/img/casa/patio1.png"
              alt="Patio andaluz tradicional encalado de Casa Moli en el centro de Barbate"
              label={t.gallery.thePatio}
              index={6}
              className="md:col-span-7 aspect-[4/5] md:aspect-auto md:h-[80vh] mt-0 md:mt-12"
            />

            <div className="md:col-span-5 grid grid-cols-1 gap-3 sm:gap-4 mt-0 md:mt-12">
              <GalleryCard
                src="/img/casa/duchapatio.avif"
                alt="Ducha exterior en el patio andaluz de Casa Moli, Barbate"
                label={t.gallery.outdoorShower}
                index={7}
                className="aspect-[4/3] md:aspect-auto md:h-[calc(40vh-0.5rem)]"
              />
              <GalleryCard
                src="/img/casa/patio2.avif"
                alt="Vida al aire libre en el patio de Casa Moli, Costa de la Luz"
                label={t.gallery.outdoorLife}
                index={8}
                className="aspect-[4/3] md:aspect-auto md:h-[calc(40vh-0.5rem)]"
              />
            </div>

          </div>

          <div className="mt-12 sm:mt-20 w-full max-w-5xl border-t border-[#2C2C2C]/10 pt-10 sm:pt-16 px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <MesaWidget />
              <PlayaWidget />
            </div>
          </div>

        </div>
      </section >

      {/* ===== FAQ SECTION (SEO + LLMO) ===== */}
      <FaqSection />


      {/* ===== LOCATION & FOOTER ===== */}
      < footer id="location" className="bg-[#2C2C2C] text-[#F9F8F6] pt-16 sm:pt-24 pb-10 sm:pb-12 px-5 sm:px-6 lg:px-12 mt-10 sm:mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem]" >
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 mb-16 sm:mb-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col"
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8">{t.footer.title}</h2>
              <p className="text-[#F9F8F6]/80 leading-relaxed font-light text-base sm:text-lg xl:text-xl mb-8 sm:mb-12">
                {t.footer.description}
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -8, borderColor: 'rgba(249,248,246,0.6)' }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                    className="w-10 h-10 rounded-full border border-[#F9F8F6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/5 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#F9F8F6]" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-base sm:text-lg">{t.footer.locationTitle}</p>
                    <p className="text-xs sm:text-sm font-light text-[#F9F8F6]/60 mt-1">{t.footer.locationSubtitle}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 aspect-[4/3] md:aspect-[16/9] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white/5 p-1.5 sm:p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]"
            >
              <div className="w-full h-full rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden relative">
                <img
                  src="/img/bbtdron.png"
                  alt="Vista aérea de Barbate y la Costa de la Luz, Cádiz"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Area */}
          <div className="border-t border-[#F9F8F6]/10 pt-8 sm:pt-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 flex items-center gap-3">
              <img src="/img/logoarc.png" alt="Casa Moli — casa turística en Barbate, Cádiz" width="48" height="48" className="h-8 sm:h-10 w-auto mix-blend-screen" />
              <span className="text-lg sm:text-xl font-serif tracking-wide">Casa Moli.</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              {[
                { href: 'https://wa.me/34696742513', label: 'WhatsApp' },
                { href: 'https://www.airbnb.com/rooms/990479684820183934', label: 'Airbnb' },
              ].map(({ href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  className="relative text-xs sm:text-sm text-[#F9F8F6]/70 hover:text-white transition-colors uppercase tracking-widest font-medium group"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/80 group-hover:w-full transition-[width] duration-500 ease-out" />
                </motion.a>
              ))}
            </div>

            <div className="flex-1 flex justify-end text-xs sm:text-sm text-[#F9F8F6]/40 font-light">
              &copy; {new Date().getFullYear()} Casa Moli. {t.footer.rights}
            </div>
          </div>

        </div>
      </footer >

    </div >
  );
}

