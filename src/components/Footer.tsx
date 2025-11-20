import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-construction-dark text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">IP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Indahkanopi Pro</span>
                
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Solusi terpercaya untuk konstruksi berkualitas. Spesialis kanopi, atap, balkon, plavon, pagar, dan tangga dengan pengalaman lebih dari 10 tahun.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-secondary transition-colors">Kanopi</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Konstruksi Atap</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Balkon</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Plavon</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Pagar</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Tangga</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu Cepat</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-secondary transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-secondary transition-colors">Tentang Kami</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Testimoni</a></li>
              <li><a href="#location" className="hover:text-secondary transition-colors">Lokasi</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start">
                
                <div>
                  
                  
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div>info@indahcanopy.com</div>
                  <div>order@indahcanopy.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Jl. Cisaat Setu No. 106 Telajung Cik Bar Kabupaten Bekasi, Jawa Barat 17530<br />
                  Bekasi, Jawa Barat 17530
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Indahcanopy Bkk 21. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-secondary transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;