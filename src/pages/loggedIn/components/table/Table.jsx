import DeleteIcon from "@/components/icons/Delete";
import FilterIcon from "@/components/icons/Filter";
import InboxIcon from "@/components/icons/Inbox";
import useTable from "@/hooks/table/useTable"; // Custom Hook
import {
  Box,
  Button,
  Container,
  Tooltip,
  Typography,
  Pagination,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  DataGrid,
  GridPagination,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import "./Table.css";

const CustomNoRowsOverlay = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <InboxIcon width={120} height={120} />

      <Box sx={{ mt: 1 }}>No Rows</Box>
    </Box>
  );
};

const CustomToolbar = ({ onDelete, isSelect, count }) => {
  return (
    <GridToolbarContainer
      sx={{
        paddingInline: 2,
        paddingTop: 0,
        height: 52,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {isSelect ? (
          <Button
            variant="text"
            color="primary"
            size="small"
            startIcon={<DeleteIcon width={18} height={18} />}
            onClick={onDelete}
          >
            Delete
          </Button>
        ) : (
          <GridToolbarFilterButton />
        )}
      </Box>
      <Box>
        <Typography variant="h6">History ({count})</Typography>
      </Box>
    </GridToolbarContainer>
  );
};

const CustomTooltip = ({ ...props }) => {
  // quiero quitarte el tooltip de los filtros de las columnas:
  return <Tooltip {...props} title="" />;
};

const CustomPaginationActions = ({ page, onPageChange, className }) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
};

const CustomPagination = ({ count, ...props }) => {
  return (
    <>
      {count > 0 && (
        <GridPagination ActionsComponent={CustomPaginationActions} {...props} />
      )}
    </>
  );
};

const Table = () => {
  const {
    loading,
    rows,
    columns,
    handleDeleteRows,
    handleSelectionModelChange,
    selectionModel,
  } = useTable();

  return (
    <Box component="section" className="table">
      <Container>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            slots={{
              noRowsOverlay: CustomNoRowsOverlay,
              toolbar: CustomToolbar,
              pagination: CustomPagination,
              openFilterButtonIcon: () => <FilterIcon width={18} height={18} />,
              columnFilteredIcon: () => <FilterIcon width={18} height={18} />,
              baseTooltip: CustomTooltip,
            }}
            slotProps={{
              toolbar: {
                onDelete: handleDeleteRows,
                isSelect: selectionModel.length > 0,
                count: rows.length,
              },
              pagination: {
                count: rows.length,
              },
            }}
            onRowSelectionModelChange={handleSelectionModelChange}
            columns={columns}
            rows={rows}
            disableColumnResize
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnSelector
            disableColumnMenu
            autoHeight
            loading={loading}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
              sorting: {
                columns: [{ field: "date", sort: "desc" }],
              },
            }}
            pageSizeOptions={[10, 20, 30]}
            sx={{
              "--DataGrid-overlayHeight": "260px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
export default Table;
