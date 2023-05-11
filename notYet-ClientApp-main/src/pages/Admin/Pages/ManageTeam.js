import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../Data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import MHeader from "../../../Components/Admin/MHeader";
import { useState, useEffect } from "react";

import NavBar from "../Componentsx/NavBar";

const ManageTeam = () => {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    fetch(`http://localhost:3000/teams/`, {
      method: "GET",
      crossDomain: true,
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d.data);
      });
  };
  console.log(data);

  console.log(fetchInfo);
  useEffect(() => {
    fetchInfo();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="9px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <NavBar />
      <Box m="130px">
        <MHeader title="" subtitle="" />
        <Box
          m="0 0 80px 120px"
          height="80vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              color: colors.greenAccent[900],
              backgroundColor: colors.primary[700],
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              color: colors.greenAccent[900],
            },
            "& .name-column--cell": {
              color: colors.greenAccent[500],
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none",
              backgroundColor: colors.primary[700],
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[500],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.primary[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[700]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </div>
  );
};

export default ManageTeam;
