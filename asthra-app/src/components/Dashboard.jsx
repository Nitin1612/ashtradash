import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import InventoryIcon from "@mui/icons-material/Inventory";
import Groups2Icon from "@mui/icons-material/Groups2";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Badge, badgeClasses, IconButton, styled } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { BarChart } from "@mui/icons-material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatIcon from "@mui/icons-material/Chat";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Dashboard() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const menuItems = [
    { icon: <HomeIcon />, name: "Dashboard" },
    { icon: <ShoppingCartIcon />, name: "Order Summary" },
    { icon: <QueryStatsIcon />, name: "Purchase Summary" },
    { icon: <InventoryIcon />, name: "Brand" },
    { icon: <Groups2Icon />, name: "Vendor" },
    { icon: <CategoryIcon />, name: "Category" },
    { icon: <CreditCardIcon />, name: "Transaction" },
    { icon: <WidgetsIcon />, name: "Products" },
    { icon: <StoreIcon />, name: "Requested Products" },
    { icon: <LogoutIcon />, name: "Logout" },
  ];

  const sideMenuTabs = (name, icon) => {
    return (
      <>
        <div className="menuItem">
          <div className="menuIcon">{icon}</div>
          <div className="menuName">{name}</div>
        </div>
      </>
    );
  };

  return (
    <div className="rootLayout">
      <div className="sideBar">
        <div style={{ display: "flex", justifyContent: "end", border: "2px" }}>
          <CloseIcon />
        </div>
        <div className="logo">
          <img
            src="http://asthra.manager.s3-website.ap-south-1.amazonaws.com/static/media/logo.44fb18b21411419307de.png"
            width={75}
            height={75}
          />
        </div>
        <div>{menuItems?.map((e) => sideMenuTabs(e.name, e.icon))}</div>
      </div>

      <div className="mainDash">
        <>
          {/* Navbar */}
          <div className="navbar">
            <div style={{ display: "flex", width: "55%" }}>
              <div className="backIcon" style={{ width: "66px" }}>
                <ArrowBackIcon />
              </div>
              <div className="name">Dashboard</div>
            </div>
            <div
              style={{
                display: "flex",
                width: "45%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Select
                inputProps={{ "aria-label": "Without label" }}
                className="gpodrop"
                value={age}
                onChange={handleChange}
                label="GPO"
              >
                <MenuItem value={10}>GPO</MenuItem>
                <MenuItem value={20}>Non GPO</MenuItem>
              </Select>
              <Select
                className="hosdrop"
                value={age}
                onChange={handleChange}
                inputProps={{ "aria-label": "Without label" }}
                startAdornment={<SearchIcon />}
                label="Kaveri Hospital"
              >
                <MenuItem value={10}>Kaveri Hospital</MenuItem>
              </Select>

              <IconButton className="notIcon">
                <NotificationsIcon />
                <CartBadge
                  badgeContent={2}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>

              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
          </div>
        </>
        <>
          {/* analytics */}
          <div className="analybox">
            <div className="leftbox">
              <div className="top">
                <div className="sortBy">
                  Sort by Date
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </div>
                <div className="graph">
                  <div className="right">
                    <div className="g1">
                      <div className="leftportion">
                        <AddShoppingCartIcon
                          className="logoIcon"
                          style={{ backgroundColor: "#FF7308" }}
                        />
                        <span className="label">Total Order</span>
                        <span className="count">300</span>
                      </div>
                      <ShoppingCartIcon className="rightIconFade" />
                    </div>
                    <div className="g2">
                      <div className="leftportion">
                        <MultipleStopIcon
                          className="logoIcon"
                          style={{ backgroundColor: "#0077B6" }}
                        />
                        <span className="label">Total Transactions</span>
                        <span className="count">300</span>
                      </div>
                      <CurrencyRupeeIcon className="rightIconFade" />
                    </div>
                  </div>
                  <div className="left">
                    <div className="g3">
                      <div className="leftportion">
                        <PendingActionsIcon
                          className="logoIcon"
                          style={{ backgroundColor: "#EA232B" }}
                        />
                        <span className="label">Approval Pending</span>
                        <span className="count">300</span>
                      </div>
                      <AccessTimeIcon className="rightIconFade" />
                    </div>
                    <div className="g4">
                      <div className="leftportion">
                        <ChatIcon
                          className="logoIcon"
                          style={{ backgroundColor: "#FF7308" }}
                        />
                        <span className="label">Request Received</span>
                        <span className="count">300</span>
                      </div>
                      <ChatIcon className="rightIconFade" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="header">
                  <div style={{ width: "20%" }} className="heading">
                    {" "}
                    Analytics
                  </div>
                  <div style={{ width: "80%" }} className="restheaders">
                    <span className="label">
                      <span
                        className="dot"
                        style={{ backgroundColor: "#EA232B" }}
                      ></span>
                      Total Order Received
                    </span>
                    <span className="label">
                      <span
                        className="dot"
                        style={{ backgroundColor: "#FBD7D9" }}
                      ></span>
                      Total Order Received
                    </span>
                    <div className="sortBy">
                      Sort by Date
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <BarChart
                  series={[
                    { data: [4, 2, 5, 4, 1], stack: "A", label: "Series A1" },
                    { data: [2, 8, 1, 3, 1], stack: "A", label: "Series A2" },
                    { data: [14, 6, 5, 8, 9], label: "Series B1" },
                  ]}
                  barLabel={(item, context) => {
                    if ((item.value ?? 0) > 10) {
                      return "High";
                    }
                    return context.bar.height < 60
                      ? null
                      : item.value?.toString();
                  }}
                  height={350}
                  className="graphicalRep"
                />
              </div>
            </div>
            <div className="rightbox">
              <div className="top">
                {/* active header */}
                <span className="label">
                  <span
                    className="dot"
                    style={{ backgroundColor: "green" }}
                  ></span>
                  Active
                </span>
                {/* progreess */}
                <div className="progress">
                  <div className="statusitems">
                    <LocalHospitalIcon className="goldIcon" />
                    <span>Order Placed</span>
                    <span className="bold">48</span>
                    <ArrowForwardIosIcon fontSize="small" />
                  </div>
                  <div className="statusitems">
                    <FactCheckIcon className="goldIcon" />
                    <span>Approved</span>
                    <span className="bold">12</span>
                    <ArrowForwardIosIcon fontSize="small" />
                  </div>
                  <div className="statusitems">
                    <LocalShippingIcon className="goldIcon" />
                    <span>Shipped</span>
                    <span className="bold">28</span>
                    <ArrowForwardIosIcon fontSize="small" />
                  </div>
                  <div className="statusitems">
                    <CreditCardIcon className="goldIcon" />
                    <span>Delivered</span>
                    <span className="bold">8</span>
                    <ArrowForwardIosIcon fontSize="small" />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="creditCard">
                    <span>Maximum Credit</span>
                    
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Dashboard;
