'use client';

import React, { useEffect, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Input from '@/components/inputs/input';
import Select from '@/components/inputs/select';
import Button from '@/components/Button';

import InstanceAPI from '@/app/api/api';

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  // const [dateDebut, setdateDebut] = useState(new Date());
  // const [DateFin, setDateFin] = useState(new Date());

  const [users, setUsers] = useState([]); // Utilisez le state pour stocker les données

  useEffect(() => {
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
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    // Appel de la fonction pour récupérer les données
    fetchData();
  }, []); // Le tableau de dépendances vide assure que useEffect s'exécute une seule fois lors du montage du composant

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (!data.name) {
      toast.error('Veuillez sélectionner un responsable.');
      setIsLoading(false);
      return;
    }

    if (!data.entreprise) {
      toast.error("Veuillez saisir le nom de l'entreprise.");
      setIsLoading(false);
      return;
    }

    InstanceAPI.post(
      `createAudit`,
      {
        company_name: data.entreprise,
        chef_auditeurs: data.name,
        list_auditeurs: [],
        description: 'Très urgent',
      },
      {
        withCredentials: true,
      }
    )
      .then(() => {
        toast.success("Création de l'audit réussie !", {
          duration: 4000,
          position: 'top-center',
          icon: '👏',
        });
      })
      .catch(() => {
        toast.error('Une erreur inconnue est survenue.');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        style={{ borderRadius: '0.5rem' }}
        className="bg-text1 px-4 py-8 shadow-md sm:px-10 shadow-slate-900"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-6">
              <Select
                id="name"
                label="Nom du responsable de l'audit"
                register={register}
                errors={errors}
                disabled={isLoading}
              >
                <option value="">Sélectionnez un responsable</option>
                {users.map((user) => (
                  <option key={user.email} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </Select>
            </div>
            {/* <div className="flex justify-center">
              <Popover>
                <PopoverTrigger>
                  <Button shadow border violetFonce>
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Assigner un responsable
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="bg-button fixed top-[-450px] left-[-550px]"
                  align="start"
                >
                  <DataTable columns={columns} data={persons} />
                </PopoverContent>
              </Popover>
            </div> */}
            <div className="mb-6">
              <Input
                id="entreprise"
                label="Nom de l'entreprise"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            </div>
            {/* <div className="mb-2">
              <label>Date de début de l'audit</label>
              <DatePicker
                selected={dateDebut}
                onChange={(date) => setdateDebut(date)}
                placeholderText="Sélectionnez une date"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="mb-4">
              <label>Date de fin envisagée de l'audit</label>
              <DatePicker
                selected={DateFin}
                onChange={(date) => setDateFin(date)}
                placeholderText="Sélectionnez une date"
              />
            </div> */}
          </div>
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
              border
              violetFonce
            >
              Créer l'audit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
