import { Divider, Grid } from "@mui/material";
import React from "react";

type propsType = {
  name: string;
  functionality: functionalityType[];
};

export type functionalityType = {
  nom: string;
  objectif: string;
  description: string;
  prio?: number;
};
const ComponentTemplate = (props: propsType) => {
  return (
    <div>
      <Grid container sx={{ ml: 20 }}>
        <Grid item xs={12} sx={{ m: 0, p: 0 }}>
          <h1>{props.name}</h1>
        </Grid>
        <Grid item xs={12} sx={{ m: 0, p: 0 }}>
          <h2>Fonctionnalités</h2>
          {props.functionality.map((func) => {
            return (
              <div>
                <h3>{func.nom}</h3>
                <p>{func.objectif}</p>
                <p>{func.description}</p>
                <Divider/>
              </div>
              
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default ComponentTemplate;
