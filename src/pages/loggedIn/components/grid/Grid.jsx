import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import useGrid from "@/hooks/grid/useGrid"; // Custom Hook

const Grid = () => {
  const { rowData, columnDefs, defaultColDef } = useGrid();
  return (
    <div className="ag-theme-material-auto-dark" style={{ width: "100%", height: 400 }}>
      <AgGridReact
        // datos a mostrar:
        rowData={rowData}
        // columnas a mostrar:
        columnDefs={columnDefs}
        // configuración por defecto para las columnas:
        defaultColDef={defaultColDef}
        // quitar el foco de las celdas:
        suppressCellFocus={true}
        // quitar selección de fila al hacer click:
        suppressRowClickSelection={true}
        // quitar la posibilidad de mover columnas:
        suppressMovableColumns={true}
        // seleccionar múltiples filas:
        rowSelection="multiple"
        // configuración de la paginación:
        pagination={true}
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 15]}
      />
    </div>
  );
};

export default Grid;
