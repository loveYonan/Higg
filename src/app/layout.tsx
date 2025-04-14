import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.description}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logoss.svg",
      href: "/logoss.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen bg-[#19191C]")}
      >
        <QueryProvider>
          <Toaster />
          {children}
        </QueryProvider>

      </body>
    </html>
  );
}
