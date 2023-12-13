/* eslint-disable import/prefer-default-export */

'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Checkbox from '@/components/ui/checkbox';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'Email',
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
      const email = row.getValue('Email') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(email).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'Nom',
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
      const nom = row.getValue('Nom') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(nom).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'Prénom',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Prénom
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const prenom = row.getValue('Prénom') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(prenom).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    id: 'Sélection',
    accessorKey: 'Sélectionner',
    header: ({ table }) => {
      return (
        <div className="flex justify-center">
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Sélectionner toutes les lignes"
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Sélectionner ligne"
          />
        </div>
      );
    },
    enableSorting: false,
  },
];
