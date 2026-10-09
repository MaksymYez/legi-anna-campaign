import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_Georgian, Oswald } from "next/font/google";
import "./globals.css";
import PhoneTracker from "@/components/PhoneTracker";

// Meta (Facebook) Pixel ID. Change here to point at a different pixel.
const META_PIXEL_ID = "2195529237958457";

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-body",
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Industrial display face for Latin headlines (e.g. the GRANDE wordmark).
const oswald = Oswald({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://legi-ana-campaign.workers.dev",
  ),
  title: "ანა ტყებუჩავას ეზო: −10% LEGI-ს ფილებზე | LEGI",
  description:
    "ანა ტყებუჩავამ ეზო LEGI-ს ფილებით განაახლა. ახალი ქალაქი, მიქსი და Grande კაპუჩინოს ფერში, ახლა 10%-იანი ფასდაკლებით.",
  keywords: ["ბეტონის ფილა", "ტროტუარის ფილა", "ეზოს ფილა", "Grande", "ახალი ქალაქი", "LEGI", "ანა ტყებუჩავა"],
  openGraph: {
    title: "ანა ტყებუჩავას ეზო: −10% LEGI-ს ფილებზე",
    description:
      "ნახე როგორ შეიცვალა ანას ეზო და მიიღე იგივე ფილები 10%-იანი ფასდაკლებით.",
    type: "website",
    locale: "ka_GE",
    siteName: "LEGI",
    // TODO: add /public/og-ana.jpg (1200×630) once photos are in, then:
    // images: [{ url: "/og-ana.jpg", width: 1200, height: 630, alt: "ანა ტყებუჩავას ეზო" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka" className={`${notoGeorgian.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <PhoneTracker />
        {children}
      </body>
    </html>
  );
}
