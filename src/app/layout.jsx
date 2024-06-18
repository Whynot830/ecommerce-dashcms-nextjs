import "./index.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "CMS",
  description: "CMS for e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark'>
      <body>{children}
        <Toaster />
      </body>
    </html>
  );
}
