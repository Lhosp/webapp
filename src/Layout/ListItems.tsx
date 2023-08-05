import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icon, Tooltip } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FoundationIcon from '@mui/icons-material/Foundation';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
type ItemProps = {
  url: string;
  children?: any;
  text: string;
};
const Item = (props: ItemProps) => {
  return (
    <ListItemButton href={props.url} >
        <Tooltip title={props.text} placement="right">
      <ListItemIcon>{props.children}</ListItemIcon>
      </Tooltip>
      <ListItemText primary={props.text}  />
    </ListItemButton>
  );
};
export const mainListItems = (
  <React.Fragment>
    <Item url="/home" text="Home">
    <HomeOutlinedIcon/>
    </Item>
    <Item url="/projets" text="Projet">
        <FoundationIcon/>
    </Item>
    <Item url="/devis" text="Devis">
        <ReceiptIcon/>
    </Item>
    <Item url="/clients" text="Clients">
        <Person3OutlinedIcon/>
    </Item>
    <Item url="/articles" text="Articles">
        <ExtensionOutlinedIcon/>
    </Item>
    <Item url="/fournisseurs" text="Fournisseur">
        <BusinessOutlinedIcon/>
    </Item>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Item url="/profile" text="Profile"></Item>
    <Item url="/setting" text="Setting"></Item>
    <Item url="/logout" text="Deconnexion"></Item>
  </React.Fragment>
);
