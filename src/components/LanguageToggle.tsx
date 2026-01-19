import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border hover:bg-secondary transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`text-sm font-medium transition-opacity ${i18n.language === 'es' ? 'text-primary' : 'text-muted-foreground'}`}>
        ES
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={`text-sm font-medium transition-opacity ${i18n.language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>
        EN
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
