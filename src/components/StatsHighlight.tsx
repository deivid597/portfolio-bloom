import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Briefcase, CheckCircle, Rocket } from 'lucide-react';

const StatsHighlight = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Code,
      value: '4+',
      label: t('hero.stats.experience'),
      color: '#3B82F6',
    },
    {
      icon: Briefcase,
      value: '10+',
      label: t('hero.stats.projects'),
      color: '#10B981',
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: t('hero.stats.quality'),
      color: '#8B5CF6',
    },
    {
      icon: Rocket,
      value: '5+',
      label: t('hero.stats.companies'),
      color: '#F59E0B',
    },
  ];

  const codeSnippet = `class Developer {
  name: "Johnny Solano",
  role: "Full Stack Developer",
  skills: {
    frontend: [
      "React & Angular",
      "TypeScript & JavaScript",
      "Tailwind CSS"
    ],
    backend: [
      ".NET Core & MVC",
      "Node.js & Express",
      "SQL Server & MongoDB"
    ]
  }
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-16 grid grid-cols-2 lg:grid-cols-6 gap-4"
    >
      {/* Stats Cards */}
      <div className="col-span-2 lg:col-span-3 grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all group cursor-default overflow-hidden"
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${stat.color}15, transparent 70%)`,
              }}
            />
            
            <div className="relative z-10">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Code Snippet */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="col-span-2 lg:col-span-3 p-5 rounded-xl bg-[#0d1117] border border-primary/20 overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">developer.ts</span>
        </div>
        <pre className="text-xs md:text-sm font-mono overflow-x-auto">
          <code>
            {codeSnippet.split('\n').map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.includes('class') && (
                  <span>
                    <span className="text-purple-400">class</span>
                    <span className="text-cyan-300"> Developer</span>
                    <span className="text-muted-foreground"> {'{'}</span>
                  </span>
                )}
                {line.includes('name:') && (
                  <span className="pl-4">
                    <span className="text-blue-400">name</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-green-400">"Johnny Solano"</span>
                    <span className="text-muted-foreground">,</span>
                  </span>
                )}
                {line.includes('role:') && (
                  <span className="pl-4">
                    <span className="text-blue-400">role</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-green-400">"Full Stack Developer"</span>
                    <span className="text-muted-foreground">,</span>
                  </span>
                )}
                {line.includes('skills: {') && (
                  <span className="pl-4">
                    <span className="text-blue-400">skills</span>
                    <span className="text-muted-foreground">: {'{'}</span>
                  </span>
                )}
                {line.includes('frontend: [') && (
                  <span className="pl-8">
                    <span className="text-yellow-400">frontend</span>
                    <span className="text-muted-foreground">: [</span>
                  </span>
                )}
                {line.includes('"React & Angular"') && (
                  <span className="pl-12">
                    <span className="text-green-400">"React & Angular"</span>
                    <span className="text-muted-foreground">,</span>
                  </span>
                )}
                {line.includes('"TypeScript & JavaScript"') && (
                  <span className="pl-12">
                    <span className="text-green-400">"TypeScript & JavaScript"</span>
                    <span className="text-muted-foreground">,</span>
                  </span>
                )}
                {line.includes('"Tailwind CSS"') && (
                  <span className="pl-12">
                    <span className="text-green-400">"Tailwind CSS"</span>
                  </span>
                )}
                {line.trim() === '],' && i < 12 && (
                  <span className="pl-8 text-muted-foreground">],</span>
                )}
                {line.includes('backend: [') && (
                  <span className="pl-8">
                    <span className="text-yellow-400">backend</span>
                    <span className="text-muted-foreground">: [</span>
                  </span>
                )}
                {line.includes('".NET Core & MVC"') && (
                  <span className="pl-12">
                    <span className="text-green-400">".NET Core & MVC"</span>
                    <span className="text-muted-foreground">,</span>
                  </span>
                )}
                {line.includes('"Node.js & Express"') && (
                  <span className="pl-12">
                    <span className="text-green-400">"Node.js & Express"</span>
                    <span className="text-muted-foreground">,</span>
                  </span>
                )}
                {line.includes('"SQL Server & MongoDB"') && (
                  <span className="pl-12">
                    <span className="text-green-400">"SQL Server & MongoDB"</span>
                  </span>
                )}
                {line.trim() === ']' && i > 15 && (
                  <span className="pl-8 text-muted-foreground">]</span>
                )}
                {line.trim() === '}' && i === 19 && (
                  <span className="pl-4 text-muted-foreground">{'}'}</span>
                )}
                {line === '}' && i === 20 && (
                  <span className="text-muted-foreground">{'}'}</span>
                )}
              </div>
            ))}
          </code>
        </pre>
      </motion.div>
    </motion.div>
  );
};

export default StatsHighlight;
