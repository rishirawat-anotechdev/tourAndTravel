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
import { Add, Edit, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CustomPagination from "../Components/CustomPagination";

const data = [
  {
    title: "Active Coupon",
    value: 14,
    total: 14,
    percentage: 100,
    isPositive: true,
  },
  {
    title: "Inactive Coupon",
    value: 0,
    total: 14,
    percentage: 0,
    isPositive: false,
  },
  {
    title: "Today's Created",
    value: 0,
    total: 14,
    percentage: 0,
    isPositive: false,
  },
  {
    title: "This Month's Created Coupon",
    value: 0,
    total: 14,
    percentage: 0,
    isPositive: false,
  },
];

const CouponData = [
  {
    id: 1,
    couponCode: "letstravel",
    status: "Expired",
    startDate: "16/09/2024",
    endDate: "18/09/2024",
  },
  {
    id: 2,
    couponCode: "letstravelmore",
    status: "Active",
    startDate: "19/09/2024",
    endDate: "22/09/2024",
  },
  {
    id: 3,
    couponCode: "holidayfun2024",
    status: "Active",
    startDate: "01/10/2024",
    endDate: "05/10/2024",
  },
  {
    id: 4,
    couponCode: "wintersale20",
    status: "Expired",
    startDate: "10/10/2024",
    endDate: "15/10/2024",
  },
  {
    id: 5,
    couponCode: "newyear2025",
    status: "Active",
    startDate: "25/12/2024",
    endDate: "01/01/2025",
  },
  {
    id: 6,
    couponCode: "summerdeals",
    status: "Expired",
    startDate: "15/06/2024",
    endDate: "30/06/2024",
  },
  {
    id: 7,
    couponCode: "blackfriday2024",
    status: "Active",
    startDate: "25/11/2024",
    endDate: "29/11/2024",
  },
  {
    id: 8,
    couponCode: "christmas25",
    status: "Expired",
    startDate: "10/12/2024",
    endDate: "25/12/2024",
  },
  {
    id: 9,
    couponCode: "wintersale30",
    status: "Active",
    startDate: "01/12/2024",
    endDate: "10/12/2024",
  },
  {
    id: 10,
    couponCode: "springoffers",
    status: "Active",
    startDate: "01/03/2025",
    endDate: "15/03/2025",
  },
];

const CouponPage = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(CouponData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // Handle Search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = CouponData.filter((item) =>
      item.couponCode.toLowerCase().includes(query)
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
                  onClick={() => openModal("status")}
                >
                  Change Status
                </Button>
              </>
            ) : (
              <>
                <Link to={"/admin/add-coupon"}>
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
                <TableCell>Coupon Id</TableCell>
                <TableCell>Coupon Code</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Status</TableCell>
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
                    <TableCell>{row.couponCode}</TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
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
                    <TableCell sx={{ whiteSpace: "nowrap" }}>
                      <Link to={`/admin/edit/${row.id}/coupon`}>
                        <Button
                          variant="outlined"
                          startIcon={<Edit />}
                          onClick={() => setOpenFilterModal(true)}
                          sx={{
                            color: "#888",
                            borderColor: "#eef0f7",
                            fontSize: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Edit
                        </Button>
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

export default CouponPage;
