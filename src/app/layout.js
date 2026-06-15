import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || baseUrl),

  title: "Premium Co-Living Spaces | Uniliv",

  description:
    "Premium co-living spaces with meals, WiFi, housekeeping and zero brokerage for students and professionals.",

  keywords: [
    "co living",
    "pg near me",
    "student accommodation",
    "co living noida",
    "managed living",
  ],

  openGraph: {
    title: "Premium Co-Living Spaces | Uniliv",

    description:
      "Premium co-living with WiFi, meals, housekeeping and zero brokerage.",

    url: "https://stay.uniliv.in",

    siteName: "Uniliv",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <Navbar /> */}
        {children}
        <MobileStickyCTA />
        <GoogleAnalytics gaId="G-GVR1RYVJCS" />
        <GoogleTagManager gaId="GTM-WSQX4V4H" />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
    ${
      process.env.NEXT_PUBLIC_META_PIXEL_ID
        ? `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0';
      n.queue=[];

      t=b.createElement(e);
      t.async=!0;
      t.src=v;

      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)

      }(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      fbq(
        'init',
        '${process.env.NEXT_PUBLIC_META_PIXEL_ID}'
      );

      fbq(
        'track',
        'PageView'
      );
    `
        : ""
    }
  `}
        </Script>

        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{
                display: "none",
              }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
