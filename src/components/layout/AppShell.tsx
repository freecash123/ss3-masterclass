"use client";
import { useEffect } from "react";
import { useStore } from "@/lib/store";
import SplashScreen from "@/components/splash/SplashScreen";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { theme } = useStore();
  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark", isDark);
  }, [theme]);
  return (
    <>
      <SplashScreen />
      <div className="flex h-screen overflow-hidden bg-[var(--bg)]">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-y-auto pb-16 lg:pb-0">{children}<Footer /></main>
        </div>
      </div>
      <MobileNav />
    </>
  );
}