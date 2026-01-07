import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Pronto para </span>
            <span className="text-gradient-accent">acelerar</span>
            <span className="text-foreground"> seu negócio?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra a solução ideal para sua empresa. Suporte técnico especializado disponível 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Fale com Especialista
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver Planos e Preços
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">+55 (11) 9999-9999</span>
            </a>
            <a
              href="mailto:contato@novacloud.com.br"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">contato@novacloud.com.br</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
