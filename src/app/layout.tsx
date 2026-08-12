import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#0f172a" }] };
export const metadata: Metadata = {
  title: "SS3 MasterClass — Learn. Practise. Test. Master.",
  description: "The complete SS3 interactive learning platform combining digital textbooks, CBT examinations, AI tutoring, and comprehensive study tools. Created by Awoyemi Fawas.",
  keywords: ["SS3", "WAEC", "NECO", "CBT", "exam preparation", "Nigerian education"],
  authors: [{ name: "Awoyemi Fawas" }], creator: "Awoyemi Fawas",
  openGraph: { title: "SS3 MasterClass — Learn. Practise. Test. Master.", description: "The complete SS3 interactive learning platform. Created by Awoyemi Fawas.", type: "website", siteName: "SS3 MasterClass" },
  robots: "index, follow", manifest: "/manifest.json",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="h-full antialiased" suppressHydrationWarning><body className="h-full"><AppShell>{children}</AppShell></body></html>;
}