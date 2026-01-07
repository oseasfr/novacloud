import { Cloud, MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  produtos: [
    { label: "Servidores Dedicados", href: "#dedicados" },
    { label: "Bare Metal", href: "#baremetal" },
    { label: "Servidores GPU", href: "#gpu" },
    { label: "Cloud VPS", href: "#vps" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Datacenter", href: "#datacenter" },
    { label: "Blog", href: "#blog" },
    { label: "Carreiras", href: "#carreiras" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#ajuda" },
    { label: "Documentação", href: "#docs" },
    { label: "Status do Sistema", href: "#status" },
    { label: "Contato", href: "#contato" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <Cloud className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">
                <span className="text-gradient-primary">NOVA</span>
                <span className="text-foreground">CLOUD</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Infraestrutura cloud de alta performance para empresas que buscam segurança, escalabilidade e suporte especializado.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@novacloud.com.br</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NovaCloud. Todos os direitos reservados.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
