import React from "react";
import FunctionalityDesign from "../Components/ComponentMod/FunctionalityDesign";
import { functionalityType } from "../Components/ComponentMod/ComponentTemplate";

export default function Article() {
    const functionality: functionalityType[] = [
        {
          nom: "Affichage",
          objectif: "onglet affichage",
          description: "ALL/Staning, ajout, modification",
          prio: 1,
        },
        {
          nom: "filtre",
          objectif: "selectionner un filtre",
          description: "par localisation, emplacement type, par prix",
          prio: 3,
        },
        {
          nom: "Affichage",
          objectif: "Ajouter/modif/sup un nouvel article",
          description: "Permet d'ajouter un nouvel article dans la base de donnée",
          prio: 3,
        },

      ];
    
      return <FunctionalityDesign items={functionality} compName="Article" />;
}
