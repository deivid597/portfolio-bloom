import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const experienceCard = {
    icon: Briefcase,
    title: t('about.experience'),
    description: t('about.experienceDesc'),
    subtitle: t('about.experienceDate'),
  };

  const certificationCard = {
    icon: Award,
    title: t('about.certifications'),
    description: t('about.certificationsDesc'),
  };

  const educationItems = [
    {
      degree: t('about.educationDesc1'),
      school: t('about.educationSchool1'),
    },
    {
      degree: t('about.educationDesc2'),
      school: t('about.educationSchool2'),
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.approach')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.teamwork')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <experienceCard.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{experienceCard.title}</h3>
                <p className="text-sm text-muted-foreground">{experienceCard.description}</p>
                <p className="text-xs text-primary mt-1">{experienceCard.subtitle}</p>
              </div>
            </motion.div>

            {/* Education Card - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center">
                  <h3 className="font-semibold text-foreground">{t('about.education')}</h3>
                </div>
              </div>
              <div className="space-y-3 pl-16">
                {educationItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <p className="text-sm font-medium text-foreground/90">{item.degree}</p>
                    <p className="text-xs text-muted-foreground">{item.school}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <certificationCard.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{certificationCard.title}</h3>
                <p className="text-sm text-muted-foreground">{certificationCard.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
