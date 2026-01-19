import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  color: string;
  bg: string;
  icon: string;
  size?: 'sm' | 'md' | 'lg';
}

// Tech configurations with SVG-style icons and brand colors
export const techIconsConfig: Record<string, { icon: string; color: string; bg: string }> = {
  // Frontend
  'Angular': { icon: 'A', color: '#DD0031', bg: 'rgba(221, 0, 49, 0.15)' },
  'React': { icon: '⚛', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)' },
  'React JSX & JS': { icon: '⚛', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)' },
  'Flutter': { icon: '◇', color: '#02569B', bg: 'rgba(2, 86, 155, 0.15)' },
  'Laravel': { icon: '◆', color: '#FF2D20', bg: 'rgba(255, 45, 32, 0.15)' },
  'Kendo UI': { icon: '◈', color: '#FF6358', bg: 'rgba(255, 99, 88, 0.15)' },
  'Material UI': { icon: 'M', color: '#007FFF', bg: 'rgba(0, 127, 255, 0.15)' },
  'TypeScript': { icon: 'TS', color: '#3178C6', bg: 'rgba(49, 120, 198, 0.15)' },
  'HTML5': { icon: '5', color: '#E34F26', bg: 'rgba(227, 79, 38, 0.15)' },
  'CSS3': { icon: '3', color: '#1572B6', bg: 'rgba(21, 114, 182, 0.15)' },
  'Tailwind': { icon: '~', color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.15)' },
  'Bootstrap': { icon: 'B', color: '#7952B3', bg: 'rgba(121, 82, 179, 0.15)' },
  
  // Backend
  '.NET Core': { icon: '⬡', color: '#512BD4', bg: 'rgba(81, 43, 212, 0.15)' },
  'MVC': { icon: '◎', color: '#512BD4', bg: 'rgba(81, 43, 212, 0.15)' },
  'ASP.NET': { icon: '◇', color: '#512BD4', bg: 'rgba(81, 43, 212, 0.15)' },
  'ADO.NET': { icon: '◆', color: '#512BD4', bg: 'rgba(81, 43, 212, 0.15)' },
  'Node.js': { icon: '⬢', color: '#339933', bg: 'rgba(51, 153, 51, 0.15)' },
  'Python': { icon: '🐍', color: '#3776AB', bg: 'rgba(55, 118, 171, 0.15)' },
  'Java': { icon: '☕', color: '#ED8B00', bg: 'rgba(237, 139, 0, 0.15)' },
  'PHP': { icon: 'P', color: '#777BB4', bg: 'rgba(119, 123, 180, 0.15)' },
  'C#': { icon: 'C#', color: '#239120', bg: 'rgba(35, 145, 32, 0.15)' },
  
  // Mobile
  'Ionic (Cordova/Capacitor)': { icon: '◎', color: '#3880FF', bg: 'rgba(56, 128, 255, 0.15)' },
  'Android Studio (APK)': { icon: '▲', color: '#3DDC84', bg: 'rgba(61, 220, 132, 0.15)' },
  
  // Database
  'SQL Server': { icon: '◈', color: '#CC2927', bg: 'rgba(204, 41, 39, 0.15)' },
  'MySQL': { icon: '◇', color: '#4479A1', bg: 'rgba(68, 121, 161, 0.15)' },
  'MongoDB': { icon: '◆', color: '#47A248', bg: 'rgba(71, 162, 72, 0.15)' },
  
  // DevOps
  'Git': { icon: '⎇', color: '#F05032', bg: 'rgba(240, 80, 50, 0.15)' },
  'IIS': { icon: '◎', color: '#0078D4', bg: 'rgba(0, 120, 212, 0.15)' },
  'CI/CD': { icon: '∞', color: '#4CAF50', bg: 'rgba(76, 175, 80, 0.15)' },
  'Version Control': { icon: '⌥', color: '#F05032', bg: 'rgba(240, 80, 50, 0.15)' },
};

export const TechIcon = ({ name, color, bg, icon, size = 'md' }: TechIconProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      className={`${sizeClasses[size]} rounded-lg flex items-center justify-center font-bold cursor-default transition-shadow`}
      style={{
        backgroundColor: bg,
        color: color,
        boxShadow: `0 0 0 1px ${color}30`,
      }}
      title={name}
    >
      {icon}
    </motion.div>
  );
};

// Featured tech icons for Hero section
export const FeaturedTechIcons = () => {
  const featuredTech = [
    { name: 'Angular', ...techIconsConfig['Angular'] },
    { name: 'React', ...techIconsConfig['React'] },
    { name: 'TypeScript', ...techIconsConfig['TypeScript'] },
    { name: '.NET Core', ...techIconsConfig['.NET Core'] },
    { name: 'Node.js', ...techIconsConfig['Node.js'] },
    { name: 'SQL Server', ...techIconsConfig['SQL Server'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65 }}
      className="flex items-center gap-3 mt-6"
    >
      <span className="text-sm text-muted-foreground mr-2">Tech Stack:</span>
      <div className="flex items-center gap-2">
        {featuredTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.08 }}
          >
            <TechIcon {...tech} size="sm" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Skill badge with icon for Skills section
export const SkillBadge = ({ skill }: { skill: string }) => {
  const config = techIconsConfig[skill];
  
  if (!config) {
    return (
      <span className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
        {skill}
      </span>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full cursor-default transition-all"
      style={{
        backgroundColor: config.bg,
        color: config.color,
        boxShadow: `0 0 0 1px ${config.color}25`,
      }}
    >
      <span className="text-sm">{config.icon}</span>
      {skill}
    </motion.span>
  );
};

export default TechIcon;
