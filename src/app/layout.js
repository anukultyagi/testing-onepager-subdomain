import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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

    url: "https://uniliv.in",

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
    index: true,
    follow: true,
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
        <Navbar />
        {children}
        <MobileStickyCTA />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
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
    `}
        </Script>

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
      </body>
    </html>
  );
}
