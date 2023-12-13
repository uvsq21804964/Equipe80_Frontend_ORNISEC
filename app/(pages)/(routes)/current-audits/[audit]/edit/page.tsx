'use client';

import { useState } from 'react';
import Auditbar from '@/components/Auditbar';
import Questionnaire from './_components/Questionnaire';

const questions = [
  {
    label: 'Que pensez-vous de la vie ?',
    aide: ['+2: bien', '0: non', '+9: sécurité maximale'],
    note: 10,
    commentaire: 'Très bien',
  },
  {
    label: 'Le système est-il sécurisé? ',
    aide: ['+2: bien', '0: non', '+9: sécurité maximale'],
    note: 7,
    commentaire: 'Peux mieux faire',
  },
  {
    label:
      'Quelle est la nature de la réalité et comment pouvons-nous être certains de la validité de notre perception du monde qui nous entoure?',
    aide: ['+2: bien', '0: non', '+9: sécurité maximale'],
    note: 3,
    commentaire:
      "La nature de la réalité reste une énigme, oscillant entre le réalisme objectif et l'idéalisme subjectif, tandis que la certitude de la validité de notre perception dépend de la perspective philosophique adoptée, allant du scepticisme sur les limites sensorielles à la confiance dans la fidélité de l'esprit à saisir la réalité.",
  },
  {
    label:
      'Peut-on réellement connaître autrui, ou sommes-nous toujours limités à une compréhension subjective de la conscience et des expériences individuelles ?',
    aide: ['+2: bien', '0: non', '+9: sécurité maximale'],
    note: 10,
    commentaire:
      "La connaissance d'autrui demeure limitée par la subjectivité de nos propres expériences, mais l'empathie et la communication permettent d'approcher une compréhension partagée, bien que jamais totale, de la conscience et des expériences d'autrui.",
  },
  {
    label:
      'En quoi consiste le libre arbitre, et sommes-nous véritablement libres de prendre des décisions ou simplement soumis à des forces déterministes qui régissent notre destinée ?',
    aide: ['+2: bien', '0: non', '+9: sécurité maximale'],
    note: 10,
    commentaire:
      "La nature du libre arbitre soulève des questions sur notre capacité à choisir indépendamment, mais le débat persiste entre ceux qui défendent la liberté de choix et ceux qui soutiennent que nos actions sont conditionnées par des forces déterministes, laissant la question de notre destinée ouverte à l'interprétation philosophique.",
  },
];

const sidebarItems = [
  {
    name: 'Gouvernance',
    href: '/Gouvernance',
  },
  {
    name: 'Sensibilisation',
    href: '/sensibilisation',
  },
  {
    name: 'Environnement utilisateur',
    href: '/env_user',
  },
  {
    name: 'Application',
    href: '/Applications',
  },
  {
    name: 'Fournisseurs et partenaires',
    href: '/gestion_f_p',
  },
  {
    name: 'Administration des infrastrutures',
    href: '/Administration_infra',
  },
  {
    name: 'Réseau',
    href: '/reseau',
  },
  {
    name: 'Protection des données',
    href: '/protection',
  },
  {
    name: 'Gestion des identités et accès',
    href: '/gestion_i_a',
  },
  {
    name: 'Détection',
    href: '/detection',
  },
  {
    name: 'Gestion des incidents et résillience',
    href: '/Gestion_I_R',
  },
  {
    name: 'Cloud',
    href: '/Cloud',
  },
  {
    name: 'SI industriels',
    href: '/SI',
  },
];

export default function Edit() {
  const [categorie, setCategorie] = useState('Gouvernance');

  const handleChildValueChange = (value: string) => {
    setCategorie(value);
  };

  const findIndex = (categorieActuelle: string) => {
    let indexActuel = 0;

    sidebarItems.forEach((element, index) => {
      if (element.name === categorieActuelle) {
        indexActuel = index + 1;
      }
    });

    return indexActuel;
  };

  return (
    <div className="flex justify-start">
      <div className="md:pr-[5rem] w-[95%] h-full">
        <div className="flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="hidden md:flex items-center justify-between space-y-2">
              <h2
                className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                text-shadow
                "
              >
                {categorie}
              </h2>
              <span className="text-sm text-white">
                {`Catégorie ${findIndex(categorie)} / ${sidebarItems.length}`}
              </span>
            </div>
            <Questionnaire questions={questions} />
          </div>
        </div>
      </div>
      <div className="md:flex w-[5%] h-full end-0 fixed inset-y-0 z-5">
        <Auditbar
          onChildValueChange={handleChildValueChange}
          items={sidebarItems}
        />
      </div>
    </div>
  );
}
