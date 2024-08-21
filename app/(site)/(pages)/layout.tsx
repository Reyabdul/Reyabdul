import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

import "../../globals.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>
          <Header />
        </header>
        <main className="main" id="main">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
