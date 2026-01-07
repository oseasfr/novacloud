import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Building2, Server, Award } from "lucide-react";

const stats = [
  { value: 1000, suffix: "+", label: "Clientes", icon: Users },
  { value: 800, suffix: "+", label: "Parceiros", icon: Building2 },
  { value: 3000, suffix: "+", label: "Servidores", icon: Server },
  { value: 99.9, suffix: "%", label: "Uptime", icon: Award },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground">
      {value === 99.9 ? count.toFixed(1) : count}
      {suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            A <span className="text-gradient-accent">NOVACLOUD</span> EM NÚMEROS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
