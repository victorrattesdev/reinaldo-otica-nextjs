import { About } from "../../../oticadev/src/app/_components/about";
import { Header } from "../../../oticadev/src/app/_components/header";
import { Products } from "../../../oticadev/src/app/_components/products";
import { Brands } from "../../../oticadev/src/app/_components/brands";
import {Footer} from "../../../oticadev/src/app/_components/footer"
import { Hero } from "../../../oticadev/src/app/_components/hero"
import { Services } from "../../../oticadev/src/app/_components/services";

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