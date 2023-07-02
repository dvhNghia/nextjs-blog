import Brand from "@/components/Brand";
import Hero from "@/components/Hero";
import { Poppins, Oswald, Crimson_Text } from "next/font/google";

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Hero/>
      <Brand/>
    </main>
  );
}
