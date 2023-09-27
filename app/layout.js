import { AuthProvider } from "./Providers";
import "../styles/main.scss";
import Header from '@/components/Header';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ewaste admin India",
  description: "find ewaste companys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
