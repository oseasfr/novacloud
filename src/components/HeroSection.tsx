import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroServers from "@/assets/hero-servers.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Cloud Privada no Brasil</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="text-foreground">SERVIDOR</span>
              <br />
              <span className="text-gradient-accent">DEDICADO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Impulsione seu negócio com infraestrutura cloud de <strong className="text-foreground">alto desempenho</strong>, segurança máxima e suporte especializado 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="group">
                Contrate Agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Ver Planos
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">LGPD Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Server className="w-5 h-5 text-primary" />
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm">Baixa Latência</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Server Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                src={heroServers}
                alt="Infraestrutura de Servidores NovaCloud"
                className="w-full h-auto rounded-2xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+3000</p>
                    <p className="text-sm text-muted-foreground">Servidores Ativos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+1000</p>
                    <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
