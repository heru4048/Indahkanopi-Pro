import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import portfolioCanopy from "@/assets/portfolio-canopy.jpg";
import portfolioRoof from "@/assets/portfolio-roof.jpg";
import portfolioBalcony from "@/assets/portfolio-balcony.jpg";
import portfolioCeiling from "@/assets/portfolio-ceiling.jpg";
import portfolioFence from "@/assets/portfolio-fence.jpg";
import portfolioStairs from "@/assets/portfolio-stairs.jpg";

const portfolioItems = [
  {
    image: portfolioCanopy,
    title: "Kanopi Modern Minimalis",
    category: "Kanopi",
    description: "Kanopi dengan desain minimalis menggunakan material polycarbonate berkualitas tinggi",
  },
  {
    image: portfolioRoof,
    title: "Konstruksi Atap Baja Ringan",
    category: "Atap",
    description: "Pemasangan atap baja ringan untuk bangunan komersial dengan struktur kokoh",
  },
  {
    image: portfolioBalcony,
    title: "Balkon Kaca Modern",
    category: "Balkon",
    description: "Balkon dengan railing kaca dan frame stainless steel untuk tampilan elegan",
  },
  {
    image: portfolioCeiling,
    title: "Plavon Dekoratif Mewah",
    category: "Plavon",
    description: "Plavon gypsum dengan desain dekoratif untuk interior ruang tamu mewah",
  },
  {
    image: portfolioFence,
    title: "Pagar Besi Tempa Klasik",
    category: "Pagar",
    description: "Pagar besi tempa dengan finishing powder coating anti karat berkualitas tinggi",
  },
  {
    image: portfolioStairs,
    title: "Tangga Besi Industrial",
    category: "Tangga",
    description: "Tangga dengan desain industrial modern menggunakan material besi berkualitas",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + portfolioItems.length) % portfolioItems.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              PORTFOLIO KAMI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Karya Terbaik <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat hasil kerja profesional kami yang telah dipercaya oleh ratusan klien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              onClick={() => openLightbox(index)}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/90 via-construction-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-secondary/90 rounded-full p-4">
                    <ZoomIn className="w-8 h-8 text-secondary-foreground" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-secondary rounded-full mb-2">
                    <span className="text-xs font-semibold text-secondary-foreground">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 text-primary-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-6xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={portfolioItems[selectedImage].image}
              alt={portfolioItems[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image Details */}
            <div className="mt-6 text-center">
              <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-3">
                <span className="text-sm font-semibold text-secondary-foreground">
                  {portfolioItems[selectedImage].category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                {portfolioItems[selectedImage].title}
              </h3>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                {portfolioItems[selectedImage].description}
              </p>
              <p className="text-sm text-primary-foreground/60 mt-4">
                {selectedImage + 1} / {portfolioItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
