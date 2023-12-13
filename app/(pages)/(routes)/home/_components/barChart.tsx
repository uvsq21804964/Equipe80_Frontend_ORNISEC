'use client';

import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any[] | undefined = [];

// Tableau des noms de mois
const moisDeLAnnee = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

// Générer des valeurs aléatoires pour chaque mois
// eslint-disable-next-line no-plusplus
for (let i = 0; i < moisDeLAnnee.length; i++) {
  const mois = moisDeLAnnee[i];
  const valeurAleatoire = Math.floor(Math.random() * 100); // Génère un nombre aléatoire entre 0 et 100

  data.push({ mois, valeur: valeurAleatoire });
}

function RechartsExample() {
  const [tailleElement, setTailleElement] = useState(window.innerWidth * 0.8);

  const handleRedimensionnement = () => {
    setTailleElement(window.innerWidth * 0.8);
  };

  useEffect(() => {
    window.addEventListener('resize', handleRedimensionnement);
    return () => {
      window.removeEventListener('resize', handleRedimensionnement);
    };
  }, []);

  return (
    <BarChart
      width={tailleElement}
      height={270}
      data={data}
      margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
      className="bg-white p-0 w-full max-h-content"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mois" />
      <YAxis dataKey="valeur" />
      <Bar dataKey="valeur" stroke="#9400D3" barSize={20} />
      <Tooltip />
    </BarChart>
  );
}

export default RechartsExample;
