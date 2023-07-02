import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

type ItemProps = {
  url: string;
  children?: any;
  text: string;
};
const Item = (props: ItemProps) => {
  return (
    <ListItemButton href={props.url} onClick={(e:React.FormEvent)=>e.preventDefault}>
      <ListItemIcon>{props.children}</ListItemIcon>
      <ListItemText primary={props.text}  />
    </ListItemButton>
  );
};

export const mainListItems = (
  <React.Fragment>
    <Item url="/home" text="Home"></Item>
    <Item url="/projets" text="Projet"></Item>
    <Item url="/devis" text="Devis"></Item>
    <Item url="/clients" text="Clients"></Item>
    <Item url="/articles" text="Articles"></Item>
    <Item url="/fournisseurs" text="Fournisseur"></Item>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Item url="/profile" text="Profile"></Item>
    <Item url="/setting" text="Setting"></Item>
    <Item url="/logout" text="Deconnexion"></Item>
  </React.Fragment>
);
