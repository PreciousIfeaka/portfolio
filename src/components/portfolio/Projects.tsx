import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import wattlens from '@/assets/wattlens.webp';
import fintrack from '@/assets/fintrack.webp';
import homeworkai from '@/assets/homeworkai.webp';
import quizzar from '@/assets/quizzar.webp';
import resolve from '@/assets/resolve-vote.webp';
import telex from '@/assets/telex-movie.webp';
import ecommerce from '@/assets/e-commerce.webp';
import orderchat from '@/assets/order-chat.webp';
import musicbooking from '@/assets/music-booking.webp';
import dailyfood from '@/assets/dailyfood.webp';


const projects = [
  {
    title: 'Wattlens – Energy Data Automation Platform',
    description: 'A SaaS platform that automates energy data processing for renewable energy developers, consultants, and sustainability teams.',
    image: wattlens,
    tech: ['TypeScript', 'Express.js', 'PostgreSQL', 'TypeORM', 'Redis', 'Bull'],
    demo: 'https://wattlens.com/',
    code: null,
  },
  {
    title: 'Dailyfood - Food Marketplace and delivery platform',
    description: 'A robust marketplace facilitating end-to-end food commerce. It includes a customer\'s app for discovery and ordering, a vendor\'s app for catalog management, and a specialized rider app for optimized delivery routing.',
    image: dailyfood,
    tech: ['NestJS', 'PostgreSQL', 'TypeORM', 'Docker'],
    demo: 'https://www.dailyfood.app/',
    code: null,
  },
  {
    title: 'Resolve',
    description: 'An online voting platform that allows organization members place encrypted vote and get real-time voting analytics.',
    image: resolve,
    tech: ['Nestjs', 'PostgreSQL', 'TypeORM', 'Redis'],
    demo: 'https://resolve.vote/',
    code: null,
  },
  {
    title: 'Finance Tracker',
    description: 'An AI powered platform that helps users manage their monthly finance and also help with budgeting and expense tracking.',
    image: fintrack,
    tech: ['Java', 'SpringBoot', 'PostgreSQL', 'JPA'],
    demo: 'https://fintrac.preciousifeaka.site/',
    code: 'https://github.com/PreciousIfeaka/finance-tracker-api.git',
  },
  {
    title: 'HomeworkAI',
    description: 'A software that uses AI to help students with their homework, help teachers with grading and help parents monitor their children\'s academic work.',
    image: homeworkai,
    tech: ['TypeScript', 'Express.js', 'Next.js', 'PostgreSQL'],
    demo: 'https://aiforhomework.com/',
    code: null,
  },
  {
    title: 'E-commerce API',
    description: 'An extensive e-commerce API with product management, cart functionality, and payment processing.',
    image: ecommerce,
    tech: ['TypeScript', 'Express.js', 'PostgreSQL', 'TypeORM', 'Stripe'],
    demo: 'https://e-commerce-0-n25c.onrender.com/',
    code: 'https://github.com/PreciousIfeaka/E-Commerce_0',
  },
  {
    title: 'Order Management API',
    description: 'A collaborative order management application with real-time communication features.',
    image: orderchat,
    tech: ['Nest.js', 'TypeScript', 'Prisma', 'Socket.io'],
    demo: 'https://order-management-0rp4.onrender.com/',
    code: 'https://github.com/PreciousIfeaka/order_management',
  },
  {
    title: 'Quizzar',
    description: 'A responsive interactive trivia quiz platform where users can take quiz based on selected field.',
    image: quizzar,
    tech: ['HTML', 'CSS', 'JavaScript', 'Express.js'],
    demo: 'https://quizzar-two.vercel.app/',
    code: 'https://github.com/PreciousIfeaka/QUIZzar',
  },
  {
    title: 'Telex Movie Recommender',
    description: 'An integration API that provides movie recommendations for users in a channel at set intervals based on selected genre.',
    image: telex,
    tech: ['Express.js', 'TMDB API', 'Telex'],
    demo: 'https://telex.im/',
    code: 'https://github.com/PreciousIfeaka/telex-movie-recommender',
  },
  {
    title: 'Music Booking API',
    description: 'An API that simulates a music booking system and event management.',
    image: musicbooking,
    tech: ['Nest.js', 'PostgreSQL', 'Socket.io', 'Stripe'],
    demo: 'https://github.com/PreciousIfeaka/music-booking-api',
    code: 'https://github.com/PreciousIfeaka/music-booking-api',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              Featured Projects
            </span>
            <h2 className="section-heading mt-4 mb-6">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="section-subheading mx-auto">
              Here are some of the projects I've worked on that showcase my skills and expertise.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group tech-card overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs bg-muted text-muted-foreground"
                      >
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    {project.code && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
