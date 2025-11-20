import { Card } from "@/components/ui/card";
import { Award, Clock, ShieldCheck, Users, Wrench, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Kualitas Terjamin",
    description: "Material premium dan pengerjaan profesional dengan standar industri terbaik",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Komitmen penyelesaian proyek sesuai jadwal yang telah disepakati",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Pekerjaan",
    description: "Memberikan garansi untuk setiap pekerjaan yang kami lakukan",
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Didukung oleh tenaga ahli dan teknisi bersertifikat dengan pengalaman 10+ tahun",
  },
  {
    icon: Wrench,
    title: "Peralatan Modern",
    description: "Menggunakan alat dan teknologi terkini untuk hasil maksimal",
  },
  {
    icon: TrendingUp,
    title: "Harga Kompetitif",
    description: "Harga terbaik dengan kualitas premium tanpa biaya tersembunyi",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              KEUNGGULAN KAMI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mengapa Memilih <span className="text-primary">Kami?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman dan dedikasi kami menjamin kepuasan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4 mx-auto transform hover:rotate-6 transition-transform duration-300">
                <reason.icon className="h-8 w-8 text-secondary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-card rounded-2xl p-8 border-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Tahun Berpengalaman</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">450+</div>
              <div className="text-sm text-muted-foreground">Klien Puas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Garansi Kualitas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
