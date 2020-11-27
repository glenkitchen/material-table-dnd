import MaterialTable, { Action, Column, Options } from "material-table";
import React, { useState } from "react";
import { mockData } from "./mock-data";
import { useHistory, useLocation } from "react-router-dom";
import { DndItem, mapColumnsToDndItems } from "./dnd";

const Table = () => {
  const history = useHistory();
  const location = useLocation<{ dndItems: DndItem[] }>();

  const [columns] = useState(() => {
    const dndItems = location.state.dndItems;
    console.log(
      "🚀 ~ file: Table.tsx ~ line 34 ~ const[columns]=useState ~ dndItems",
      dndItems
    );

    if (dndItems?.length) {
      const hiddenColumns = cols.filter((col) => col.hidden);
      const sortedColumns = cols
        .filter((col) => !col.hidden)
        .map((col) => {
          const columnOrder = dndItems.findIndex(
            (item) => item.id === col.field
          );

          return {
            ...col,
            columnOrder,
          };
        })
        .sort((col1, col2) => col1.columnOrder - col2.columnOrder);
      const allColumns = [...sortedColumns, ...hiddenColumns];
      return allColumns;
    }
    return cols;
  });
  const [data] = useState(mockData);
  const [options] = useState(opts);

  const actions: Action<object>[] = [
    {
      icon: "view_week",
      isFreeAction: true,
      tooltip: "Reorder Columns",
      onClick: () =>
        history.push({
          pathname: "/ordercolumns",
          state: {
            dndItems: mapColumnsToDndItems(columns),
          },
        }),
    },
  ];

  return (
    <>
      <MaterialTable
        columns={columns}
        data={data}
        actions={actions}
        options={options}
      />
    </>
  );
};

const cols: Column<object>[] = [
  // Dates
  {
    field: "year",
    title: "Year",
    width: 120,
  },
  {
    field: "month",
    title: "Month",
    width: 120,
  },
  {
    field: "startDate",
    title: "Start Date",
    width: 120,
  },
  {
    field: "endDate",
    title: "End Date",
    width: 120,
  },
  {
    field: "tbc",
    title: "TBC",
    lookup: { true: "Yes", false: "No" },
    width: 120,
  },
  {
    field: "createdDate",
    title: "Created Date",
    width: 120,
  },
  {
    field: "fiscalYear",
    title: "Fiscal Year",
    width: 120,
  },

  // Promotion
  //   {
  //     field: "promotionId",
  //     title: "Event Id",
  //     width: 120,
  //   },
  //   {
  //     field: "eventName",
  //     title: "Event Name",
  //     width: 300,
  //   },
  //   {
  //     field: "promotionStatusName",
  //     title: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "createdBy",
  //     title: "Created By",
  //     width: 300,
  //   },

  //   // Customer
  //   {
  //     field: "customerType",
  //     title: "Customer Type",
  //     width: 120,
  //   },
  //   {
  //     field: "majorGroup",
  //     title: "Major Group",
  //     width: 120,
  //   },
  //   {
  //     field: "majorChain",
  //     title: "Major Chain",
  //     width: 120,
  //   },
  //   {
  //     field: "subChain",
  //     title: "Sub Chain",
  //     width: 120,
  //   },
  //   {
  //     field: "custRegion",
  //     title: "Customer Region",
  //     width: 120,
  //   },
  //   {
  //     field: "custName",
  //     title: "Customer Name",
  //     width: 300,
  //   },

  //   // Product
  //   {
  //     field: "businessUnit",
  //     title: "Business Unit",
  //     width: 120,
  //   },
  //   {
  //     field: "category",
  //     title: "Category",
  //     width: 120,
  //   },
  //   {
  //     field: "subCategory",
  //     title: "Sub Category",
  //     width: 120,
  //   },
  //   {
  //     field: "brand",
  //     title: "Brand",
  //     width: 120,
  //   },
  //   {
  //     field: "packSizeName",
  //     title: "Pack Size",
  //     width: 120,
  //   },
  //   {
  //     field: "productName",
  //     title: "Product Name",
  //     width: 300,
  //   },
  //   {
  //     field: "titan",
  //     title: "Titan",
  //     width: 120,
  //   },
  //   {
  //     field: "multiBuy",
  //     title: "MultiBuy",
  //     width: 120,
  //     type: "boolean",
  //   },
  //   {
  //     field: "comments",
  //     title: "Comments",
  //     width: 120,
  //   },

  //   // Amount Types
  //   {
  //     field: "marginSupport",
  //     title: "Margin Support",
  //     width: 120,
  //     type: "boolean",
  //   },
  //   {
  //     field: "marginSupportAmount",
  //     title: "Margin Amount",
  //     width: 120,
  //   },
  //   {
  //     field: "marginSupportPromotionSpendType",
  //     title: "Margin Spend Type",
  //     width: 120,
  //   },
  //   {
  //     field: "sally",
  //     title: "Sally",
  //     width: 120,
  //     type: "boolean",
  //   },
  //   {
  //     field: "sallyAmount",
  //     title: "Sally Amount",
  //     width: 120,
  //   },
  //   {
  //     field: "sallyPromotionSpendType",
  //     title: "Sally Spend Type",
  //     width: 120,
  //   },
  //   {
  //     field: "tally",
  //     title: "Tally",
  //     width: 120,
  //     type: "boolean",
  //   },
  //   {
  //     field: "tallyAmount",
  //     title: "Tally Amount",
  //     width: 120,
  //   },
  //   {
  //     field: "tallyPromotionSpendType",
  //     title: "Tally Spend Type",
  //     width: 120,
  //   },
  //   {
  //     field: "rsp",
  //     title: "N/a",
  //     width: 120,
  //     type: "boolean",
  //   },
  //   {
  //     field: "rspPromotionSpendType",
  //     title: "N/a Spend Type",
  //     width: 120,
  //   },
];

const opts: Options = {
  columnsButton: true,
  draggable: false,
};

export default Table;
