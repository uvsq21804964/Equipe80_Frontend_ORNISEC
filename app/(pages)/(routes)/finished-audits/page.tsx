'use client';

import React, { useEffect, useState } from 'react';
import InstanceAPI from '@/app/api/api';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const FinishedAudits = () => {
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
          `http://localhost:8080/finishedAudits`,
          axiosConfig
        );

        // Mise à jour du state avec les données obtenues
        setUsers(response.data);
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

export default FinishedAudits;
