'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Input from '@/components/inputs/input';
import Button from '@/components/Button';

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [dateDebut, setdateDebut] = useState(new Date());
  const [DateFin, setDateFin] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler = () => {
    setIsLoading(true);

    const data = {
      dateDebut,
      DateFin,
    };

    // Connexion au serveur back-end pour transmettre des données (post)
    axios
      .post('/api/register', data)
      .catch(() => toast.error('Une erreur est survenue.'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        style={{ borderRadius: '0.5rem' }}
        className="bg-white px-4 py-8 shadow-md sm:px-10 shadow-slate-900"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-6">
              <Input
                id="name"
                label="Nom de l'auditeur"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            </div>
            <div className="mb-6">
              <Input
                id="entreprise"
                label="Nom de l'entreprise"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            </div>
            <div className="mb-2">
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
            </div>
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
