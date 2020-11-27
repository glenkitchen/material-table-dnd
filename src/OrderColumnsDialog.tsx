import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Column } from "material-table";
import React, { FC, useEffect, useState } from "react";
import { DndItem } from "./dnd";
import DndList from "./DndList";

interface OrderColumnsDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  columns: Column<object>[];
  onSave: (dndItems: DndItem[]) => void;
}

export const OrderColumnsDialog: FC<OrderColumnsDialogProps> = ({
  open,
  setOpen,
  columns,
  onSave,
}) => {
  const [dndItems, setDndItems] = useState<DndItem[]>([]);
  useEffect(() => {
    if (open) {
      setDndItems(mapColsToDndItems(columns));
    } else {
      setDndItems([]);
    }
  }, [open, columns]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onSave(dndItems);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Reorder Columns</DialogTitle>
      <DialogContent dividers>
        {dndItems?.length > 0 && (
          <DndList items={dndItems} setItems={setDndItems} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary" variant="contained">
          Ok
        </Button>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapColsToDndItems = (columns: Column<object>[]) => {
  return columns
    .filter((col) => !col.hidden)
    .map((col) => {
      const item: DndItem = {
        id: col.field as string,
        label: col.title as string,
      };
      return item;
    });
};
