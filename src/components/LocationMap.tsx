import { Card } from "@/components/ui/card";
import { MapPin, Clock, Navigation } from "lucide-react";
const LocationMap = () => {
  return <section id="location" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              LOKASI KAMI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kunjungi <span className="text-primary">Workshop</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Datang langsung ke workshop untuk konsultasi dan lihat sample material kami
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-[500px]">
              <iframe src="https://maps.google.com/maps?q=Jl.+Cisaat+Setu+No.+106+Telajung+Cikarang+Barat+Bekasi+Jawa+Barat&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Indahcanopy Bkk 21 Location" />
            </Card>
          </div>

          {/* Location Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Alamat Workshop</h3>
              <p className="text-muted-foreground mb-4">
                Jl. Cisaat Setu No. 106, Telajung<br />
                Kecamatan Cikarang Barat<br />
                Kabupaten Bekasi, Jawa Barat<br />
                Indonesia 17530
              </p>
              <a href="https://maps.google.com/?q=Jl.+Cisaat+Setu+No.+106+Telajung+Cikarang+Barat+Bekasi+Jawa+Barat+17530" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                <Navigation className="h-4 w-4 mr-2" />
                Buka di Google Maps
              </a>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-3">Jam Operasional</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Senin - Jumat</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sabtu</span>
                  <span className="font-medium">08:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minggu</span>
                  <span className="font-medium">Tutup</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="font-bold text-lg mb-2">Layanan Konsultasi</h3>
              <p className="text-sm text-muted-foreground mb-4">Kami Survey langsung ke  Lokasi anda atau 
Datang langsung untuk konsultasi gratis dan lihat berbagai sample material berkualitas kami</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  Konsultasi Desain Gratis
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  Survey Lokasi
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  Estimasi Biaya Akurat
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationMap;