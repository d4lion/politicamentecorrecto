import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Heart, CheckCircle, ArrowRight, Leaf, Users, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import volunteerData from '../data/volunteer.data.json';
import './Volunteer.css';

const EASE = [0.16, 1, 0.3, 1] as const;

const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  Leaf:    <Leaf size={18} />,
  Heart:   <Heart size={18} />,
  Users:   <Users size={18} />,
  Package: <Package size={18} />,
};

const BENEFIT_KEYS = [
  'volunteer.benefits.environmental',
  'volunteer.benefits.children',
  'volunteer.benefits.network',
  'volunteer.benefits.circular',
];

const Volunteer: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="volunteer-page success-state">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card success-card"
        >
          <div className="success-icon">
            <CheckCircle size={52} />
          </div>
          <h2>{t('volunteer.success.title')}</h2>
          <p>{t('volunteer.success.desc')}</p>
          <button className="btn-primary" onClick={() => setSubmitted(false)}>
            {t('volunteer.success.back')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="volunteer-page">
      <div className="vol-container">

        {/* Left info column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="vol-info"
        >
          <span className="section-label">{t('volunteer.label')}</span>
          <h1 className="vol-title">
            {t('volunteer.title')}<br />
            <span className="gradient-text">{t('volunteer.title_accent')}</span>
          </h1>
          <p className="vol-desc">{t('volunteer.desc')}</p>

          <div className="vol-benefits">
            {volunteerData.benefitIcons.map((icon, i) => (
              <div key={i} className="benefit-item">
                <span className="benefit-icon">{BENEFIT_ICONS[icon]}</span>
                <span>{t(BENEFIT_KEYS[i])}</span>
              </div>
            ))}
          </div>

          <div className="vol-stats card">
            {volunteerData.volunteerStats.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="vol-stat-divider" />}
                <div className="vol-stat">
                  <span className="vol-stat-num">{s.value}</span>
                  <span className="vol-stat-label">{t(s.key)}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Right form column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="vol-form-wrap card"
        >
          <div className="vol-form-header">
            <h2>{t('volunteer.form.title')}</h2>
            <p>{t('volunteer.form.subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit} className="vol-form">
            <div className="input-grp">
              <label><User size={15} /> {t('volunteer.form.name_label')}</label>
              <input type="text" placeholder={t('volunteer.form.name_placeholder')} required />
            </div>
            <div className="input-grp">
              <label><Mail size={15} /> {t('volunteer.form.email_label')}</label>
              <input type="email" placeholder={t('volunteer.form.email_placeholder')} required />
            </div>
            <div className="input-grp">
              <label><MessageSquare size={15} /> {t('volunteer.form.message_label')}</label>
              <textarea placeholder={t('volunteer.form.message_placeholder')} rows={4} required />
            </div>
            <button type="submit" className="btn-primary vol-submit">
              {t('volunteer.form.submit')} <ArrowRight size={17} />
            </button>
            <p className="form-privacy">{t('volunteer.form.privacy')}</p>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Volunteer;
