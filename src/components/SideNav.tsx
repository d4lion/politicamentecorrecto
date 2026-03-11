import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './SideNav.css';

const SideNav: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="side-nav"
    >
      <div className="social-links">
        <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={16} /></a>
        <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={16} /></a>
        <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={16} /></a>
      </div>
      <div className="side-line" />
    </motion.div>
  );
};

export default SideNav;
