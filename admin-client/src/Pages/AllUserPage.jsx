import {
    Box,
    Button,
    Checkbox,
    Grid,
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
  import { Edit, FilterList, RemoveRedEyeOutlined, Search } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  import CustomPagination from "../Components/CustomPagination";
  import first1 from "../assets/first1.jpg";

  
  const data = [
    {
      title: "Total Users",
      value: 62,
      total: 73,
      percentage: 84.93,
      isPositive: true,
    },
    {
      title: "Activ Users",
      value: 6,
      total: 73,
      percentage: 8.22,
      isPositive: false,
    },
    {
      title: "Today Join User",
      value: 4,
      total: 72,
      percentage: 6.85,
      isPositive: false,
    },
    {
      title: "Deactivated Users",
      value: 1,
      total: 73,
      percentage: 0,
      isPositive: false,
    },
  ];
  
  const transactionData = [
    {
      id: 1,
      TouristName: "Rocky Singh",
      Email: "raw@rocky.gamil.com",
      phoneNumber:"123456",
      Country:"India",
      status: "Active",
      lastLogin: "19/09/2024",
    },
    {
        id: 2,
        TouristName: "Rocky Singh",
        Email: "raw@rocky.gamil.com",
        phoneNumber:"123456",
        Country:"India",
        status: "Active",
        lastLogin: "19/09/2024",
      },
      {
        id: 3,
        TouristName: "Rocky Singh",
        Email: "raw@rocky.gamil.com",
        phoneNumber:"123456",
        Country:"India",
        status: "Active",
        lastLogin: "19/09/2024",
      },
 
  ];
  
  const AllUserPage = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(transactionData);
    const [selectedRows, setSelectedRows] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
  
  
    // Handle Search
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      const filtered = transactionData.filter((item) =>
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
  
        {/* Search and Actions Table*/}
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
                  //   onClick={() => setOpen(true)}
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
                  <TableCell sx={{ whiteSpace: "nowrap" }}>User Id</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Email-Phone</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Login</TableCell>
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
                      <TableCell>{row.id}</TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={first1}
                            alt={row.packages}
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              marginRight: "8px",
                            }}
                          />
                          <Typography>
                            {row.TouristName}
                         
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        
                          <Typography>
                            {row.Email}
                         
                          </Typography>
                          <Typography>
                            {row.phoneNumber}
                         
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{row.Country}</TableCell>
  
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
                      <TableCell>{row.lastLogin}</TableCell>
                      <TableCell sx={{ whiteSpace: "nowrap" }}>
                        <Button
                          variant="outlined"
                          startIcon={<Edit />}
                          component={Link}
                          to="/admin/profile/:id/user"
                          sx={{
                            color: "#888",
                            borderColor: "#eef0f7",
                            fontSize: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          View
                        </Button>
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
  
  export default AllUserPage;
  