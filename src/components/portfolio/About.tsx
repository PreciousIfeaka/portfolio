import { motion } from 'framer-motion';
import { MapPin, Zap, Lightbulb, Users } from 'lucide-react';

const traits = [
  {
    icon: Zap,
    title: 'Reliable',
    description: 'I deliver projects on time and ensure they meet the highest standards of quality.',
  },
  {
    icon: Lightbulb,
    title: 'Creative',
    description: 'I approach problems with innovative solutions and think outside the box.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'I work effectively with teams and communicate clearly throughout the development process.',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="section-heading mt-4 mb-6">
              Building the <span className="gradient-text">Backend</span> of Tomorrow
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="tech-card text-center mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a skilled backend developer with proven expertise in{' '}
              <span className="text-foreground font-medium">Node.js, Express.js, Nestjs, TypeScript, Java and Spring</span>,
              specializing in building scalable, efficient, and secure server-side applications.
              With over <span className="text-primary font-semibold">2 years of experience</span>,
              I've worked on a variety of projects ranging from small to large-scale applications.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Lagos, Nigeria</span>
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="tech-card group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <trait.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{trait.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
