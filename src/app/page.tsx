import { About } from "./_components/about";
import { Header } from "./_components/header";
import { Products } from "./_components/products";
import { Brands } from "./_components/brands";
import {Footer} from "./_components/footer"
import { Hero } from "./_components/hero"
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Brands/>  
      <Products/>
      <Services/>
      <Footer/>
    </main>
  );
}