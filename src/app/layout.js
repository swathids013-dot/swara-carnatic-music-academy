import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🌍 SEO METADATA */
export const metadata = {
  title: "Swara Carnatic Music Academy | Online Carnatic Music Classes",
  description:
    "Swara Carnatic Music Academy offers structured online Carnatic vocal music classes for kids and adults worldwide. Founded by Swathi Sathyanarayana.",
  keywords: [
    "Carnatic music classes online",
    "Carnatic vocal lessons",
    "Indian classical music classes",
    "Music classes for kids",
    "Online music lessons",
  ],
  authors: [{ name: "Swathi Sathyanarayana" }],
  creator: "Swathi Sathyanarayana",
  openGraph: {
    title: "Swara Carnatic Music Academy",
    description:
      "Learn authentic Carnatic music online from anywhere in the world.",
    url: "https://yourdomain.com",
    siteName: "Swara Carnatic Music Academy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
