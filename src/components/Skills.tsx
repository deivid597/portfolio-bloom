import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Database, GitBranch, Users } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.frontend'),
      skills: ['Angular', 'React JSX & JS', 'Flutter', 'Laravel', 'Kendo UI', 'Material UI', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
    },
    {
      icon: Server,
      title: t('skills.backend'),
      skills: ['.NET Core', 'MVC', 'ASP.NET', 'ADO.NET', 'Node.js', 'Python', 'Java', 'Spring Boot', 'PHP', 'C#', 'Strapi'],
    },
    {
      icon: Smartphone,
      title: t('skills.mobile'),
      skills: ['Ionic (Cordova/Capacitor)', 'Android Studio (APK)'],
    },
    {
      icon: Database,
      title: t('skills.database'),
      skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: GitBranch,
      title: t('skills.devops'),
      skills: ['Git', 'IIS', 'AWS', 'CI/CD', 'Version Control'],
    },
    {
      icon: Users,
      title: t('skills.soft'),
      skills: [
        t('skills.softSkills.communication'),
        t('skills.softSkills.adaptability'),
        t('skills.softSkills.leadership'),
        t('skills.softSkills.teamwork'),
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold pb-4 text-gradient">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
