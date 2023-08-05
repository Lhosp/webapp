import React from 'react'
import ComponentTemplate, { functionalityType } from '../Components/ComponentMod/ComponentTemplate';
import FunctionalityDesign from '../Components/ComponentMod/FunctionalityDesign';

export default function Client() {
    const functionality: functionalityType[] = [
        {
          nom: "cjouter",
          objectif: "Ajouter un nouveau client",
          description: "Permet d'ajouter un nouveau client dans la base de donnée",
          prio: 9,
        },
        {
          nom: "Ajouter2",
          objectif: "Ajouter un nouveau client",
          description: "Permet d'ajouter un nouveau client dans la base de donnée",
          prio: 3,
        },
        {
          nom: "Ajouter2",
          objectif: "Ajouter un nouveau client",
          description: "Permet d'ajouter un nouveau client dans la base de donnée",
          prio: 3,
        },
        {
          nom: "Ajouter2",
          objectif: "Ajouter un nouveau client",
          description: "Permet d'ajouter un nouveau client dans la base de donnée",
          prio: 3,
        },
        {
          nom: "Ajouter2",
          objectif: "Ajouter un nouveau client",
          description: "Permet d'ajouter un nouveau client dans la base de donnée",
          prio: 1,
        },
      ];
    
      return <FunctionalityDesign items={functionality} compName="Client" />;
}
