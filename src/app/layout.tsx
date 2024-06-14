import "@/app/globals.css";
import Header from "@/ui/Header";
import SideNav from "@/ui/SideNav";
import { sourceSans3 } from "@/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Smarkets Betting Exchange",
    default: "Smarkets Betting Exchange",
  },
  description:
    "The Smarkets betting exchange allows you to back and lay with the best betting odds and lowest commission on all major sports and politics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} antialiased`}>
        <Header />
        <div className="flex w-full h-full pt-12">
          <SideNav />
          <div className="ml-56 w-full h-full flex">{children}</div>
        </div>
      </body>
    </html>
  );
}
