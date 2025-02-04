import useUrl from "@/hooks/url/useUrl";
import { Box, Button } from "@mui/material";
import { useState } from "react"; // React Hooks

const useTable = () => {
  const {
    rows,
    setRows,
    loading,
    error,
    fetchUrl,
    editUrl,
    removeUrl,
    removeUrls,
  } = useUrl();

  const columns = [
    // checkbox selection column for selecting rows in the table
    { field: "originalUrl", headerName: "URL", flex: 2, type: "string" },
    { field: "shortUrl", headerName: "Short URL", flex: 1, type: "string" },
    {
      field: "clicks",
      headerName: "Clicks",
      flex: 1,
      type: "number",
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      valueGetter: (value) => {
        return new Date(value);
      },
      type: "date",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Box style={{ display: "flex", gap: "8px" }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                handleEditRow(params.row.id);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => {
                handleDeleteRow(params.row.id);
              }}
            >
              Delete
            </Button>
          </Box>
        );
      },
      type: "actions",
    },
  ];

  const handleDeleteRow = async (id) => {
    console.log("Row to delete:", id);

    setRows((prevRows) => prevRows.filter((row) => row.id !== id));

    const data = await removeUrl(id);
    console.log("Deleted data:", data);
  };

  const handleEditRow = async (id, editData) => {
    console.log("Row to edit:", id);
    const data = await fetchUrl(id);
    console.log("Edit data:", data);
    const updatedData = await editUrl(id, editData);
    console.log("Updated data:", updatedData);
  };

  const [selectionModel, setSelectionModel] = useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection);
  };

  const handleDeleteRows = async () => {
    console.log("Rows to delete:", selectionModel);
    setRows((prevRows) =>
      prevRows.filter((row) => !selectionModel.includes(row.id))
    );

    const ids = {
      selectedIds: selectionModel,
    };

    const data = await removeUrls(ids);
    console.log("Deleted data:", data);
  };

  return {
    loading,
    rows,
    columns,
    selectionModel,
    handleSelectionModelChange,
    handleDeleteRows,
  };
};

export default useTable;
