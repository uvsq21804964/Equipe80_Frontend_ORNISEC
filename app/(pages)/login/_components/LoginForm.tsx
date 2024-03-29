'use client';

import { useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import InstanceAPI from '@/app/api/api';
import Input from '@/components/inputs/input';
import Button from '@/components/Button';

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  useEffect(() => {
    const token = cookies.get('connected');
    if (token !== undefined) {
      router.push('/home');
    }
  }, [cookies, router]);

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

    InstanceAPI.post(
      `login`,
      {
        email: data.email,
        password: data.password,
      },
      {
        withCredentials: true,
      }
    )
      .then(() => {
        router.push('/home');
        toast.success('Connexion réussie !', {
          duration: 4000,
          position: 'top-center',
          icon: '👏',
        });
        cookies.set('connected', true, { path: '/' });
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error("L'email ou le mot de passe est incorrect.");
            return;
          }
        }
        toast.error('Une erreur inconnue est survenue.');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md"
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
              Se connecter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
