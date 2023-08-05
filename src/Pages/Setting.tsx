import React from 'react'
import ComponentTemplate, { functionalityType } from '../Components/ComponentMod/ComponentTemplate';

export default function Setting() {
    const functionality: functionalityType[] = [
        {
          nom: "Ajouter",
          objectif: "Ajouter un nouveau client",
          description: "Permet d'ajouter un nouveau client dans la base de donnée",
        },
      ];
      return (
        <div>
          <ComponentTemplate name="ajout" functionality={functionality} />
        </div>
      );
}
