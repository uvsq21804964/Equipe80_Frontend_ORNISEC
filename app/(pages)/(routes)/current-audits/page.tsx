/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';

import API from '@/app/api/api';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

async function getData(): Promise<any[]> {
  const data = await API.get(`currentAudits`, {
    withCredentials: true,
    // headers: {
    //   access_token:
    //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2NTZhM2MyNjBmMWE1OGZiYTRlODkzOGUiLCJpYXQiOjE3MDE5MzQyNTMsIm5iZiI6MTcwMTkzNDI1MywianRpIjoiYzUxNDljN2UtZDg5Yy00OGVmLWI1YTctM2MxODQ4YmFkZjZhIiwiZXhwIjoxNzAxOTM1MTUzLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.Klcx0t1rxLanQnePi7ngNsdwCIq7oOD5FgV0K7BNhXm3uRAyWtMYhsSCVxYtIsgT-5ZTTUNADr1gKD1TqgxOFQ',
    //   refresh_token:
    //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2NTZhM2MyNjBmMWE1OGZiYTRlODkzOGUiLCJpYXQiOjE3MDE5MzQyNTMsIm5iZiI6MTcwMTkzNDI1MywianRpIjoiOWE2ZjE0ZWMtNjVkMC00ZmY2LTkzNjctNTNkMWJlN2ViMGFlIiwiZXhwIjoxNzAxOTM3ODUzLCJ0eXBlIjoicmVmcmVzaCJ9.gyBGs0jF8AivqL0MTrkY3zTdAzS3fKF0Yb9l0mc6-I3EzIww9phniKA6IOpj7j2Yl2zZsPwGZkG5FKpbtMYs0A',
    //   logged_in: 'True',
    // },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(data);

  API.post(`createAudit`, {
    company_name: 'string',
    chef_auditeurs: 'string',
    list_auditeurs: ['string'],
    description: 'string',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return [
    {
      Entreprise: 'CIC',
      Responsable: 'M Example',
      Début: '01/07/23',
      Fin: '01/07/24',
    },
    {
      Entreprise: 'Decathlon',
      Responsable: 'Tom Abbouz',
      Début: '01/07/23',
      Fin: '01/07/24',
    },
    {
      Entreprise: 'Ferrero',
      Responsable: 'Elon Musk',
      Début: '23/12/23',
      Fin: '23/12/24',
    },
    {
      Entreprise: 'Philips',
      Responsable: 'Jeff Bezos',
      Début: '31/10/23',
      Fin: '31/10/24',
    },
    {
      Entreprise: 'EDF',
      Responsable: 'M Example',
      Début: '03/05/23',
      Fin: '03/05/24',
    },
    {
      Entreprise: 'Club Med',
      Responsable: 'Isaure Donato',
      Début: '07/09/23',
      Fin: '07/09/24',
    },
    {
      Entreprise: 'Crédit mutuel',
      Responsable: 'Quentin Fierling',
      Début: '01/08/23',
      Fin: '01/08/24',
    },
    {
      Entreprise: 'Coca Cola',
      Responsable: 'Ange Fleury',
      Début: '28/07/23',
      Fin: '28/07/24',
    },
    {
      Entreprise: 'Orange',
      Responsable: 'Lacina Bakayoko',
      Début: '04/07/23',
      Fin: '04/07/24',
    },
    {
      Entreprise: 'Air France',
      Responsable: 'Olivier Ornisec',
      Début: '13/11/23',
      Fin: '13/11/24',
    },
    {
      Entreprise: 'Dassault',
      Responsable: 'Elon Musk',
      Début: '10/05/23',
      Fin: '10/05/24',
    },
    {
      Entreprise: 'Thalès',
      Responsable: 'Emmanuel Macron',
      Début: '01/01/23',
      Fin: '01/01/24',
    },
    {
      Entreprise: 'Microsoft',
      Responsable: 'Christophe Lerouge',
      Début: '12/07/23',
      Fin: '12/07/24',
    },
    {
      Entreprise: 'Chanel',
      Responsable: 'Isaure Donato',
      Début: '31/04/23',
      Fin: '31/04/24',
    },
    {
      Entreprise: 'Adidas',
      Responsable: 'Quentin Fierling',
      Début: '26/08/23',
      Fin: '26/08/24',
    },
    {
      Entreprise: 'Peugeot',
      Responsable: 'M Exemple',
      Début: '01/06/23',
      Fin: '01/06/24',
    },
    {
      Entreprise: 'Mercedes',
      Responsable: 'Ange FLeury',
      Début: '07/11/23',
      Fin: '07/11/24',
    },
    {
      Entreprise: 'Leclerc',
      Responsable: 'Tom Abbouz',
      Début: '01/07/23',
      Fin: '01/07/24',
    },
  ];
}

const OngoingAudits = () => {
  const users = getData();
  return (
    <div className="p-6">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default OngoingAudits;
