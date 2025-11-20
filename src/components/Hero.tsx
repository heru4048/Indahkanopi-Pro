import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-canopy.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional canopy installation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/95 via-construction-dark/80 to-construction-dark/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              PROFESIONAL & BERPENGALAMAN
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Indahkanopi Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Solusi Terpercaya untuk Konstruksi Berkualitas
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">Spesialis jasa pembuatan dan pemasangan Konstruksi atap, kanopi, balkon, plavon, pagar, dan tangga. Menghadirkan desain modern dengan material premium dan pengerjaan profesional.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => {
            const message = encodeURIComponent("Halo Indahcanopy Bkk 21, saya ingin berkonsultasi mengenai layanan Anda.");
            window.open(`https://wa.me/6285779985892?text=${message}`, "_blank");
          }} className="bg-[#25D366]/20 backdrop-blur-sm border-[#25D366]/40 hover:bg-[#25D366]/30 text-lg px-8 py-6 rounded-xl transition-all duration-300 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Kami
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">10+</div>
              <div className="text-sm text-primary-foreground/70">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-primary-foreground/70">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-primary-foreground/70">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;