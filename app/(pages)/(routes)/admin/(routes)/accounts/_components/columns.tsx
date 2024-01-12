/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */

'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Settings2 } from 'lucide-react';

import toast from 'react-hot-toast';
import InstanceAPI from '@/app/api/api';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const deleteAccount = (name: string) => {
  InstanceAPI.delete(`admin/delete?username=${name}`)
    .then(() => {
      toast.success(`Le compte a été supprimé !`, {
        duration: 4000,
        position: 'top-center',
        icon: '👏',
      });
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("L'email ou le mot de passe est incorrect.");
          return;
        }
      }

      toast.error('Une erreur inconnue est survenue.');
    });
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            E-mail
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const email = row.getValue('email') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(email).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Nom
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const nom = row.getValue('name') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(nom).replaceAll('"', '')}
        </div>
      );
    },
  },
  // {
  //   accessorKey: 'Prénom',
  //   header: ({ column }) => {
  //     return (
  //       <div className="flex justify-center">
  //         <Button
  //           variant="ghost"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //         >
  //           Prénom
  //           <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       </div>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     const prenom = row.getValue('name') || 'N/A';
  //     return (
  //       <div className="flex justify-center">
  //         {JSON.stringify(prenom).replaceAll('"', '')}
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: 'role',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Rôle
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const isAdmin = row.getValue('role');
      return (
        <div className="flex justify-center">
          <Badge
            className={cn(
              'bg-button text-white py-1 px-5 text-xs font-bold uppercase',
              isAdmin !== 2 && 'bg-sidebar'
            )}
          >
            {isAdmin === 0
              ? 'Super Administrateur'
              : isAdmin === 1
              ? 'Administrateur'
              : 'Auditeur'}
          </Badge>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <button
          type="button"
          onClick={() => deleteAccount(row.getValue('name'))}
        >
          <Settings2 className="h-4 w-4 mr-2 text-blue-600 hover:text-blue-600 hover:font-bold" />
        </button>
      );
    },
  },
];
