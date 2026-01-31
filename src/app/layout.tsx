import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "AI Expense Tracker",
  description: "Track daily expenses, visualize with charts, and get AI-generated financial advice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
