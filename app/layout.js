
import "./globals.css";



export const metadata = {
  title: "Dev Motors",
  description: "cosme.teixeira@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-[#3f3f3f] w-screen w-max-[1280px] mx-auto"
      >
        {children}
      </body>
    </html>
  );
}
