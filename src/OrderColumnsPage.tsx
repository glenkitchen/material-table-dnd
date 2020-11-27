import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { DndItem } from "./dnd";
import DndList from "./DndList";

export const OrderColumnsPage = () => {
  const history = useHistory();
  const location = useLocation<{ dndItems: DndItem[] }>();

  const [dndItems, setDndItems] = useState<DndItem[]>(
    () => location.state.dndItems
  );

  return (
    <Grid container direction="column">
      <DndList items={dndItems} setItems={setDndItems} />
      <Grid container spacing={2}>
        <Grid item>
          <Button
            onClick={() => {
              history.push({
                pathname: "/",
                state: { dndItems },
              });
            }}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              history.push({
                pathname: "/",
                state: { dndItems: [] },
              });
            }}
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
