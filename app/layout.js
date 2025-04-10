import "../styles/globals.css";

export const metadata = {
  title: "Rick and Morty App",
  description: "Meu primer consumo de API",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
);
}
