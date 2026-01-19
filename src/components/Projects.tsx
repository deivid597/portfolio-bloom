import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import projectSinapsis from '@/assets/project-sinapsis.jpg';
import projectUci from '@/assets/project-uci.jpg';
import projectMunicipalidad from '@/assets/project-municipalidad.jpg';
import projectKontena from '@/assets/project-kontena.jpg';
import projectQmatic from '@/assets/project-qmatic.jpg';

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
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
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
