import { motion } from "framer-motion";
import { Headphones, Shield, Smartphone, Globe, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Especialistas disponíveis todos os dias do ano para soluções exclusivas às suas necessidades.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção com replicação geográfica, monitoramento preventivo e criptografia de ponta.",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Gerencie sua infraestrutura de qualquer lugar com nosso aplicativo completo.",
  },
  {
    icon: Globe,
    title: "Datacenter Brasil",
    description: "Infraestrutura 100% nacional com baixa latência e conformidade com LGPD.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Hardware de última geração com NVMe SSD e rede dedicada de 10Gbps.",
  },
  {
    icon: Lock,
    title: "LGPD Compliant",
    description: "Seus dados protegidos de acordo com a Lei Geral de Proteção de Dados.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Por que escolher a </span>
            <span className="text-gradient-primary">NovaCloud</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acelere seu negócio com infraestrutura cloud de alto desempenho e suporte especializado.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
