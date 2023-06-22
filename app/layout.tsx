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
      <body className="dark:bg-slate-800 dark:text-white p-8 xl:p-0">
        <div className="flex flex-col justify-between min-h-screen mx-auto max-w-screen-xl my-0">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
