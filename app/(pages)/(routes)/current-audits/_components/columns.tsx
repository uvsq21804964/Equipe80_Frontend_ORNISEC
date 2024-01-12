/* eslint-disable import/prefer-default-export */

'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

import toast from 'react-hot-toast';
import InstanceAPI from '@/app/api/api';

import { Button } from '@/components/ui/button';

const deleteAudit = (idAudit: string) => {
  InstanceAPI.delete(`delete`, { data: { id: idAudit } })
    .then(() => {
      toast.success(`L'audit a été supprimé !`, {
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

const chef = "Responsable de l'audit";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'companie',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Entreprise
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const entreprise = row.getValue('companie') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(entreprise).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'chef',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {chef}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const gerant = row.getValue('chef') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(gerant).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Date de début
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const debut = row.getValue('date') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(debut).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'Progression',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Questions en attente
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const progression = row.getValue('Progression') || 'N/A';
      const questionsRestantes = `${progression.incomplete} / ${progression['total question']}`;
      console.log('questionsRestantes', questionsRestantes);
      return <div className="flex justify-center">{questionsRestantes}</div>;
    },
  },
  {
    accessorKey: 'Edition',
    header: () => {},
    cell: ({ row }) => {
      return (
        <Link href={`/current-audits/${row.getValue('Suppression')}/edit`}>
          <Pencil className="h-4 w-4 mr-2 text-blue-600 hover:text-blue-600 hover:font-bold" />
        </Link>
      );
    },
  },
  {
    accessorKey: 'Suppression',
    header: () => {},
    cell: ({ row }) => {
      return (
        <button
          type="button"
          onClick={() => deleteAudit(row.getValue('Suppression'))}
        >
          <Trash2 className="h-4 w-4 mr-2 text-red-600" />
        </button>
      );
    },
  },
];
