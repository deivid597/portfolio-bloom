import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

// Project images - Sinapsis
import sinapsis1 from '@/assets/sinapsis-1.jpg';
import sinapsis2 from '@/assets/sinapsis-2.jpg';

// Project images - UCI
import uci1 from '@/assets/uci-1.jpg';
import uci2 from '@/assets/uci-2.jpg';
import uci3 from '@/assets/uci-3.jpg';

// Project images - Municipalidad
import municipalidad1 from '@/assets/municipalidad-1.jpg';
import municipalidad2 from '@/assets/municipalidad-2.jpg';

// Project images - Kontena
import kontena1 from '@/assets/kontena-1.jpg';
import kontena2 from '@/assets/kontena-2.jpg';

// Project images - Qmatic
import qmatic1 from '@/assets/qmatic-1.jpg';
import qmatic2 from '@/assets/qmatic-2.jpg';
import qmatic3 from '@/assets/qmatic-3.jpg';

// Tech icon configurations - minimalist palette aligned with portfolio
const techIcons: Record<string, string> = {
  '.NET MVC': '⬡',
  'IIS': '🌐',
  'Kendo UI': '◈',
  'Node.js': '⬢',
  'SQL Server': '🗄️',
  'Ionic Angular': '📱',
  'React': '⚛️',
  'React JS': '⚛️',
  'JSX': '{ }',
  'Responsive Design': '📐',
  'Web System': '🖥️',
  'Workflow': '⚡',
  'PDF Generation': '📄',
  'Role-based Access': '🔐',
  'Vite': '⚡',
  'Authentication Tokens': '🔑',
  'Security': '🛡️',
  'Strapi': '🚀',
  'PostgreSQL': '🐘',
  'AWS': '☁️',
  'Java': '☕',
  'Spring Boot': '🍃',
  'MongoDB': '🍃',
};

const TechBadge = ({ tech }: { tech: string }) => {
  const icon = techIcons[tech] || '•';
  
  return (
    <motion.span
      whileHover={{ scale: 1.03, y: -1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-muted/60 text-foreground/80 border border-border/50 hover:border-primary/30 hover:bg-muted transition-all cursor-default"
    >
      <span className="text-sm opacity-70">{icon}</span>
      {tech}
    </motion.span>
  );
};

// Auto-sliding image carousel component with enhanced styling
const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Standard 5 seconds delay

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-muted/50 to-muted p-3 md:p-4">
      {/* Frame container with border */}
      <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-primary/20 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        
        {/* Inner shadow overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]" />
      </div>
      
      {/* Gradient overlay for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent md:hidden pointer-events-none" />
      
      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'sinapsis',
      images: [sinapsis1, sinapsis2],
      link: 'http://demosynapptica.net:91/',
      tech: ['.NET MVC', 'IIS', 'Kendo UI', 'Node.js', 'SQL Server', 'Ionic Angular'],
    },
    {
      key: 'uci',
      images: [uci1, uci2, uci3],
      link: 'https://uci.ac.cr/es/home',
      tech: ['React', 'JSX', 'Strapi', 'PostgreSQL', 'Responsive Design'],
    },
    {
      key: 'municipalidad',
      images: [municipalidad1, municipalidad2],
      link: null,
      tech: ['Web System', 'Workflow', 'PDF Generation', 'Role-based Access'],
    },
    {
      key: 'kontena',
      images: [kontena1, kontena2],
      link: 'http://demosynapptica.net:92/',
      tech: ['.NET MVC', 'Kendo UI', 'Node.js', 'SQL Server', 'Ionic Angular'],
    },
    {
      key: 'qmatic',
      images: [qmatic1, qmatic2, qmatic3],
      link: 'https://orchestra.synapptica.net:3002/',
      tech: ['React JS', 'JSX', 'Vite', 'Authentication Tokens', 'Security'],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Slider */}
                <ImageSlider 
                  images={project.images} 
                  alt={t(`projects.${project.key}.title`)} 
                />

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-primary text-sm font-medium mb-2">
                    {t(`projects.${project.key}.company`)}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      {t('projects.viewDemo')}
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;