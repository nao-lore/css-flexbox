import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "CSS Flexbox Generator - Visual Flexbox Builder | css-flexbox",
  description:
    "Free online CSS Flexbox generator. Visually build flex layouts with a live preview, per-child controls, and instant CSS output. No signup required.",
  keywords: [
    "css flexbox generator",
    "flexbox builder",
    "flexbox playground",
    "css flex layout",
    "flexbox tool",
    "visual flexbox",
  ],
  authors: [{ name: "css-flexbox" }],
  openGraph: {
    title: "CSS Flexbox Generator - Visual Flexbox Builder",
    description:
      "Free online tool to visually build CSS Flexbox layouts. Live preview, per-child controls, and one-click CSS copy.",
    url: "https://css-flexbox.vercel.app",
    siteName: "css-flexbox",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Flexbox Generator - Visual Flexbox Builder",
    description:
      "Free online tool to visually build CSS Flexbox layouts. Live preview, per-child controls, and one-click CSS copy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://css-flexbox.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CSS Flexbox Generator",
              description:
                "Free online CSS Flexbox generator with live preview. Build flex layouts visually with per-child controls and instant CSS output.",
              url: "https://css-flexbox.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Visual flex container preview",
                "Flex-direction, justify-content, align-items controls",
                "Per-child flex-grow, flex-shrink, flex-basis, order, align-self",
                "Real-time CSS output",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
