import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import globalData from '../data/global.data.json';
import { Menu, X, Heart, Languages, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/timeline', label: t('nav.story') },
    { to: '/volunteer', label: t('nav.volunteers') },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <NavLink to="/" className="logo">
            <div className="logo-icon-wrap">
              <img src="/src/assets/politicamentecorrecto_logo.png" alt="Logo" />
            </div>
            <div className="logo-text">
              <span className="logo-main">Políticamente</span>
              <span className="logo-accent">Correcto</span>
            </div>
          </NavLink>

          <div className="desktop-nav">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}

            <button className="lang-btn" onClick={toggleLanguage}>
              <Languages size={14} />
              {i18n.language.toUpperCase()}
            </button>

            <a
              href={globalData.links.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="donate-btn"
            >
              <Heart size={14} fill="currentColor" /> {t('nav.donate')}
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}><X size={22} /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}><Menu size={22} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-inner">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.06 }}
                >
                  <NavLink to={l.to} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                    {l.label} <ArrowRight size={16} />
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="mobile-actions"
              >
                <button className="lang-btn" onClick={toggleLanguage}>
                  <Languages size={14} /> {i18n.language.toUpperCase()}
                </button>
                <div className="mobile-donate">
                  <a href={globalData.links.donate} className="donate-btn">
                    <Heart size={14} fill="currentColor" /> {t('nav.donate')}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
