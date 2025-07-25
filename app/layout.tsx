// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
// import ChatWidget from "./components/ChatWidget";
// import { Toaster } from "react-hot-toast";
// import SecurityProvider from "./components/SecurityProvider";
// import { Analytics } from '@vercel/analytics/react';
// import Script from 'next/script';

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
//   title: "Caller.Digital - Omnichannel Customer Service Platform | AI Voice Bots",
//   description: "Transform your customer experience with AI-powered omnichannel customer service, automated support solutions, and intelligent voice chat bots. Improve CSAT scores with our enterprise platform.",
//   keywords: "omnichannel customer service, automated customer service, omnichannel support, voice chat bot, ai voice bots, how to improve csat, customer service platform",
//   openGraph: {
//     title: "Caller.Digital - Omnichannel Customer Service Platform",
//     description: "AI-powered omnichannel customer service solutions with automated support and voice chat bots",
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Caller.Digital - Omnichannel Customer Service Platform",
//     description: "AI-powered omnichannel customer service solutions with automated support and voice chat bots",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Search Console Verification */}
//         <meta name="google-site-verification" content="FZT-RuKhCrakNFxTZTMetCth6QQekfWoAYSbbp0SoLM" />
        
//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-WJP9PH0Q72"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-WJP9PH0Q72');
//           `}
//         </Script>
//       </head>
//       <body className={`${inter.className} min-h-screen flex flex-col justify-between bg-white overscroll-none`}> 
//         <SecurityProvider>
//           <Toaster 
//             position="top-right"
//             toastOptions={{
//               style: {
//                 background: '#1F2937',
//                 color: '#fff',
//                 border: '1px solid #374151',
//               },
//               success: {
//                 duration: 3000,
//                 iconTheme: {
//                   primary: '#10B981',
//                   secondary: '#fff',
//                 },
//               },
//               error: {
//                 duration: 4000,
//                 iconTheme: {
//                   primary: '#EF4444',
//                   secondary: '#fff',
//                 },
//               },
//             }}
//           />
//           <Navigation />
//           {/* Main Content */}
//           <main className="flex-1 pt-16 flex flex-col">
//             {children}
//           </main>
//           {/* Footer */}
    
//           {/* Chat Widget */}
//           <ChatWidget />
//         </SecurityProvider>
//         <Analytics />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { Toaster } from "react-hot-toast";
import SecurityProvider from "./components/SecurityProvider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Caller.Digital - Omnichannel Customer Service Platform | AI Voice Bots",
  description: "Deliver seamless customer support with AI-powered omnichannel voice bots. 24/7 automation, multilingual support, and enterprise-grade analytics.",
  keywords: "AI voice bots, customer support automation, omnichannel CX, voice AI for businesses, automated customer service, AI call center solutions",
  openGraph: {
    title: "Caller.Digital | AI-Powered Customer Service Platform",
    description: "Transform customer experience with AI voice bots, 24/7 omnichannel support, and enterprise-grade automation.",
    url: "https://www.caller.digital/",
    siteName: "Caller.Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.caller.digital/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caller.Digital AI-Powered Omnichannel Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caller.Digital | AI-Powered Customer Service",
    description: "AI voice bots and 24/7 customer support automation for modern enterprises.",
    site: "@caller_digital",
    creator: "@caller_digital",
    images: ["https://www.caller.digital/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Verification */}
        <meta name="google-site-verification" content="FZT-RuKhCrakNFxTZTMetCth6QQekfWoAYSbbp0SoLM" />

        {/* Language, Authorship, Canonical */}
        <meta name="language" content="en-US" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="author" content="Caller.Digital" />
        <meta name="copyright" content="https://www.caller.digital/" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.caller.digital/" />
        <link rel="alternate" href="https://www.caller.digital/" hrefLang="en" />
        <link rel="alternate" href="https://www.caller.digital/" hrefLang="en-IN" />
        <link rel="alternate" href="https://www.caller.digital/" hrefLang="en-US" />
        <link rel="alternate" href="https://www.caller.digital/" hrefLang="x-default" />

        {/* Favicons & Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f172a" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Caller.Digital",
          "url": "https://www.caller.digital/",
          "logo": "https://www.caller.digital/logo.jpeg",
          "description": "AI-Powered Omnichannel Customer Service Platform",
          "sameAs": [
            "https://www.linkedin.com/company/caller-digital/",
            "https://twitter.com/caller_digital"
          ]
        }
        `}} />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-WJP9PH0Q72" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-WJP9PH0Q72');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col justify-between bg-white overscroll-none`}>
        <SecurityProvider>
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1F2937',
                color: '#fff',
                border: '1px solid #374151',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          <Navigation />
          <main className="flex-1 pt-16 flex flex-col">{children}</main>
          <ChatWidget />
        </SecurityProvider>
        <Analytics />
      </body>
    </html>
  );
}
