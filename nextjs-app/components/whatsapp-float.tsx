"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  // Hide WhatsApp float when blog-only mode is enabled
  const blogOnlyMode = process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true';

  if (blogOnlyMode) {
    return null;
  }

  const phoneNumber = "9166779632"; // Your phone number without + or spaces
  const message = "Hi, I would like to know more about Investally's services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </Link>
  );
}
