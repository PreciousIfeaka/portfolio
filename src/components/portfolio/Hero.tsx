import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.webp';

const socialLinks = [
  { icon: Github, href: 'https://github.com/PreciousIfeaka', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/precious-enuagwune-029b311b3/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:preciousifeaka@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/2348033921615', label: 'WhatsApp' },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-primary text-lg"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="block">Precious</span>
                <span className="gradient-text">Enuagwune</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-xl"
              >
                Backend Developer specializing in building{' '}
                <span className="text-foreground font-medium">exceptional digital experiences</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                <a href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/5 font-semibold px-8"
              >
                <a
                  href="https://drive.google.com/file/d/1H9AQXJqYO8noo9VLjf6c-ggQ6T1FYtjp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110 animate-glow-pulse" />

              {/* Profile image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 glow">
                  <img
                    src={profilePhoto}
                    alt="Precious Enuagwune - Backend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/80 blur-sm animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-accent/80 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">scroll down</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
