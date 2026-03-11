import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Users, BookOpen, Mail, Instagram, Facebook, Twitter, Leaf } from 'lucide-react';
import linkTreeData from '../data/linktree.data.json';
import './LinkTree.css';

const ICONS: Record<string, React.ReactNode> = {
  Globe:     <Globe size={18} />,
  Heart:     <Heart size={18} fill="currentColor" />,
  Users:     <Users size={18} />,
  BookOpen:  <BookOpen size={18} />,
  Mail:      <Mail size={18} />,
  Instagram: <Instagram size={20} />,
  Facebook:  <Facebook size={20} />,
  Twitter:   <Twitter size={20} />,
};

const LinkTree: React.FC = () => {
  return (
    <div className="linktree-page">
      <div className="linktree-container">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lt-profile"
        >
          <div className="lt-avatar">
            <Leaf size={40} strokeWidth={1.5} />
          </div>
          <h1 className="lt-name">{linkTreeData.profile.name}</h1>
          <p className="lt-bio">{linkTreeData.profile.description}</p>
        </motion.div>

        {/* Links Section */}
        <div className="lt-links">
          {linkTreeData.links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`lt-link-btn ${link.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="lt-link-icon">{ICONS[link.icon]}</span>
              <span className="lt-link-title">{link.title}</span>
            </motion.a>
          ))}
        </div>

        {/* Social Icons Strip */}
        <motion.div 
          className="lt-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {linkTreeData.socials.map((social) => (
            <a 
              key={social.id} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="lt-social-icon"
            >
              {ICONS[social.icon]}
            </a>
          ))}
        </motion.div>

        {/* Footer Mark */}
        <motion.div 
          className="lt-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Leaf size={12} /> Proyecto Socioambiental
        </motion.div>

      </div>
    </div>
  );
};

export default LinkTree;
