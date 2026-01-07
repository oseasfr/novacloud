import { motion } from "framer-motion";
import { ArrowRight, Server, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import serverDedicated from "@/assets/server-dedicated.png";
import serverBaremetal from "@/assets/server-baremetal.png";
import serverGpu from "@/assets/server-gpu.png";

const services = [
  {
    title: "Servidores Dedicados",
    description: "Máquinas com alta performance e disponibilidade para o máximo desempenho nos seus projetos.",
    image: serverDedicated,
    icon: Server,
    features: ["Intel Xeon / AMD EPYC", "NVMe SSD", "Rede 10Gbps"],
  },
  {
    title: "Servidores Bare Metal",
    description: "Servidor físico exclusivo com acesso total aos seus recursos para cargas de trabalho de alto desempenho.",
    image: serverBaremetal,
    icon: Cpu,
    features: ["Acesso Root", "Hardware Exclusivo", "Personalização Total"],
  },
  {
    title: "Servidores com GPU",
    description: "Grande capacidade de processamento para tarefas de desenvolvimento, treinamento e inferência de IA.",
    image: serverGpu,
    icon: Zap,
    features: ["NVIDIA Tesla", "Machine Learning", "Renderização 3D"],
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ServicesSection() {
  return (
    <section id="produtos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Nossas </span>
            <span className="text-gradient-primary">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Infraestrutura cloud de nível enterprise para empresas que exigem o máximo em performance e segurança.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full gradient-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-muted/50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
