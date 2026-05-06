import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Backend Developer',
    company: 'Teknesis Limited',
    period: 'August, 2024 - Present',
    description: 'Collaborating with cross-functional teams to ensure smooth delivery of custom software solutions, following Agile methodologies.',
    tech: ['Java', 'SpringBoot', 'Nest.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    current: true,
  },
  {
    title: 'Backend Developer (Contract)',
    company: 'Peterx Digital Solutions',
    period: 'November, 2024 - March, 2025',
    description: 'Developed and maintained full-stack applications for various clients. Collaborated with design and product teams to deliver high-quality software solutions.',
    tech: ['Nest.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'TypeORM', 'AWS'],
    current: false,
  },
  {
    title: 'Backend Developer Intern (Finalist)',
    company: 'HNG Tech',
    period: 'June, 2024 - September, 2024',
    description: 'Developed and maintained full-stack applications for various clients. Collaborated with design and product teams to deliver high-quality software solutions.',
    tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    current: false,
  },
  {
    title: 'IT Support & Networking Intern',
    company: 'Asset and Resource Management (ARM)',
    period: 'June, 2023 - August, 2023',
    description: 'Worked with the networking engineer on basic system networking operations. Learned and performed IT support activities for employees.',
    tech: ['Kali-Linux', 'Networking', 'DNS', 'SysAdmin'],
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              Work Experience
            </span>
            <h2 className="section-heading mt-4 mb-6">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subheading mx-auto">
              The companies I've had the pleasure to work with and the impact I've made.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {/* Experience items */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.title}`}
                  variants={itemVariants}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-2 w-5 h-5 rounded-full border-2 ${exp.current ? 'bg-primary border-primary glow' : 'bg-card border-primary/50'}`}>
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="tech-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-xl font-semibold">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-xs bg-secondary/50 hover:bg-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
