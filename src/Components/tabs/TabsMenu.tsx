import React from "react";
import { PropsWithChildren } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AppBar } from "@mui/material";

export type TabPanelProps = {
  children?: React.ElementType;
  index?: number;
  value: string;
  label: string;
};
type propsType = {
  handleChange:(newValue: string) => void;
  list: TabPanelProps[];
};

const TabsMenu = (props: PropsWithChildren<propsType>) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" color="secondary">
        <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        variant="fullWidth"
      >
        {props.list.map((item) => {
          return (
            <Tab value={item.value} label={item.label} onClick={(e)=>props.handleChange(item.value)} />
          );
        })}
      </Tabs>
      </AppBar>
    </Box>
  );
};

export default TabsMenu;
