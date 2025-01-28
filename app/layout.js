import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Dev Motors",
  description: "cosme.teixeira@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-slate-300 overflow-hidden"
      >
        {children}
      </body>
    </html>
  );
}
