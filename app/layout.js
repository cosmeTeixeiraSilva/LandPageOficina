
import "./globals.css"
export const metadata = {
  title: "Motors Senac Lavras/MG",
  description: "cosme.teixeira@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-slate-200 w-screen  mx-auto tracking-[0.2rem] "
      >
        {children}
      </body>
    </html>
  );
}
