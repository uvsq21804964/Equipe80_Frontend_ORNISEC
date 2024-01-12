/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';

import { DataTable } from './data-table';
import { columns } from './columns';

function getData(): Promise<any[]> {
  return [
    {
      Entreprise: 'CIC',
      Gérant: 'M Example',
      Début: '01/07/23',
      Fin: '01/07/24',
    },
    {
      Entreprise: 'Decathlon',
      Gérant: 'Tom Abbouz',
      Début: '01/07/23',
      Fin: '01/07/24',
    },
    {
      Entreprise: 'Ferrero',
      Gérant: 'Elon Musk',
      Début: '23/12/23',
      Fin: '23/12/24',
    },
    {
      Entreprise: 'Philips',
      Gérant: 'Jeff Bezos',
      Début: '31/10/23',
      Fin: '31/10/24',
    },
    {
      Entreprise: 'EDF',
      Gérant: 'M Example',
      Début: '03/05/23',
      Fin: '03/05/24',
    },
    {
      Entreprise: 'Club Med',
      Gérant: 'Isaure Donato',
      Début: '07/09/23',
      Fin: '07/09/24',
    },
    {
      Entreprise: 'Crédit mutuel',
      Gérant: 'Quentin Fierling',
      Début: '01/08/23',
      Fin: '01/08/24',
    },
    {
      Entreprise: 'Coca Cola',
      Gérant: 'Ange Fleury',
      Début: '28/07/23',
      Fin: '28/07/24',
    },
    {
      Entreprise: 'Orange',
      Gérant: 'Lacina Bakayoko',
      Début: '04/07/23',
      Fin: '04/07/24',
    },
    {
      Entreprise: 'Air France',
      Gérant: 'Olivier Ornisec',
      Début: '13/11/23',
      Fin: '13/11/24',
    },
    {
      Entreprise: 'Dassault',
      Gérant: 'Elon Musk',
      Début: '10/05/23',
      Fin: '10/05/24',
    },
    {
      Entreprise: 'Thalès',
      Gérant: 'Emmanuel Macron',
      Début: '01/01/23',
      Fin: '01/01/24',
    },
    {
      Entreprise: 'Microsoft',
      Gérant: 'Christophe Lerouge',
      Début: '12/07/23',
      Fin: '12/07/24',
    },
    {
      Entreprise: 'Chanel',
      Gérant: 'Isaure Donato',
      Début: '31/04/23',
      Fin: '31/04/24',
    },
    {
      Entreprise: 'Adidas',
      Gérant: 'Quentin Fierling',
      Début: '26/08/23',
      Fin: '26/08/24',
    },
    {
      Entreprise: 'Peugeot',
      Gérant: 'M Exemple',
      Début: '01/06/23',
      Fin: '01/06/24',
    },
    {
      Entreprise: 'Mercedes',
      Gérant: 'Ange FLeury',
      Début: '07/11/23',
      Fin: '07/11/24',
    },
    {
      Entreprise: 'Leclerc',
      Gérant: 'Tom Abbouz',
      Début: '01/07/23',
      Fin: '01/07/24',
    },
  ];
}

const ListAudits = () => {
  const users = getData();
  return (
    <div className="p-6">
      <DataTable columns={columns} data={users} itemsPerPage={5} />
    </div>
  );
};

export default ListAudits;
