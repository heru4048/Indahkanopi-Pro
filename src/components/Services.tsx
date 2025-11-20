import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Fence, MoveVertical, Grid3x3, Building2, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palmtree,
    title: "Kanopi",
    description: "Kanopi modern dengan berbagai pilihan material: polycarbonate, alderon, spandek, dan baja ringan. Tahan cuaca dan estetis.",
    features: ["Desain Custom", "Anti Karat", "Garansi Material"],
    link: "/services/kanopi",
  },
  {
    icon: Home,
    title: "Konstruksi Atap",
    description: "Pemasangan dan renovasi atap berkualitas tinggi dengan sistem struktur yang kuat dan tahan lama.",
    features: ["Baja Ringan", "Rangka Kuat", "Waterproof"],
    link: "/services/atap",
  },
  {
    icon: Building2,
    title: "Balkon",
    description: "Pembuatan balkon dengan desain modern dan sistem railing yang aman serta elegan untuk hunian Anda.",
    features: ["Design Minimalis", "Material Premium", "Safety Standard"],
    link: "/services/balkon",
  },
  {
    icon: Grid3x3,
    title: "Plavon",
    description: "Instalasi plavon dengan berbagai model dan material: gypsum, PVC, dan kalsiboard untuk interior sempurna.",
    features: ["Finishing Rapi", "Desain Variatif", "Insulasi Suara"],
    link: "/services/plavon",
  },
  {
    icon: Fence,
    title: "Pagar",
    description: "Pagar dan pintu gerbang dengan desain modern atau klasik menggunakan material besi, stainless, atau aluminium.",
    features: ["Anti Karat", "Desain Eksklusif", "Sistem Keamanan"],
    link: "/services/pagar",
  },
  {
    icon: MoveVertical,
    title: "Tangga",
    description: "Tangga dengan konstruksi kokoh dan desain elegan, tersedia berbagai model dari minimalis hingga mewah.",
    features: ["Struktur Kokoh", "Handrail Elegant", "Custom Design"],
    link: "/services/tangga",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              LAYANAN KAMI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solusi Konstruksi <span className="text-primary">Lengkap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan konstruksi dengan standar kualitas terbaik dan harga kompetitif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={service.link}>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Lihat Detail
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
