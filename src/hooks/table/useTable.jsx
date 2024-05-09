import { Url } from "@/data/MOCK_DATA"; // Mock Data
import { useState } from "react"; // React Hooks

const useTable = () => {
  const [rows, setRows] = useState(Url);
  const columns = [
    // checkbox selection column for selecting rows in the table
    { field: "originalUrl", headerName: "URL", flex: 2, type: "string" },
    { field: "shortUrl", headerName: "Short URL", flex: 1, type: "string" },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      valueFormatter: (value) => {
        // Dividir la cadena en sus componentes (mes, día, año) usando '/'
        const parts = value.split("/");

        // Extraer el mes, día y año de las partes
        const month = parseInt(parts[0]);
        const day = parseInt(parts[1]);
        const year = parseInt(parts[2]);

        // Crear el objeto Date con el orden de día, mes y año
        const date = new Date(year, month - 1, day);

        // Formatear la fecha como dd/mm/aaaa
        const formattedDate = `${day.toString().padStart(2, "0")}/${month
          .toString()
          .padStart(2, "0")}/${year}`;

        return formattedDate;
      },
      type: "date",
    },
  ];

  const [selectionModel, setSelectionModel] = useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection);
  };

  const handleDeleteRows = () => {
    // Elimina las filas seleccionadas de los datos
    // Aquí puedes implementar la lógica para eliminar las filas de tu fuente de datos
    // Por ejemplo, si 'rows' es un array de objetos, puedes filtrar los objetos no seleccionados
    // y establecer el nuevo array de filas sin las filas seleccionadas.
    console.log("Rows to delete:", selectionModel);
    setRows((prevRows) =>
      prevRows.filter((row) => !selectionModel.includes(row.id))
    );
  };

  return {
    rows,
    columns,
    selectionModel,
    handleSelectionModelChange,
    handleDeleteRows,
  };
};

export default useTable;
