import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', color: 'from-orange-400 to-orange-600' },
  { name: 'SpringBoot', color: 'from-green-500 to-green-700' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', color: 'from-green-400 to-green-600' },
  { name: 'Express.js', color: 'from-gray-400 to-gray-600' },
  { name: 'Nest.js', color: 'from-red-400 to-red-600' },
  { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
  { name: 'MongoDB', color: 'from-green-400 to-emerald-600' },
  { name: 'Docker', color: 'from-cyan-400 to-blue-500' },
  { name: 'Git', color: 'from-orange-500 to-red-500' },
  { name: 'Linux', color: 'from-amber-400 to-orange-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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
              Skills & Expertise
            </span>
            <h2 className="section-heading mt-4 mb-6">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="section-subheading mx-auto">
              I've worked with a variety of technologies and frameworks to create responsive and efficient applications.
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative"
              >
                <div className="tech-card flex flex-col items-center justify-center py-6 px-4 text-center h-full">
                  {/* Gradient orb */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} opacity-80 mb-4 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
