import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN =
  "Spacetime Engine · The Nature of Space, Time, Gravity, Causality & the Structure of Reality";
const TITLE_ZH =
  "时空引擎 · 空间、时间、引力、因果与现实结构的本质";
const DESC =
  "A civilisation-scale, bilingual exploration of spacetime — relativity, gravity, black holes, quantum gravity, cosmology, information and the question of whether space and time are passive backgrounds or the deepest operating system of reality.";

export const metadata: Metadata = {
  metadataBase: new URL("https://spacetime-engine.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "spacetime", "space and time", "relativity", "special relativity", "general relativity",
    "gravity", "gravitation", "curved spacetime", "geodesics", "time dilation", "length contraction",
    "black holes", "event horizon", "singularity", "Hawking radiation", "accretion disk", "neutron star",
    "wormhole", "warp drive", "quantum gravity", "quantum foam", "Planck scale", "string theory",
    "loop quantum gravity", "holographic principle", "AdS/CFT", "emergent spacetime", "it from qubit",
    "cosmology", "Big Bang", "cosmic inflation", "dark matter", "dark energy", "cosmic expansion",
    "multiverse", "entropy", "arrow of time", "causality", "block universe", "higher dimensions",
    "simulation theory", "information theory", "observer effect", "consciousness", "structure of reality",
    "时空", "相对论", "广义相对论", "狭义相对论", "引力", "弯曲时空", "时间膨胀", "黑洞", "事件视界",
    "奇点", "霍金辐射", "虫洞", "曲速", "量子引力", "量子泡沫", "普朗克尺度", "弦论", "圈量子引力",
    "全息原理", "涌现时空", "宇宙学", "大爆炸", "宇宙暴胀", "暗物质", "暗能量", "宇宙膨胀", "多重宇宙",
    "熵", "时间之箭", "因果", "块状宇宙", "高维", "模拟假说", "信息论", "观察者效应", "现实结构",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Spacetime Engine · 时空引擎 — the nature of space, time, gravity and the structure of reality" }],
    title: TITLE_EN,
    description:
      "From absolute space and time to dynamic spacetime woven from energy, information and observation — a bilingual atlas of relativity, gravity, black holes, quantum gravity and cosmology.",
    url: "https://spacetime-engine.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Space · time · gravity · causality · quantum spacetime · cosmology. A bilingual exploration of whether reality is, at bottom, a dynamic spacetime-information system.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#04030d" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://spacetime-engine.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-void-950 text-ink-100 antialiased">
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
