import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StatisticCard from "../Components/StatisticCard";
import { Add, Edit, FilterList, Search } from "@mui/icons-material";
import first1 from "../assets/first1.jpg";
import CustomPagination from "../Components/CustomPagination";
import { Link } from "react-router-dom";

const destinationsData = [
  {
    id: 1,
    destination: "Saint Martin",
    packages: 3,
    status: "Active",
    createdAt: "05/09/2024",
  },
  {
    id: 2,
    destination: "Ibiza",
    packages: 3,
    status: "Active",
    createdAt: "04/09/2024",
  },
  {
    id: 3,
    destination: "Madrid",
    packages: 3,
    status: "Active",
    createdAt: "04/09/2024",
  },
  {
    id: 4,
    destination: "Morocco",
    packages: 2,
    status: "Active",
    createdAt: "08/08/2024",
  },
  {
    id: 5,
    destination: "Vienna",
    packages: 1,
    status: "Active",
    createdAt: "26/07/2024",
  },
  {
    id: 6,
    destination: "Paris",
    packages: 1,
    status: "Active",
    createdAt: "26/07/2024",
  },
  {
    id: 7,
    destination: "Milan",
    packages: 1,
    status: "Active",
    createdAt: "25/07/2024",
  },
  {
    id: 8,
    destination: "Dhaka",
    packages: 2,
    status: "Active",
    createdAt: "25/07/2024",
  },
  {
    id: 9,
    destination: "Athens",
    packages: 1,
    status: "Active",
    createdAt: "15/07/2024",
  },
  {
    id: 10,
    destination: "Bhutan",
    packages: 1,
    status: "Active",
    createdAt: "15/07/2024",
  },
];

const data = [
  {
    title: "Active Destination",
    value: 14,
    total: 14,
    percentage: 100,
    isPositive: true,
  },
  {
    title: "Inactive Destination",
    value: 0,
    total: 14,
    percentage: 0,
    isPositive: false,
  },
  {
    title: "Created by Today",
    value: 0,
    total: 14,
    percentage: 0,
    isPositive: false,
  },
  {
    title: "Created This Month",
    value: 0,
    total: 14,
    percentage: 0,
    isPositive: false,
  },
];

const DestinationPage = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(destinationsData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // Handle Search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = destinationsData.filter((item) =>
      item.destination.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  // Handle Pagination
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  // Handle Row Selection
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(filteredData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Open Confirmation Modal
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  return (
    <Box>
      {/* Statistic Cards */}
      <Box sx={{ border: "10px", my: 2, borderColor: "#888" }} />
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatisticCard
              title={item.title}
              value={item.value}
              total={item.total}
              percentage={item.percentage}
              isPositive={item.isPositive}
            />
          </Grid>
        ))}
      </Grid>

      {/* Search and Actions */}
      <Box component={Paper} sx={{ bgcolor: "#fff", mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
            p: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Search Destinations"
              variant="standard"
              size="small"
              value={searchQuery}
              onChange={handleSearch}
              InputProps={{
                disableUnderline: false,
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "gray",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "gray",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "darkgray",
                },
                "& label": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
            <Search sx={{ mt: 2.2, color: "gray" }} />
          </Box>

          <Box>
            {selectedRows.length > 0 ? (
              <>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#d32f2f",
                    marginRight: 2,
                    fontSize: "10px",
                  }}
                  onClick={() => openModal("delete")}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#1976d2", fontSize: "10px" }}
                  onClick={() => openModal("status")}
                >
                  Change Status
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  startIcon={<FilterList />}
                  onClick={() => setOpenFilterModal(true)}
                  sx={{
                    marginRight: 2,
                    color: "#888",
                    borderColor: "#eef0f7",
                    fontSize: "10px",
                  }}
                >
                  Filter
                </Button>
                <Link to={"/admin/add-destination"}>
                  <Button
                    startIcon={<Add />}
                    variant="contained"
                    sx={{ backgroundColor: "#377dff", fontSize: "10px" }}
                  >
                    Add New
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#f1f3f5" }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    sx={{ color: "#888" }}
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < filteredData.length
                    }
                    checked={selectedRows.length === filteredData.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Packages</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        sx={{ color: "#888" }}
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleSelectRow(row.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={first1}
                          alt={row.destination}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />
                        {row.destination}
                      </Box>
                    </TableCell>
                    <TableCell>{row.packages}</TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          display: "inline-block",
                          backgroundColor: "#d1fae5",
                          color: "#065f46",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          fontSize: "12px",
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell sx={{ whiteSpace: "nowrap" }}>
                      <Link to={"/admin/add-destination"}>
                        <IconButton size="small" color="#888">
                          <Edit />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <CustomPagination
          total={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      {/* Confirmation Modal */}
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {modalType === "delete"
              ? "Are you sure you want to delete the selected rows?"
              : "Are you sure you want to change the status of the selected rows?"}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button onClick={closeModal} variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={closeModal}
              variant="contained"
              color={modalType === "delete" ? "error" : "primary"}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Filter Modal */}
      <Modal
        open={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        aria-labelledby="filter-modal"
        aria-describedby="filter-modal-description"
      >
        <Box
          sx={{
            width: 400,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 24,
            padding: 4,
            margin: "auto",
            marginTop: "15vh",
          }}
        >
          <Typography variant="h6" id="filter-modal">
            Filter Destinations
          </Typography>
          <Button
            onClick={() => setOpenFilterModal(false)}
            sx={{ marginTop: 2 }}
            fullWidth
            variant="contained"
          >
            Apply Filter
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default DestinationPage;
