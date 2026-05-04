"use client";

import { useState } from "react";
import { Share2, Link as LinkIcon, Check, Twitter, Facebook, Linkedin, Mail, MessageCircle, X } from "lucide-react";

interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
}

export default function ShareButton({ url, title, description }: ShareButtonProps) {
  // Controls the visibility of the share dropdown menu (true = visible, false = hidden)
  const [isOpen, setIsOpen] = useState(false);
  // Tracks whether the link has been copied to clipboard
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

  const shareLinks = [
    {
      name: "X (previously Twitter)",
      icon: X,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "hover:bg-blue-50 hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-50 hover:text-blue-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-50 hover:text-blue-800",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
      color: "hover:bg-green-50 hover:text-green-600",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description || title}\n\n${shareUrl}`)}`,
      color: "hover:bg-slate-50 hover:text-slate-700",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      // Auto-close the dropdown after 2 seconds
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false); // Close the dropdown
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
    setIsOpen(false); // Close dropdown after sharing
  };

  return (
    <div className="relative">
      {/* Main share button - toggles dropdown visibility */}
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
        className="p-2 text-slate-600 hover:text-teal-600 transition relative"
        aria-label="Share this post"
      >
        <Share2 className="h-5 w-5" />
      </button>

      {/* Dropdown menu - only rendered when isOpen is true */}
      {isOpen && (
        <>
          {/* Backdrop - clicking it closes the dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)} // Close dropdown when backdrop is clicked
          />

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-20 overflow-hidden">
            <div className="p-3 border-b border-slate-100">
              <p className="text-sm font-semibold text-slate-900">Share this article</p>
            </div>

            {/* Social Media Options */}
            <div className="py-2">
              {shareLinks.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.name}
                    onClick={() => handleShare(platform.url)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 transition-colors ${platform.color}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{platform.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Copy Link */}
            <div className="border-t border-slate-100 p-2">
              <button
                onClick={handleCopyLink}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors ${
                  copied
                    ? "bg-green-50 text-green-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Link copied!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="h-4 w-4" />
                    <span>Copy link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
