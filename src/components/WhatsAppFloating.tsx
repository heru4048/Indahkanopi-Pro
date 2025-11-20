import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloating = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Indahcanopy Bkk 21, saya ingin berkonsultasi mengenai layanan Anda."
    );
    window.open(`https://wa.me/6285779985892?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse p-0"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};

export default WhatsAppFloating;
