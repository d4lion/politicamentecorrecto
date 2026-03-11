import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Timeline.css';

const EASE = [0.16, 1, 0.3, 1] as const;

type StatusType = 'completed' | 'current' | 'upcoming';

const statusIcon: Record<StatusType, React.ReactNode> = {
  completed: <CheckCircle size={16} />,
  current: <Rocket size={16} />,
  upcoming: <Clock size={16} />,
};

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  // Events array lives in the locale JSON — supports full bilingual content
  const events = t('timeline.events', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    description: string;
    status: StatusType;
  }>;

  return (
    <div className="timeline-page">
      <div className="container-tl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="tl-header"
        >
          <span className="section-label">{t('timeline.label')}</span>
          <h1 className="tl-title">{t('timeline.title')}</h1>
          <p className="tl-subtitle">{t('timeline.subtitle')}</p>
        </motion.div>

        <div className="tl-track">
          <div className="tl-line" />

          {events.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
                className={`tl-item ${item.status} ${isEven ? 'left' : 'right'}`}
              >
                <div className="tl-dot">
                  <div className="tl-dot-inner" />
                </div>

                <div className="tl-card card">
                  <div className="tl-year">{item.year}</div>
                  <h3 className="tl-card-title">{item.title}</h3>
                  <p className="tl-card-desc">{item.description}</p>
                  <div className={`tl-status-badge ${item.status}`}>
                    {statusIcon[item.status]}
                    <span>{t(`timeline.status.${item.status}`)}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
