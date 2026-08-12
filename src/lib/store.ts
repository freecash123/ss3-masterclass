"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface Bookmark { id: string; type: string; itemId: string; title: string; subjectId?: string; createdAt: string; }
export interface Note { id: string; title: string; content: string; subjectId?: string; topic?: string; createdAt: string; updatedAt: string; }
interface AppState {
  theme: "light" | "dark" | "system"; setTheme: (t: "light"|"dark"|"system") => void;
  soundEnabled: boolean; firstVisit: boolean; splashComplete: boolean;
  setSoundEnabled: (v: boolean) => void; setFirstVisit: (v: boolean) => void; setSplashComplete: (v: boolean) => void;
  fontSize: "small" | "medium" | "large"; setFontSize: (s: "small"|"medium"|"large") => void;
  reducedMotion: boolean; setReducedMotion: (v: boolean) => void;
  isAuthenticated: boolean; userRole: "student"|"teacher"|"admin"|"parent";
  login: (r: "student"|"teacher"|"admin"|"parent") => void; logout: () => void;
  profile: { name: string; avatar: string; class: string; streak: number; cbtAverage: number; lessonsCompleted: number; questionsAnswered: number; studyTime: number; points: number; achievements: string[] };
  updateProfile: (u: Partial<AppState["profile"]>) => void;
  bookmarks: Bookmark[]; addBookmark: (b: Bookmark) => void; removeBookmark: (id: string) => void; isBookmarked: (type: string, itemId: string) => boolean;
  notes: Note[]; addNote: (n: Note) => void; updateNote: (id: string, u: Partial<Note>) => void; removeNote: (id: string) => void;
  pomodoroSettings: { focus: number; break: number }; setPomodoroSettings: (s: { focus: number; break: number }) => void;
  sidebarOpen: boolean; setSidebarOpen: (o: boolean) => void;
  searchQuery: string; setSearchQuery: (q: string) => void;
}
export const useAppStore = create<AppState>()(persist((set, get) => ({
  theme: "system", setTheme: (theme) => set({ theme }),
  soundEnabled: false, firstVisit: true, splashComplete: false,
  setSoundEnabled: (v) => set({ soundEnabled: v }), setFirstVisit: (v) => set({ firstVisit: v }), setSplashComplete: (v) => set({ splashComplete: v }),
  fontSize: "medium", setFontSize: (v) => set({ fontSize: v }),
  reducedMotion: false, setReducedMotion: (v) => set({ reducedMotion: v }),
  isAuthenticated: false, userRole: "student",
  login: (r) => set({ isAuthenticated: true, userRole: r }), logout: () => set({ isAuthenticated: false, userRole: "student" }),
  profile: { name: "Student", avatar: "", class: "SS3", streak: 7, cbtAverage: 78, lessonsCompleted: 24, questionsAnswered: 342, studyTime: 1260, points: 4850, achievements: ["first-lesson", "first-quiz", "7-streak"] },
  updateProfile: (u) => set((s) => ({ profile: { ...s.profile, ...u } })),
  bookmarks: [], addBookmark: (b) => set((s) => ({ bookmarks: [...s.bookmarks, b] })),
  removeBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.filter((b) => b.id !== id) })),
  isBookmarked: (type, itemId) => get().bookmarks.some((b) => b.type === type && b.itemId === itemId),
  notes: [], addNote: (n) => set((s) => ({ notes: [n, ...s.notes] })),
  updateNote: (id, u) => set((s) => ({ notes: s.notes.map((n) => n.id === id ? { ...n, ...u, updatedAt: new Date().toISOString() } : n) })),
  removeNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
  pomodoroSettings: { focus: 25, break: 5 }, setPomodoroSettings: (v) => set({ pomodoroSettings: v }),
  sidebarOpen: true, setSidebarOpen: (v) => set({ sidebarOpen: v }),
  searchQuery: "", setSearchQuery: (v) => set({ searchQuery: v }),
}), { name: "ss3mc", partialize: (s) => ({ theme: s.theme, soundEnabled: s.soundEnabled, firstVisit: s.firstVisit, splashComplete: s.splashComplete, fontSize: s.fontSize, reducedMotion: s.reducedMotion, profile: s.profile, bookmarks: s.bookmarks, notes: s.notes, pomodoroSettings: s.pomodoroSettings }) }));