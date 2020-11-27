import { Column } from "material-table";

export type DndItem = {
  id: string;
  label: string;
};

export const mapColumnsToDndItems = (columns: Column<object>[]) => {
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
