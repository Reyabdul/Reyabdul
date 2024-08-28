import React from "react";

import "../globals.css";

export const metadata = {
  title: "Rey Abdul",
  description: "Portfolio Website by Rey Abdul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
