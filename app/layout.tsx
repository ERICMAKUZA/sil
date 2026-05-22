import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from "@/components/theme-provider"
import { SpiderWebCanvas } from "@/components/spider-web-canvas"
import { SiteBackground } from "@/components/site-background"

import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-EVRCZQEE1H'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Synaptix InnovationLabs | Technology & Innovation Company',
  description: 'We build high-performance digital products that help businesses grow, automate, and make smarter decisions. Web, Data, AI & Automation.',
  verification: {
    google: 'tGITU3aURxgMJFjhVaDW_Fw_YU0czatX_pLFz4D0BFY',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Pixel — inline in <head> so any checker/scraper detects it immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','2098263407702149');
fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2098263407702149&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Background Layers */}
          <SiteBackground />

          {/* Global Spider Web Particle Animation */}
          <SpiderWebCanvas />

          {/* Main Content - sits above background layers */}
          <div className="relative" style={{ zIndex: 2 }}>
            {children}
          </div>
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
