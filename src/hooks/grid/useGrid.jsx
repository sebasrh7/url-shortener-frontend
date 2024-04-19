import { Url } from "@/data/MOCK_DATA"; // Mock Data
import { useMemo, useState } from "react"; // React Hooks

const useGrid = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(Url);

  // Column Definitions: Defines the columns to be displayed.
  const [columnDefs, setcolumnDefs] = useState([
    { field: "shortUrl", checkboxSelection: true, flex: 1 },
    { field: "urlOriginal", flex: 2 },
    {
      field: "date",
      comparator: (valueA, valueB) => {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        return dateA.getTime() - dateB.getTime();
      },
      filter: "agDateColumnFilter",
      
      flex: 1,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["reset", "apply"],
        closeOnApply: true,
        closeOnReset: true,
        maxNumConditions: 1,
      },
      resizable: false,
    };
  }, []);

  return { rowData, columnDefs, defaultColDef };
};

export default useGrid;
