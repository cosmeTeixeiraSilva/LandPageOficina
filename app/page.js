import Image from "next/image";
import Header from "./_components/header";
import Botoes from "./_components/botoes";
import Hero from "./_components/hero";
import Secao from "./_components/secao";
import IMCCalculadora from "./_components/IMCCalculadora";
import Hero2 from "./_components/hero2";
import Contatos from "./_components/contatos";

export default function Home() {
  return (
    <div className=" space-y-1  bg-black w-[90vw] mx-auto">
      {/*Componente 1 - Header */}
      <Header />
      <hr className="text-[#454545]" />
      {/*Componente 2 - Botoes */}
      <Botoes />
      <Hero />
      <Hero2 foto="/foto2.jpg" id="hero2" alt="foto2" />
      <Hero2 foto="/foto3.jpg" id="hero3" alt="foto3" />
      <Hero2 foto="/foto4.jpg" id="hero4" alt="foto4" />
      <Contatos />

    </div>
  );
}
