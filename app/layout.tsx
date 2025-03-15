import '@/app/ui/global.css'
import { lusitana,roboto } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`${lusitana.className,roboto.className} antialiased`}>       
        {children}
        </body>
    </html>
  );
}
