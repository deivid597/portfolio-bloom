import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import projectSinapsis from '@/assets/project-sinapsis.jpg';
import projectUci from '@/assets/project-uci.jpg';
import projectMunicipalidad from '@/assets/project-municipalidad.jpg';
import projectKontena from '@/assets/project-kontena.jpg';
import projectQmatic from '@/assets/project-qmatic.jpg';

// Tech icon configurations with brand colors
const techConfig: Record<string, { icon: string; color: string; bg: string }> = {
  '.NET MVC': { icon: '⬡', color: '#512BD4', bg: 'rgba(81, 43, 212, 0.15)' },
  'IIS': { icon: '🌐', color: '#0078D4', bg: 'rgba(0, 120, 212, 0.15)' },
  'Kendo UI': { icon: '◈', color: '#FF6358', bg: 'rgba(255, 99, 88, 0.15)' },
  'Node.js': { icon: '⬢', color: '#339933', bg: 'rgba(51, 153, 51, 0.15)' },
  'SQL Server': { icon: '🗄️', color: '#CC2927', bg: 'rgba(204, 41, 39, 0.15)' },
  'Ionic Angular': { icon: '📱', color: '#3880FF', bg: 'rgba(56, 128, 255, 0.15)' },
  'React': { icon: '⚛️', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)' },
  'React JS': { icon: '⚛️', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)' },
  'JSX': { icon: '{ }', color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.15)' },
  'Responsive Design': { icon: '📐', color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.15)' },
  'Web System': { icon: '🖥️', color: '#6366F1', bg: 'rgba(99, 102, 241, 0.15)' },
  'Workflow': { icon: '⚡', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
  'PDF Generation': { icon: '📄', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)' },
  'Role-based Access': { icon: '🔐', color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
  'Vite': { icon: '⚡', color: '#646CFF', bg: 'rgba(100, 108, 255, 0.15)' },
  'Authentication Tokens': { icon: '🔑', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)' },
  'Security': { icon: '🛡️', color: '#22C55E', bg: 'rgba(34, 197, 94, 0.15)' },
};

const TechBadge = ({ tech }: { tech: string }) => {
  const config = techConfig[tech] || { icon: '•', color: '#94A3B8', bg: 'rgba(148, 163, 184, 0.15)' };
  
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm backdrop-blur-sm border transition-all cursor-default"
      style={{
        background: config.bg,
        borderColor: `${config.color}40`,
        color: config.color,
      }}
    >
      <span className="text-base">{config.icon}</span>
      {tech}
    </motion.span>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'sinapsis',
      image: projectSinapsis,
      link: 'http://demosynapptica.net:91/',
      tech: ['.NET MVC', 'IIS', 'Kendo UI', 'Node.js', 'SQL Server', 'Ionic Angular'],
    },
    {
      key: 'uci',
      image: projectUci,
      link: 'https://uci.ac.cr/es/home',
      tech: ['React', 'JSX', 'Responsive Design'],
    },
    {
      key: 'municipalidad',
      image: projectMunicipalidad,
      link: null,
      tech: ['Web System', 'Workflow', 'PDF Generation', 'Role-based Access'],
    },
    {
      key: 'kontena',
      image: projectKontena,
      link: 'http://demosynapptica.net:92/',
      tech: ['.NET MVC', 'Kendo UI', 'Node.js', 'SQL Server', 'Ionic Angular'],
    },
    {
      key: 'qmatic',
      image: projectQmatic,
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
          viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.key}.title`)}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
                </div>

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
