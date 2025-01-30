import Image from "next/image";
import Header from "./_components/header";
import Botoes from "./_components/botoes";
import Hero from "./_components/hero";
import Secao from "./_components/secao";
import IMCCalculadora from "./_components/IMCCalculadora";
import Hero2 from "./_components/hero2";

export default function Home() {
  return (
    <div className="w-screen sm:w-[90vw] bg-white mx-auto">
      {/*Componente 1 - Header */}
      <Header />
      <hr></hr>
      {/*Componente 2 - Botoes */}
      <Botoes />
      <Hero />
      <br></br>
      <Hero2 />

    </div>
  );
}
