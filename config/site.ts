import type { SiteConfig } from "@/lib/types";
export const siteConfig: SiteConfig = {
  siteName: "Cut a Rock Wiki",
  shortName: "CR",
  siteSlug: "cut-a-rock",
  description: {
    en: "Train on anvils, break through floors and turn rare rocks into materials with your cutting machines."
  },
  siteUrl: "https://www.cutarock.wiki",
  searchVisibility: "public",
  architecture: {
    enabled: true,
    templates: [
      "landing",
      "hub"
    ]
  },
  theme: {
    accent: "#a7e36b",
    accentSoft: "#a7e36b",
    background: "#10121a",
    panel: "#191d29"
  },
  brandIcon: {
    src: "/images/official-icon.png",
    alt: {
      en: "Official Cut a Rock icon"
    },
    sourceId: "official-game"
  },
  navigationIcons: {
    home: "guides",
    start: "guides",
    machines: "guides",
    upgrades: "guides",
    floors: "guides",
    codes: "codes",
    about: "guides"
  },
  supportedLocales: [
    "en",
    "de",
    "fr",
    "es",
    "ja"
  ],
  publishedLocales: [
    "en"
  ],
  plannedLocales: [],
  lastVerified: "2026-11-01",
  officialLinks: [
    {
      label: "Play on Roblox",
      url: "https://www.roblox.com/games/113742027864370"
    },
    {
      label: "Duality Works community",
      url: "https://www.roblox.com/communities/122026092"
    }
  ],
  heroImage: {
    src: "/images/official-hero.png",
    alt: {
      en: "Official Cut a Rock promotional artwork"
    },
    sourceId: "official-game",
    heroMediaType: "official-promotional-image",
    ratio: "video"
  },
  heroVideo: null,
  mediaPresentation: {
    showImageText: false
  },
  analytics: {
    enabled: true,
    measurementId: "G-DWVMBXMF1L"
  },
  ads: {
    enabled: true,
    previewPlaceholders: false,
    desktopChrome: {
      enabled: true
    },
    placements: {
      "top-sticky": false,
      "left-sticky": true,
      "home-banner": true,
      "article-banner": true,
      "sidebar-square": false
    }
  },
  evidenceLabels: [
    {
      label: "Official details and gameplay",
      note: {
        en: "Recorded interfaces can change."
      }
    }
  ],
  disclaimer: {
    en: "Independent fan guide. Not affiliated with Roblox or Duality Works."
  }
} satisfies SiteConfig;
