import Image from "next/image";
import Banner from "@/components/Banner";
import Us from '@/components/Us'
import About from "@/components/About";
import Patners from "@/components/Patners";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner/>
      <Us/>
      <Patners/>
      <About/>
    </div>
  );
}
