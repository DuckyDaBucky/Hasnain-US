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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && !window.localStorage) {
                Object.defineProperty(window, 'localStorage', {
                  value: {
                    getItem: () => null,
                    setItem: () => {},
                    removeItem: () => {},
                    clear: () => {}
                  }
                });
              }
            `,
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
