import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bapak Andi Setiawan",
    role: "Pemilik Rumah",
    location: "Bekasi Selatan",
    rating: 5,
    text: "Pelayanan sangat memuaskan! Kanopi yang dipasang sangat kokoh dan rapi. Tim kerja profesional dan selesai tepat waktu. Highly recommended!",
  },
  {
    name: "Ibu Siti Nurhaliza",
    role: "Pengusaha",
    location: "Bekasi Timur",
    rating: 5,
    text: "Puas banget dengan hasil pemasangan pagar dan tangga di rumah. Desainnya modern dan sesuai harapan. Harga juga sangat reasonable. Terima kasih Indahcanopy!",
  },
  {
    name: "Bapak Rudi Hartono",
    role: "Kontraktor",
    location: "Bekasi Barat",
    rating: 5,
    text: "Sudah beberapa kali bekerja sama untuk proyek klien. Selalu memberikan hasil terbaik dengan kualitas material premium. Partner yang sangat bisa diandalkan!",
  },
  {
    name: "Ibu Maya Kusuma",
    role: "Pemilik Kafe",
    location: "Bekasi Utara",
    rating: 5,
    text: "Kanopi outdoor untuk kafe saya sangat bagus dan tahan lama. Pengerjaan cepat dan tidak mengganggu operasional. Tim yang ramah dan komunikatif. Mantap!",
  },
  {
    name: "Bapak Agus Wijaya",
    role: "Developer",
    location: "Bekasi",
    rating: 5,
    text: "Untuk proyek perumahan, Indahcanopy selalu jadi pilihan utama. Kualitas konsisten, harga kompetitif, dan tepat deadline. Profesional sekali!",
  },
  {
    name: "Ibu Linda Putri",
    role: "Ibu Rumah Tangga",
    location: "Bekasi Selatan",
    rating: 5,
    text: "Plavon dan balkon rumah saya dikerjakan dengan sangat rapi. Hasil akhirnya melebihi ekspektasi. Suami juga puas! Terima kasih atas kerja kerasnya.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              TESTIMONI KLIEN
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Apa Kata <span className="text-primary">Mereka?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground mt-1">📍 {testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
