import React from "react";
import MUIDataTable from "mui-datatables";

const ProductsTable = ({ title, products = [] }) => {
  const columns = [
    {
      name: "titulo",
      label: "Titulo"
    },
    {
      name: "descripcion",
      label: "Descripción"
    },
    {
      name: "precio",
      label: "Precio"
    },
    {
      name: "vendidos",
      label: "Vendidos"
    },
    {
      name: "tags",
      label: "Tags"
    }
  ];
  const options = {
    filterType: "checkbox"
  };

  return (
    <MUIDataTable
      title={title}
      data={products}
      columns={columns}
      options={options}
    />
  );
};

export default ProductsTable;
