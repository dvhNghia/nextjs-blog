import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Travel Blogs",
  description: "Created by Nghia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="sm:px-5 md:px-10 text-white">
          <Navbar />
          {children}
          {/* <Footer /> */}
      </body>
    </html>
  );
}
