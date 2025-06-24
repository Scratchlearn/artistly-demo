
import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <Suspense>
    <html lang="en">
      <body>{children}</body>
    </html>
    </Suspense>
  );
}

