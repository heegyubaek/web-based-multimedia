import { Inter, Lusitana, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
