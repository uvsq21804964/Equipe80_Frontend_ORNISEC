/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import React, { useEffect, useState } from 'react';
import InstanceAPI from '@/app/api/api';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const OngoingAudits = () => {
  const [users, setUsers] = useState([]); // Utilisez le state pour stocker les données

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données
    const fetchData = async () => {
      try {
        const axiosConfig = {
          headers: {
            'Content-Type': 'application/json',
            Accept: '/',
            'Cache-Control': 'no-cache',
            'Cross-Origin-Resource-Policy': 'same-origin',
          },
        };

        const response = await InstanceAPI.get(
          `http://localhost:8080/currentAudits`,
          axiosConfig
        );

        const updatedDataPromises = response.data.map(async (item: any) => {
          const { _id, ...rest } = item;
          const jauge = await InstanceAPI.get(
            `http://localhost:8080/completionGauge/${_id}`,
            axiosConfig
          );
          return {
            Suppression: _id,
            ...rest,
            Progression: jauge.data,
          };
        });

        const updatedData = await Promise.all(updatedDataPromises);

        setUsers(updatedData);
        console.log('Données récupérées :', updatedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    // Appel de la fonction pour récupérer les données
    fetchData();
  }, []); // Le tableau de dépendances vide assure que useEffect s'exécute une seule fois lors du montage du composant

  return (
    <div className="p-6">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default OngoingAudits;
