import {
    Box,
    Button,
    Checkbox,
    Grid,
    Modal,
    Paper,
    Rating,
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
  import { Add, Search } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  import CustomPagination from "../Components/CustomPagination";
  import first1 from "../assets/first1.jpg"
  const data = [
    {
      title: "Publish Review",
      value: 14,
      total: 14,
      percentage: 100,
      isPositive: true,
    },
    {
      title: "Hold Review",
      value: 4,
      total: 14,
      percentage: 0,
      isPositive: false,
    },
    {
      title: "Today Created Review",
      value: 2,
      total: 14,
      percentage: 0,
      isPositive: false,
    },
    {
      title: "This Month's Created Review",
      value: 2,
      total: 14,
      percentage: 0,
      isPositive: false,
    },
  ];
  
  const ReviewData = [
    {
      id: 1,
      Package: "letstravel",
      reviewerName: "Rockey",
      reviewerEmail: "Rockey@gmail.com",
      reviewText: "The tour was fantastic and the staff was friendly.",
      rating: 5,
      createdAt: "05/09/2024",
      status: "Published",
    },
    {
      id: 2,
      Package: "letstravel",
      reviewerName: "RawatSingh",
      reviewerEmail: "rawat@gmail.com",
      reviewText: "Had a great time exploring new places. Highly recommend!",
      rating: 5,
      createdAt: "06/09/2024",
      status: "Published",
    },
    {
      id: 3,
      Package: "adventuretrip",
      reviewerName: "Aarav",
      reviewerEmail: "aarav123@gmail.com",
      reviewText: "Amazing experience, but could improve the food quality.",
      rating: 4,
      createdAt: "10/09/2024",
      status: "Unpublished",
    },
    {
      id: 4,
      Package: "beachparadise",
      reviewerName: "Sophia",
      reviewerEmail: "sophia_w@gmail.com",
      reviewText: "The beach tour was breathtaking and well-organized.",
      rating: 5,
      createdAt: "12/09/2024",
      status: "Published",
    },
    {
      id: 5,
      Package: "mountainescape",
      reviewerName: "Ramesh",
      reviewerEmail: "ramesh_007@gmail.com",
      reviewText: "Enjoyed the serene environment. Worth every penny!",
      rating: 5,
      createdAt: "15/09/2024",
      status: "Unpublished",
    },
    {
      id: 6,
      Package: "letstravelmore",
      reviewerName: "Priya",
      reviewerEmail: "priya_kumar@gmail.com",
      reviewText: "Good tour, but too much time was spent on travel.",
      rating: 3,
      createdAt: "18/09/2024",
      status: "Published",
    },
    {
      id: 7,
      Package: "adventuretrip",
      reviewerName: "Nikhil",
      reviewerEmail: "nikhil_a@gmail.com",
      reviewText: "Exciting and thrilling! Loved the adventurous activities.",
      rating: 4,
      createdAt: "20/09/2024",
      status: "Published",
    },
    {
      id: 8,
      Package: "winterwonderland",
      reviewerName: "Emma",
      reviewerEmail: "emma_white@gmail.com",
      reviewText: "Beautiful snow-covered destinations. Highly recommended!",
      rating: 5,
      createdAt: "22/09/2024",
      status: "Unpublished",
    },
    {
      id: 9,
      Package: "culturalexplorer",
      reviewerName: "Aditya",
      reviewerEmail: "aditya_sharma@gmail.com",
      reviewText: "Informative and engaging. A must for culture lovers.",
      rating: 5,
      createdAt: "25/09/2024",
      status: "Published",
    },
    {
      id: 10,
      Package: "beachparadise",
      reviewerName: "Liam",
      reviewerEmail: "liam_green@gmail.com",
      reviewText: "Loved the beach activities, but accommodations were average.",
      rating: 4,
      createdAt: "28/09/2024",
      status: "Published",
    }
  ];
  
  
  
  const ReviewPage = () => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(ReviewData);
    const [selectedRows, setSelectedRows] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
  
    // Handle Search
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      const filtered = ReviewData.filter((item) =>
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
                  <TableCell sx={{whiteSpace:"nowrap"}}>Review Id</TableCell>
                  <TableCell>
                    
                    Package
                    </TableCell>
                  <TableCell>Reviewer</TableCell>
                  <TableCell>Review</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          sx={{ color: "#888" }}
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleSelectRow(row.id)}
                        />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell >
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
                        {row.Package}
                        </Box>
                        </TableCell>
                      <TableCell>
                       
                       {row.reviewerName}
                       <Typography style={{color:"#888", fontSize:"12px", }}> {row.reviewerEmail}</Typography>
                       
                        </TableCell>
                        <TableCell>
  <Rating 
    value={row.rating} 
    readOnly 
    precision={0.5} 
  />
 <Typography>{row.reviewText}</Typography> 
</TableCell>
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
{row.createdAt}
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
  
  export default ReviewPage;
  