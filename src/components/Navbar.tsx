import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { 
    label: "Produtos", 
    href: "#produtos",
    submenu: [
      { label: "Servidores Dedicados", href: "#dedicados" },
      { label: "Bare Metal", href: "#baremetal" },
      { label: "Servidores GPU", href: "#gpu" },
    ]
  },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cloud className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-primary">NOVA</span>
              <span className="text-foreground">CLOUD</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Submenu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                    >
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="default">
              Fale com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block text-lg font-medium text-foreground py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.submenu && (
                    <div className="pl-4 space-y-2 mt-2">
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          className="block text-sm text-muted-foreground py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button variant="hero" className="w-full">
                  Fale com Especialista
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
