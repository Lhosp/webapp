import React from "react";
import ComponentTemplate, {
  functionalityType,
} from "../Components/ComponentMod/ComponentTemplate";
import FunctionalityDesign from "../Components/ComponentMod/FunctionalityDesign";

export default function Fournisseur() {
    const functionality: functionalityType[] = [
        {
          nom: "listing",
          objectif: "Rechercher fourniesseur",
          description: "nom commercial nom entreprise mail adresse telephone bouton catalogue(url)",
          prio: 9,
        },
      
      ];
    
      return <FunctionalityDesign items={functionality} compName="Fournisseurs" />;
}
