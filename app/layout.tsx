import Head from "./Head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "청정 구역",
  description: "청정 구역",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen w-screen flex justify-center">
          <div className="min-h-screen max-w-[410px] w-screen pt-[32px] flex-col justify-center">
            <Head />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
