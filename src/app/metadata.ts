import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "AI Tools",
    "AI Software",
    "AI",
    "Agent",
    "Enterprise search",
    "knowledge base",
    "search engine",
    "Salesforce",
    "Sharepoint",
    "Support",
    "Sales",
    "Engineering",
    "Product",
    "Operations",
    "Assistant",
  ],
  authors: [
    {
      name: "Clement Peleman",
      url: "https://clementpeleman.netlify.app",
    },
  ],
  creator: "clementpeleman",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@clementpeleman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
