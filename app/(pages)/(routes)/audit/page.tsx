'use client';

/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { PlusCircle } from 'lucide-react';
import { DataTable } from './_components/_tableau/data-table';
import { columns } from './_components/_tableau/columns';
import Button from '@/components/Button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const BoardIdPage = () => {
  const persons = [
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
    {
      Email: 'elon@musk.com',
      Nom: 'Elon',
      Prénom: 'Musk',
      Rôle: 'auditeur',
    },
    {
      Email: 'jeff@bezos.com',
      Nom: 'Jeff',
      Prénom: 'Bezos',
      Rôle: 'auditeur',
    },
    {
      Email: 'm@example.com',
      Nom: 'M',
      Prénom: 'Example',
      Rôle: 'admin',
    },
    {
      Email: 'tom@abbouz.com',
      Nom: 'Tom',
      Prénom: 'Abbouz',
      Rôle: 'admin',
    },
  ];

  return (
    <div className="p-4 h-full overflow-x-auto">
      <div className="p-6">
        <Popover>
          <PopoverTrigger>
            <Button shadow border violetFonce>
              <PlusCircle className="w-5 h-5 mr-2" />
              Assigner un auditeur
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-button" align="start">
            <DataTable columns={columns} data={persons} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default BoardIdPage;
