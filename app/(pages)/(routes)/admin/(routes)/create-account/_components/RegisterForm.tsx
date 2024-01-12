/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import clsx from 'clsx';

import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Input from '@/components/inputs/input';
import Button from '@/components/Button';

import InstanceAPI from '@/app/api/api';

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    InstanceAPI.post(
      `admin/create-account`,
      {
        name: data.name,
        email: data.email,
        role: data.role,
        password: data.password,
        passwordConfirm: data.verifyPassword,
      },
      {
        withCredentials: true,
      }
    )
      .then(() => {
        toast.success('Création du compte réussie !', {
          duration: 4000,
          position: 'top-center',
          icon: '👏',
        });
      })
      .catch((error) => {
        toast.error('Une erreur inconnue est survenue.');
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
    >
      <div
        style={{ borderRadius: '0.5rem' }}
        className="
        bg-text1
        px-4
        py-8
        shadow-md
        sm:px-10
        shadow-slate-900"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="name"
            label="Nom"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Mot de passe"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="verifyPassword"
            label="Vérification du mot de passe"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <label
            className="
          block 
          text-sm
          font-medium
          leading-6
          text-text2
        "
          >
            Rôle
          </label>
          <div className="mt-2">
            <select
              id="role"
              {...register('role')}
              className={clsx(
                `
                form-input
                block
                w-full
                rounded-xl
                border-0
                py-1.5
                bg-text1
                text-text2
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-inset
                focus:ring-sky-600
                sm:text-sm
                sm:leading-6`,
                isLoading && 'opacity-50 cursor-default'
              )}
            >
              <option value="2" selected>
                Auditeur
              </option>
              <option value="1">Administrateur</option>
            </select>
          </div>
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
              border
              violetFonce
            >
              Créer un compte
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
