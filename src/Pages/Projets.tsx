import React from "react";
import ComponentTemplate, {
  functionalityType,
} from "../Components/ComponentMod/ComponentTemplate";
import FunctionalityDesign from "../Components/ComponentMod/FunctionalityDesign";
import TabsMenu, { TabPanelProps } from "../Components/tabs/TabsMenu";
import ProjetGridtabs from "../Components/Projet/projet_gridTabs/projet.gridtabs";

export default function Projets() {
  const [display, setDisplay] = React.useState<string>("one");
  const definTabs = (display: string) => {
    switch (display) {
      case "one":
        return <ProjetGridtabs type="current" />;
      case "two":
        return <ProjetGridtabs type="passed" />;
      default: {
        return <></>;
      }
    }
  };
  const functionality: functionalityType[] = [
    {
      nom: "Affichage Onglet",
      objectif: "discosciation projet encours et projet terminé / CRUD projet",
      description: "",
      prio: 1,
    },
    {
      nom: "Getter document",
      objectif: "liste des fournissers, listing articles",
      description: "",
      prio: 1,
    },
  ];

  const list: TabPanelProps[] = [
    {
      label: "Projets en cours",
      value: "one",
    },
    {
      label: "Projets",
      value: "two",
    },
    {
      label: "Nouveau",
      value: "three",
    },
  ];
  console.log(display);
  return (
    <>
      <TabsMenu list={list} handleChange={setDisplay} />
      {definTabs(display)}
    </>
  );
}
