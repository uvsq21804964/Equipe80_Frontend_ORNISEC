/* eslint-disable import/prefer-default-export */

'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const chef = "Chef d'audit";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'Entreprise',
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
      const entreprise = row.getValue('Entreprise') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(entreprise).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'Début',
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
      const debut = row.getValue('Début') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(debut).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    accessorKey: 'Fin',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Date de fin
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const fin = row.getValue('Fin') || 'N/A';
      return (
        <div className="flex justify-center">
          {JSON.stringify(fin).replaceAll('"', '')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Ouvrir le menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-red-100">
            <Link href={`/admin/user/${id}`}>
              <DropdownMenuItem className="cursor-pointer">
                <Pencil className="h-4 w-4 mr-2 text-blue-600" />
                <p className="hover:text-blue-600 hover:font-bold">Modifier</p>
              </DropdownMenuItem>
            </Link>
            <Link href="/admin/users">
              <DropdownMenuItem className="cursor-pointer">
                <Trash2 className="h-4 w-4 mr-2 text-red-600" />
                <p className="hover:text-red-600 hover:font-bold">Supprimer</p>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
