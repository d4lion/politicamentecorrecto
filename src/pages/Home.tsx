import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight, Recycle, Droplets, Scissors, Gift,
  MapPin, Users, Package, Calendar, Quote,
  CheckCircle, Leaf, Shield, Award
} from 'lucide-react';
import farmVideo from '../assets/farm_video.mp4';
import homeData from '../data/home.data.json';
import globalData from '../data/global.data.json';
import './Home.css';

/* ── Icon lookup ─────────────────────────────────── */
const ICONS: Record<string, React.ReactNode> = {
  Package:     <Package size={28} />,
  Users:       <Users size={28} />,
  MapPin:      <MapPin size={28} />,
  Calendar:    <Calendar size={28} />,
  Recycle:     <Recycle />,
  Droplets:    <Droplets />,
  Scissors:    <Scissors />,
  Gift:        <Gift />,
  Shield:      <Shield size={18} />,
  Award:       <Award size={18} />,
  CheckCircle: <CheckCircle size={18} />,
  Leaf:        <Leaf size={18} />,
};

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.7, delay, ease: EASE },
});

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">

      {/* ─── HERO (video) ──────────────────────── */}
      <section className="hero">
        <div className="hero-bg">
          <video
            className="hero-bg-video"
            src={farmVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-badge"
          >
            <span className="badge badge-hero">
              <Leaf size={13} /> {t('home.hero_badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title"
          >
            {t('home.hero_title_1')} <br />
            <span className="hero-title-accent">{t('home.hero_title_accent_1')}</span> {t('home.hero_title_2')}<br />
            <span className="hero-title-accent">{t('home.hero_title_accent_2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hero-subtitle"
          >
            {t('home.hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hero-actions"
          >
            <button
              className="btn-hero-primary"
              onClick={() => document.getElementById('mision')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('home.cta_more')} <ArrowRight size={17} />
            </button>
            <button
              className="btn-hero-ghost"
              onClick={() => document.getElementById('estadisticas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('home.cta_impact')}
            </button>
          </motion.div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-dot" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── TRUST BAR ─────────────────────────── */}
      <section className="trust-bar">
        <div className="trust-bar-inner">
          {homeData.trustPoints.map((p, i) => (
            <div key={i} className="trust-item">
              <span className="trust-icon">{ICONS[p.icon]}</span>
              <span>{t(p.key)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION ───────────────────────────── */}
      <section id="mision" className="section-mission">
        <div className="container">
          <motion.div {...fadeUp(0)} className="section-intro">
            <span className="section-label">{t('home.mission.label')}</span>
            <h2 className="section-heading">{t('home.mission.title')}</h2>
          </motion.div>

          <div className="mission-grid">
            <motion.div {...fadeUp(0.1)} className="mission-text">
              <p>{t('home.mission.p1')}</p>
              <p>{t('home.mission.p2')}</p>
              <p className="mission-highlight">{t('home.mission.p3')}</p>
              <a href="/volunteer" className="btn-primary" style={{ marginTop: '8px', textDecoration: 'none' }}>
                {t('home.mission.cta')} <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mission-visual">
              <div className="img-placeholder">
                <div className="img-placeholder-inner">
                  <Package size={40} />
                  <span>{t('home.mission.img_alt')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────── */}
      <section id="estadisticas" className="section-stats">
        <div className="container">
          <motion.div {...fadeUp(0)} className="section-intro center">
            <span className="section-label">{t('home.stats.label')}</span>
            <h2 className="section-heading">{t('home.stats.title')}</h2>
          </motion.div>

          <div className="stats-grid">
            {homeData.stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="stat-card card">
                <div className="stat-icon">{ICONS[s.icon]}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{t(`home.stats.${s.key}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────── */}
      <section className="section-process">
        <div className="container">
          <motion.div {...fadeUp(0)} className="section-intro center">
            <span className="section-label">{t('home.process.label')}</span>
            <h2 className="section-heading">{t('home.process.title')}</h2>
          </motion.div>

          <div className="process-grid">
            {homeData.processSteps.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="process-card card">
                <div className="process-num">{s.num}</div>
                <div className="process-icon">{ICONS[s.icon]}</div>
                <p className="process-text">{t(`home.process.step${i + 1}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────── */}
      <section className="section-testimonials">
        <div className="container">
          <motion.div {...fadeUp(0)} className="section-intro center">
            <span className="section-label">{t('home.testimonials.label')}</span>
            <h2 className="section-heading">{t('home.testimonials.title')}</h2>
          </motion.div>

          <div className="testimonials-grid">
            {homeData.testimonials.map((item, i) => (
              <motion.div key={item.id} {...fadeUp(i * 0.12)} className="testimonial-card card">
                <Quote size={28} className="quote-icon" />
                <p className="quote-text">"{t(item.quote_key)}"</p>
                <div className="quote-author">
                  <div className="author-avatar">{t(item.author_key).charAt(0)}</div>
                  <div>
                    <div className="author-name">{t(item.author_key)}</div>
                    <div className="author-role">{t(item.role_key)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALLIES ────────────────────────────── */}
      <section className="section-allies">
        <div className="container">
          <motion.div {...fadeUp(0)} className="section-intro center">
            <span className="section-label">{t('home.allies.label')}</span>
            <h2 className="section-heading">{t('home.allies.title')}</h2>
            <p className="section-desc">{t('home.allies.desc')}</p>
          </motion.div>

          <div className="allies-grid">
            {homeData.allies.map((a, i) => (
              <motion.div key={a.id} {...fadeUp(i * 0.1)} className="ally-card card-beige">
                <div className="ally-logo-placeholder">
                  <div className="ally-logo-box">
                    <Award size={28} />
                  </div>
                </div>
                <div className="ally-info">
                  <h4>{t(a.name_key)}</h4>
                  <span>{t(a.role_key)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ──────────────────────────── */}
      <section className="section-cta-band">
        <div className="container">
          <motion.div {...fadeUp(0)} className="cta-band-inner">
            <div className="cta-band-text">
              <h2>{t('home.cta_band.title')}</h2>
              <p>{t('home.cta_band.desc')}</p>
            </div>
            <div className="cta-band-actions">
              <a href="/volunteer" className="btn-primary" style={{ textDecoration: 'none' }}>
                {t('home.cta_band.volunteer')} <ArrowRight size={16} />
              </a>
              <a href={globalData.links.donate} target="_blank" rel="noopener noreferrer" className="btn-amber" style={{ textDecoration: 'none' }}>
                {t('home.cta_band.donate')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
