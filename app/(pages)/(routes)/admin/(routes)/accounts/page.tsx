'use client';

import React, { useEffect, useState } from 'react';
import InstanceAPI from '@/app/api/api';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const UsersPage = () => {
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
          `http://localhost:8080/admin/accounts`,
          axiosConfig
        );

        setUsers(response.data.users);
      } catch (error) {
        // console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default UsersPage;
