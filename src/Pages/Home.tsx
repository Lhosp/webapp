import { Container, CssBaseline, Divider } from "@mui/material";
import ComponentTemplate, {
  functionalityType,
} from "../Components/ComponentMod/ComponentTemplate";
import DraggableList from "../Components/animation/DraggableList";
import FunctionalityDesign from "../Components/ComponentMod/FunctionalityDesign";

export default function Home() {
  const functionality: functionalityType[] = [
    {
      nom: "Historique",
      objectif: "afficher l'hitorique des projets",
      description: "temporalité des projets, localisation, standing ,nom Projet, nom client ,budget",
      prio: 2,
    },
    {
      nom: "graphiques",
      objectif: "afficher les graphiques des projets",
      description: "nombre projets globale/Annee/trimestre   valeur devis encours/valider/les 2 unitaire/cumulé/Annee/trimestre ",
      prio: 1,
    },

  ];

  return <FunctionalityDesign items={functionality} compName="Home" />;
}
