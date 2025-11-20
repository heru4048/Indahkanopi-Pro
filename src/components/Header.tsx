import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    label: "Beranda",
    id: "hero"
  }, {
    label: "Layanan",
    id: "services"
  }, {
    label: "Portfolio",
    id: "portfolio"
  }, {
    label: "Tentang",
    id: "why-us"
  }, {
    label: "Testimoni",
    id: "testimonials"
  }, {
    label: "Lokasi",
    id: "location"
  }, {
    label: "Kontak",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })} className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-xl">IP</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>Indahkanopi Pro</span>
              
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isScrolled ? "text-foreground hover:bg-muted hover:text-primary" : "text-primary-foreground hover:bg-primary-foreground/10"}`}>
                {item.label}
              </button>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Halo Indahcanopy Bkk 21, saya ingin berkonsultasi mengenai layanan Anda.");
                window.open(`https://wa.me/6285779985892?text=${message}`, "_blank");
              }} 
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"}`}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden bg-background/98 backdrop-blur-md border-t">
          <nav className="container px-4 py-6 space-y-2">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted hover:text-primary transition-colors">
                {item.label}
              </button>)}
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Halo Indahcanopy Bkk 21, saya ingin berkonsultasi mengenai layanan Anda.");
                window.open(`https://wa.me/6285779985892?text=${message}`, "_blank");
              }} 
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white mt-4"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;