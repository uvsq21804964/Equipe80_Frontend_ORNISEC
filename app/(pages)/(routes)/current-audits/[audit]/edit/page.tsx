'use client';

import { useState, useEffect } from 'react';
import Auditbar from '@/components/Auditbar';
import InstanceAPI from '@/app/api/api';
import Questionnaire from './_components/Questionnaire';

const getquestionById = (id: string, categorie: string) => {
  // Remplacez 'URL_DE_L_API' par l'URL réelle de votre API

  // Utilisation d'Axios pour effectuer la requête GET
  return InstanceAPI.get(
    `http://localhost:8080/questions/${categorie}/${id}`,

    {
      withCredentials: true,
    }
  )
    .then((response) => {
      console.log(response.data);
      // Retourne les données
      return response.data;
    })
    .catch((error) => {
      console.error('Erreur lors de la requête GET :', error);
    });
  // Retourne une promesse contenant les dnnées
};
const getElementById = (id: string) => {
  // Utilisation d'Axios pour effectuer la requête GET
  return InstanceAPI.get(`categories/${id}`, {
    withCredentials: true,
  })
    .then((response) => {
      console.log('RESPONSE', response);
      return response.data;
    })
    .catch((error) => {
      console.error('Erreur lors de la requête GET :', error);
    });
  // Retourne une promesse contenant les dnnées
};

export default function Edit({ params }: { params: { audit: string } }) {
  const [categorie, setCategorie] = useState('Gouvernance');
  const [sidebarItems, setSidebarItems] = useState<string[]>([]);
  const [categoryQuestions, setCategoryQuestions] = useState([]);
  const handleChildValueChange = (value: string) => {
    setCategorie(value);
  };
  useEffect(() => {
    const exempleUtilisation = async () => {
      try {
        const id = params.audit;
        const result = await getElementById(id);
        setSidebarItems(result);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    exempleUtilisation();
  }, [params.audit]);

  useEffect(() => {
    const fetchCategoryQuestions = async () => {
      try {
        const categoryQuestionsResult = await getquestionById(
          params.audit,
          categorie
        );
        setCategoryQuestions(categoryQuestionsResult);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des questions de catégorie :',
          error
        );
      }
    };

    fetchCategoryQuestions();
  }, [params.audit, categorie]);

  const findIndex = (categorieActuelle: string) => {
    // Utilise indexOf pour trouver l'index de la catégorie actuelle dans le tableau
    const indexActuel = sidebarItems.indexOf(categorieActuelle);

    // Si la catégorie actuelle est trouvée, retourne son index plus 1 (comme dans votre exemple)
    // Sinon, retourne 0 (ou -1 si vous préférez)
    return indexActuel !== -1 ? indexActuel + 1 : 0;
  };

  return (
    <div className="flex justify-start">
      <div className="md:pr-[5rem] w-[95%] h-full">
        <div className="flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="hidden md:flex items-center justify-between space-y-2">
              <h2
                className="
                text-2xl
                font-bold
                tracking-tight
                text-white
                text-shadow
                "
              >
                {categorie.replaceAll('_', ' ')}
              </h2>
              <span className="text-sm text-white">
                {`Catégorie  ${findIndex(categorie)} / ${sidebarItems.length}`}
              </span>
            </div>
            <Questionnaire questions={categoryQuestions} para={params.audit} />
          </div>
        </div>
      </div>
      <div className="md:flex w-[5%] h-full end-0 fixed inset-y-0 z-5">
        {sidebarItems.length > 0 && (
          <Auditbar
            onChildValueChange={handleChildValueChange}
            items={sidebarItems}
          />
        )}
      </div>
    </div>
  );
}
