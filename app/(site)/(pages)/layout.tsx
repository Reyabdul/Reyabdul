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
    <html lang="eg">
      <body>
            <main className="main" id="main">
              <Header />
                {children}
              <Footer />  
            </main>
      </body>
    </html>
  );
}
