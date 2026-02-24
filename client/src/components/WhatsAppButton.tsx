import { MessageCircle } from "lucide-react";

/**
 * WhatsApp Floating Button
 * Botão fixo no canto inferior direito para contato via WhatsApp
 */
export default function WhatsAppButton() {
  const whatsappNumber = "5521970699007";
  const message = "Olá! Gostaria de conhecer mais sobre o Instituto Maria Luz.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center group"
      title="Envie uma mensagem no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 bg-green-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
}
