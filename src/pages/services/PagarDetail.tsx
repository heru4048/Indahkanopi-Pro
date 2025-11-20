import { ArrowLeft, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolioFence from "@/assets/portfolio-fence.jpg";

const PagarDetail = () => {
  const materials = [
    { name: "Pagar Besi Minimalis", price: "Rp 350.000 - 500.000/m", description: "Modern, kokoh, custom design" },
    { name: "Pagar Stainless Steel", price: "Rp 650.000 - 900.000/m", description: "Premium, anti karat, mengkilap elegan" },
    { name: "Pagar Aluminium", price: "Rp 450.000 - 650.000/m", description: "Ringan, tahan cuaca, maintenance rendah" },
    { name: "Pagar BRC + Kawat", price: "Rp 180.000 - 280.000/m", description: "Ekonomis, kuat, galvanis anti karat" },
  ];

  const processSteps = [
    { step: 1, title: "Survey & Ukur", description: "Pengukuran lokasi dan analisis kebutuhan" },
    { step: 2, title: "Desain Custom", description: "Pembuatan desain pagar sesuai selera" },
    { step: 3, title: "Persiapan Fondasi", description: "Pembuatan fondasi tiang yang kokoh" },
    { step: 4, title: "Fabrikasi Material", description: "Pembuatan pagar di workshop dengan presisi" },
    { step: 5, title: "Instalasi & Welding", description: "Pemasangan dan pengelasan kuat di lokasi" },
    { step: 6, title: "Finishing Cat/Polish", description: "Pengecatan atau polishing untuk hasil sempurna" },
  ];

  const features = [
    "Anti karat galvanis",
    "Desain eksklusif custom",
    "Sistem keamanan terintegrasi",
    "Material premium pilihan",
    "Garansi cat & struktur 5 tahun",
    "Gratis desain & konsultasi",
  ];

  const handleConsultation = () => {
    const message = encodeURIComponent(
      "Halo Indahcanopy Bkk 21, saya tertarik untuk konsultasi pembuatan Pagar. Mohon info lebih lanjut."
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/90 to-construction-blue/70 z-10" />
          <img src={portfolioFence} alt="Pagar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container px-4">
              <Link to="/#services">
                <Button variant="ghost" className="mb-4 text-white hover:text-white/80">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Layanan
                </Button>
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Pembuatan Pagar
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Pagar dan pintu gerbang dengan desain eksklusif menggunakan material premium
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Features */}
              <Card className="p-6 lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Keunggulan Layanan Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* CTA Card */}
              <Card className="p-6 h-fit sticky top-24">
                <div className="text-center">
                  <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Konsultasi Gratis</h3>
                  <p className="text-muted-foreground mb-6">
                    Diskusikan kebutuhan pagar Anda dengan tim ahli kami
                  </p>
                  <Button onClick={handleConsultation} size="lg" className="w-full">
                    Hubungi Kami
                  </Button>
                </div>
              </Card>
            </div>

            {/* Materials & Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Pilihan Material & Harga</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {materials.map((material, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-2">{material.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-3">{material.price}</p>
                    <p className="text-sm text-muted-foreground">{material.description}</p>
                  </Card>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                *Harga sudah termasuk material dan biaya pemasangan. Dapat berubah sesuai kompleksitas proyek.
              </p>
            </div>

            {/* Process Steps */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Proses Pengerjaan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((process) => (
                  <Card key={process.step} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                        <p className="text-sm text-muted-foreground">{process.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PagarDetail;
