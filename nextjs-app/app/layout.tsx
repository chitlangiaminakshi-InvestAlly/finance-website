import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppFloat from "@/components/whatsapp-float";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://investally.co.in'),
  title: {
    default: "InvestAlly - We don't sell Investments - We build Investors",
    template: "%s | InvestAlly"
  },
  description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act- it's a lifelong relationship.",
  applicationName: "InvestAlly",
  authors: [{ name: "InvestAlly Team" }],
  keywords: ["investment advisory", "financial planning", "mutual funds", "insurance", "home loans", "wealth management", "SEBI registered", "India"],
  creator: "InvestAlly",
  publisher: "InvestAlly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/investally_only_logo.png", sizes: "192x192", type: "image/png" },
      { url: "/investally_only_logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/investally_only_logo.png",
    apple: [
      { url: "/investally_only_logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://investally.co.in",
    siteName: "InvestAlly",
    title: "InvestAlly - We don't sell Investments - We build Investors",
    description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
    images: [
      {
        url: "/investally_only_logo.png",
        width: 512,
        height: 512,
        alt: "InvestAlly Logo",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "InvestAlly - We don't sell Investments - We build Investors",
    description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
    images: ["/investally_only_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "265b8628398af32c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blogOnlyMode = process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true';

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}
        suppressHydrationWarning
      >
        {/* JSON-LD Structured Data for Google */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "InvestAlly",
              "url": "https://investally.co.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://investally.co.in/investally_only_logo.png",
                "width": 512,
                "height": 512,
                "caption": "InvestAlly Logo"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://investally.co.in/investally_only_logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
              "slogan": "We don't sell Investments - We build Investors",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "Support@investally.co.in",
                "telephone": "+91-91667-79632",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://investally.co.in"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Financial Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mutual Fund Advisory",
                      "description": "Expert mutual fund investment advisory and portfolio management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Insurance Advisory",
                      "description": "Comprehensive insurance planning and advisory services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Loan Services",
                      "description": "Home loans and personal loan assistance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {children}
        <WhatsAppFloat />

        {/* Tawk.to Live Chat Widget - Hidden in blog-only mode */}
        {/* {!blogOnlyMode && (
          <Script
            id="tawk-to-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/693bb6847e41ef1988ae9158/1jc8k1ub9';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          />
        )} */}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-53XTW1V1LE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-53XTW1V1LE');
            `,
          }}
        />
      </body>
    </html>
  );
}
