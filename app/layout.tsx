import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nghia Blog's",
  description: "Created by Nghia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 dark:text-white">
        <div className="flex flex-col justify-between min-h-screen max-w-screen-xl mx-auto my-0">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
