import React from 'react'
import ComponentTemplate, { functionalityType } from '../Components/ComponentMod/ComponentTemplate';
import FunctionalityDesign from '../Components/ComponentMod/FunctionalityDesign';

export default function Devis() {
    const functionality: functionalityType[] = [
        {
          nom: "Navigation type",
          objectif: "creation listing",
          description: " carte //carte -> modal/fentre shoipping",
          prio: 1,
        },
        {
          nom: "ajout",
          objectif: "disosciation unitaire",
          description: "lors de lajout du produit on puisse choisir la quantité Lot?",
          prio: 3,
        },
      ];
    
      return <FunctionalityDesign items={functionality} compName="Listing" />;
}
