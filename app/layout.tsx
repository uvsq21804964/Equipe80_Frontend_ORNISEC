'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import ToasterContext from '../components/ToasterContext';

const inter = Inter({ subsets: ['latin'] });
const colors = ['classique', 'imt', 'vert', 'sombre'];

export const metadata: Metadata = {
  title: 'IMT Audit',
  description:
    "Une application correspondant aux besoins des prestataires de l'ANSSI",
  icons: {
    icon: '/images/LogoBlancEcole.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('access_token') === null) {
      router.push('/login');
    }
    setDataLoaded(true);
  }, [router]);

  let color = localStorage.getItem('theme-color');
  if (color === null || !colors.includes(color)) {
    localStorage.setItem('theme-color', 'classique');
    color = 'classique';
  }

  if (!dataLoaded) {
    return (
      <html lang="fr">
        <body className={`${inter.className} bg-background theme-${color}`}>
          <div className="flex items-center justify-center h-screen">
            <div className="border-[32px] border-solid border-opacity-10 border-gray-800 rounded-full animate-spin w-60 h-60 border-t-[#3498db]" />
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="fr">
      <body className={`${inter.className} bg-background theme-${color}`}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
