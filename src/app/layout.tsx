import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import { systemStatus } from "@/data/system-status";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: systemStatus.name,
  description: systemStatus.role,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-textPrimary min-h-screen flex flex-col`}
      >

        <Header />
        {children}
      </body>
    </html>
  );
}
