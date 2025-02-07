import { About } from "./about";
import { Header } from "./header";
import { Products } from "./products";
import { Brands } from "./brands";
import {Footer} from "./footer"
import { Hero } from "./hero"
import { Services } from "./services";
import { Map } from "./map";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Brands/>  
      <Products/>
      <Services/>
      <Map/>
      <Footer/>
    </main>
  );
}