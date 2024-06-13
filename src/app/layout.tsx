import '@/app/globals.css';
import Header from '@/ui/Header';
import { sourceSans3 } from '@/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Smarkets Betting Exchange',
    default: 'Smarkets Betting Exchange',
  },
  description: 'The Smarkets betting exchange allows you to back and lay with the best betting odds and lowest commission on all major sports and politics.',
  
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} antialiased`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}