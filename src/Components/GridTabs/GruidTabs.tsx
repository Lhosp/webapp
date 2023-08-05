import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef} from "@mui/x-data-grid";

export type GridTypeProps = {
  rows: any[];
  columns: GridColDef[];
};
export const GridTabs = (props: GridTypeProps) => {
  return (
    <Box sx={{ height:'100% ', width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
