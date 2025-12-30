import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/PreciousIfeaka', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/precious-enuagwune-029b311b3/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:preciousifeaka@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-xl font-bold gradient-text">
              PE<span className="text-foreground">.</span>
            </span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-primary fill-primary" /> by Precious Enuagwune
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
