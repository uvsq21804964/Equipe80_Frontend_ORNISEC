/* eslint-disable import/prefer-default-export */

'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Settings2 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
    accessorKey: 'Rôle',
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
      const isAdmin = row.getValue('Rôle') || false;

      return (
        <div className="flex justify-center">
          <Badge
            className={cn(
              'bg-button text-white py-1 px-5 text-xs font-bold uppercase',
              isAdmin === 'admin' && 'bg-sidebar'
            )}
          >
            {isAdmin === 'admin' ? 'Administrateur' : 'Auditeur'}
          </Badge>
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
        //         <p className="hover:text-blue-600 hover:font-bold">Modifier</p>
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
          <Settings2 className="h-4 w-4 mr-2 text-blue-600 hover:text-blue-600 hover:font-bold" />
        </Link>
      );
    },
  },
  // {
  //   id: 'Sélection',
  //   accessorKey: 'Sélectionner',
  //   header: ({ table }) => {
  //     return (
  //       <div className="flex justify-center">
  //         <Checkbox
  //           checked={table.getIsAllPageRowsSelected()}
  //           onCheckedChange={(value) =>
  //             table.toggleAllPageRowsSelected(!!value)
  //           }
  //           aria-label="Sélectionner toutes les lignes"
  //         />
  //       </div>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex justify-center">
  //         <Checkbox
  //           checked={row.getIsSelected()}
  //           onCheckedChange={(value) => row.toggleSelected(!!value)}
  //           aria-label="Sélectionner ligne"
  //         />
  //       </div>
  //     );
  //   },
  //   enableSorting: false,
  // },
];
