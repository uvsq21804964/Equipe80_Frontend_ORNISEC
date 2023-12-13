'use client';

import axios from 'axios';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Input from '@/components/inputs/input';
import Button from '@/components/Button';

function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // Connexion au serveur back-end pour transmettre des données (post)
    axios
      .post('/api/register', data)
      .catch(() => toast.error('Une erreur est survenue.'))
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
