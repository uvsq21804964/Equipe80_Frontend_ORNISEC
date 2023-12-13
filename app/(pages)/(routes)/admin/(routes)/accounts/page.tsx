'use client';

/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React from 'react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

// async function getData(): Promise<any[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'elon@musk.com',
//       Nom: 'Elon',
//       Prénom: 'Musk',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'jeff@bezos.com',
//       Nom: 'Jeff',
//       Prénom: 'Bezos',
//       Rôle: 'auditeur',
//     },
//     {
//       Email: 'm@example.com',
//       Nom: 'M',
//       Prénom: 'Example',
//       Rôle: 'admin',
//     },
//     {
//       Email: 'tom@abbouz.com',
//       Nom: 'Tom',
//       Prénom: 'Abbouz',
//       Rôle: 'admin',
//     },
//   ];
// }

export default class UsersPage extends React.Component<object, any> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     persons: [],
  //   };
  // }

  // componentDidMount() {
  //   axios.get(`http://127.0.0.1:8000/admin/accounts`).then((res) => {
  //     const persons2 = res.data;
  //     this.setState({ persons: persons2 });
  //   });
  // }

  persons = [
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

  render() {
    return (
      <div className="p-6">
        {/* {this.state.persons.map((person: any) => (
          <div>{person.name}</div>
        ))} */}
        <DataTable columns={columns} data={this.persons} />
      </div>
    );
  }
}
