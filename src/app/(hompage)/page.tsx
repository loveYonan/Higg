import { Faq } from "@/components/home/faq";
import Footer from "@/components/home/footer";
import { Hero } from "@/components/home/hero";


export default async function Home() {




  return (
    <div className=" flex flex-col ">
      <Hero />
      <Faq />
      <Footer />
    </div>
  );
}
