import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImóvelPrime - Encontre o Imóvel dos Seus Sonhos",
  description: "Descubra as melhores oportunidades do mercado imobiliário. Apartamentos, casas, terrenos e imóveis comerciais para compra e locação em São Paulo e região.",
  keywords: "imóveis, apartamentos, casas, terrenos, comprar, alugar, São Paulo, imobiliária",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
