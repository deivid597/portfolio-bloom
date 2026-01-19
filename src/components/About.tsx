import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Briefcase,
      title: t('about.experience'),
      description: t('about.experienceDesc'),
      subtitle: t('about.experienceDate'),
    },
    {
      icon: GraduationCap,
      title: t('about.education'),
      description: t('about.educationDesc'),
      subtitle: t('about.educationSchool'),
    },
    {
      icon: Award,
      title: t('about.certifications'),
      description: t('about.certificationsDesc'),
      subtitle: '',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                  {card.subtitle && (
                    <p className="text-xs text-primary mt-1">{card.subtitle}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
