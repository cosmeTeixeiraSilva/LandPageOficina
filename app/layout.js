
import "./globals.css";



export const metadata = {
  title: "Dev Motors",
  description: "cosme.teixeira@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-[#3f3f3f] w-screen  mx-auto"
      >
        {children}
      </body>
    </html>
  );
}
