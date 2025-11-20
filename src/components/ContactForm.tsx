import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Halo, saya ${formData.name}%0A%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0ALayanan: ${formData.service}%0A%0APesan:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/62123456789?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    toast({
      title: "Pesan Terkirim!",
      description: "Kami akan segera menghubungi Anda. Terima kasih!"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              HUBUNGI KAMI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Konsultasi <span className="text-primary">Gratis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi dan penawaran terbaik untuk proyek Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telepon</h3>
              <p className="text-muted-foreground">+62 857-7998-5892</p>
              <p className="text-muted-foreground">+62 838-7511-8270</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground break-all">heru4048@gmail.com</p>
              <p className="text-muted-foreground break-all">order@indahcanopy.com</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Workshop</h3>
              <p className="text-muted-foreground">Jl. Cisaat setu No.106, Telajung, Kec. Cikarang Barat Kabupaten Bekasi,
Jawa Barat Indonesia 17530<br />
                Bekasi, Jawa Barat<br />
                Indonesia 17530
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Masukkan nama Anda" required className="border-2" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="08xx xxxx xxxx" required className="border-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required className="border-2" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Layanan yang Diinginkan *</Label>
                  <Input id="service" name="service" value={formData.service} onChange={handleChange} placeholder="Contoh: Kanopi, Atap, dll" required className="border-2" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan / Detail Proyek *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Jelaskan detail proyek Anda, seperti ukuran, lokasi, dan kebutuhan khusus..." rows={6} required className="border-2 resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan via WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp kami
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactForm;