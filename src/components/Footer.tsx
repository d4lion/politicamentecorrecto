import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Mail, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><Leaf size={18} /></div>
              <div>
                <span className="footer-logo-main">Políticamente</span>
                <span className="footer-logo-accent">Correcto</span>
              </div>
            </div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram" className="social-btn"><Instagram size={17} /></a>
              <a href="#" aria-label="Facebook" className="social-btn"><Facebook size={17} /></a>
              <a href="#" aria-label="Twitter" className="social-btn"><Twitter size={17} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>{t('footer.sections.navigate')}</h4>
            <ul>
              <li><NavLink to="/">{t('footer.links.home')}</NavLink></li>
              <li><NavLink to="/timeline">{t('footer.links.story')}</NavLink></li>
              <li><NavLink to="/volunteer">{t('footer.links.volunteers')}</NavLink></li>
            </ul>
          </div>

          {/* Participation */}
          <div className="footer-col">
            <h4>{t('footer.sections.participate')}</h4>
            <ul>
              <li><a href="/volunteer">{t('footer.links.volunteer_cta')}</a></li>
              <li><a href="https://vaki.co" target="_blank" rel="noopener noreferrer">{t('footer.links.donate')}</a></li>
              <li><a href="/volunteer">{t('footer.links.ally')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>{t('footer.sections.contact')}</h4>
            <ul className="footer-contact-list">
              <li>
                <Mail size={15} />
                <a href="mailto:hola@politicamentecorrecto.co">hola@politicamentecorrecto.co</a>
              </li>
              <li>
                <MapPin size={15} />
                <span>Colombia</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-seals">
            <span className="seal">🌱 {t('footer.seals.social')}</span>
            <span className="seal">♻️ {t('footer.seals.circular')}</span>
            <span className="seal">📚 {t('footer.seals.nonprofit')}</span>
          </div>
          <p className="footer-copy">
            © {year} Políticamente Correcto. {t('footer.copy')} <Heart size={13} fill="currentColor" className="heart-inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
