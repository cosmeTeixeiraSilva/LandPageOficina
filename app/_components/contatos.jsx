import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
export default function Contatos() {
  return (
    <div
      id="contatos"
      className="text-center w-full mx-auto bg-black p-4 text-slate-200 drop-shadow rounded text-sm flex items-center justify-between space-x-4"
    >
      <div className="flex space-x-2 items-center">
        <MdOutlineMail size={30} />
        <h1 className="">cosme.teixeira@gmail.com</h1>
      </div>
      <div className="flex space-x-2 items-center">
        <BsWhatsapp size={30} />
        <h1 className="">(35) 9 9999 - 9999</h1>
      </div>
    </div>
  );
}
