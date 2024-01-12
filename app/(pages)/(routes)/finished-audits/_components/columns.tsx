/* eslint-disable import/prefer-default-export */

'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

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
    accessorKey: 'date',
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
      const fin = row.getValue('date') || 'N/A';
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
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-4 w-8 p-0">
        //       <span className="sr-only">Ouvrir le menu</span>
        //       <MoreHorizontal />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end" className="bg-red-100">
        //     <Link href={`/admin/user/${id}`}>
        //       <DropdownMenuItem className="cursor-pointer">
        //         <Pencil className="h-4 w-4 mr-2 text-blue-600" />
        //         <p className="hover:text-blue-600 hover:font-bold">Aperçu</p>
        //       </DropdownMenuItem>
        //     </Link>
        //     <Link href="/admin/users">
        //       <DropdownMenuItem className="cursor-pointer">
        //         <Trash2 className="h-4 w-4 mr-2 text-red-600" />
        //         <p className="hover:text-red-600 hover:font-bold">Supprimer</p>
        //       </DropdownMenuItem>
        //     </Link>
        //   </DropdownMenuContent>
        // </DropdownMenu>
        <Link href={`/admin/user/${id}`}>
          <Eye className="h-4 w-4 mr-2 text-blue-600 hover:text-blue-600 hover:font-bold" />
        </Link>
      );
    },
  },
];
