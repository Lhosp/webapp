import React from "react";
import ComponentTemplate, { functionalityType } from "./ComponentTemplate";
import { Divider, Container, CssBaseline } from "@mui/material";
import DraggableList from "../animation/DraggableList";

const FunctionalityDesign = ({ items, compName }: { items: functionalityType[], compName:string }) => {
  items.sort((a, b) => {
    let res = 0;
    if (a.prio! > b.prio!) {
      res = 1;
    }
    if (a.prio! < b.prio!) {
      res = -1;
    }
    return res;
  });
  return (
    <div>
      <DraggableList items={items.map((item) => item.prio + ": " + item.nom)} />
      <Divider />

      <Container>
        <CssBaseline />
        <ComponentTemplate name={compName} functionality={items} />
      </Container>
    </div>
  );
};

export default FunctionalityDesign;
