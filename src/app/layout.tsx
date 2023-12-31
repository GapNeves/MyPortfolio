import './globals.scss';
import { Roboto, Noto_Serif_Balinese } from 'next/font/google';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const principal = Noto_Serif_Balinese({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Gabriel Pereira',
  description: 'Gabriel Pereira is a Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
