import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { Toaster } from "react-hot-toast";
import SecurityProvider from "./components/SecurityProvider";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Caller.Digital - Omnichannel Customer Service Platform | AI Voice Bots",
  description: "Transform your customer experience with AI-powered omnichannel customer service, automated support solutions, and intelligent voice chat bots. Improve CSAT scores with our enterprise platform.",
  keywords: "omnichannel customer service, automated customer service, omnichannel support, voice chat bot, ai voice bots, how to improve csat, customer service platform",
  openGraph: {
    title: "Caller.Digital - Omnichannel Customer Service Platform",
    description: "AI-powered omnichannel customer service solutions with automated support and voice chat bots",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caller.Digital - Omnichannel Customer Service Platform",
    description: "AI-powered omnichannel customer service solutions with automated support and voice chat bots",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WJP9PH0Q72"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJP9PH0Q72');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}> 
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
          {/* Main Content */}
          <main className="flex-1 pt-16 flex flex-col">
            {children}
          </main>
          {/* Footer */}
    
          {/* Chat Widget */}
          <ChatWidget />
        </SecurityProvider>
        <Analytics />
        {/* DevTools Detection Script - Site Wide */}
        <Script id="devtools-detect" strategy="afterInteractive">
          {`
            (function() {
              // Only run on desktop devices
              if (window.innerWidth >= 1024) {
                var threshold = 160;
                setInterval(function() {
                  var widthThreshold = window.outerWidth - window.innerWidth > threshold;
                  var heightThreshold = window.outerHeight - window.innerHeight > threshold;
                  if (widthThreshold || heightThreshold) {
                    window.location.href = 'https://www.google.com';
                  }
                }, 1000);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
