import * as React from "react";
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
import {
  Avatar,
  Badge,
  badgeClasses,
  Box,
  IconButton,
  Slider,
  styled,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { BarChart } from '@mui/x-charts/BarChart';
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
import StackOrderDemo from "./CustomGraph";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function CustomLabels() {
  return (
    <StackOrderDemo />
  );
}

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

  const marks = [
    {
      value: 100,
      label: "100%",
    },
  ];

  function valuetext(value) {
    return `${value}%`;
  }

  const [close, setClose] = React.useState(true);
  const sideMenuTabs = (name, icon) => {
    return (
      <div className="hover">
        <div
          className="menuItem"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="menuIcon">{icon}</span>
          {close && <div className="menuName">{name}</div>}
        </div>
      </div>
    );
  };
  return (
    <div className="rootLayout">
      <div
        className={`${close ? "sideBar" : "sideBarClose"}`}
        onClick={() => setClose(!close)}
      >
        {close && (
          <div
            className="closeIcon"
            onClick={() => [console.log(close), setClose(!close)]}
          >
            <CloseIcon className="icon" />
          </div>
        )}
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
                width: "100%",
                justifyContent: "end",
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
                <MenuItem value={10}><span>GPO</span></MenuItem>
                <MenuItem value={20}><span>Non GPO</span></MenuItem>
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
                  <div
                    style={{ width: "80%", zoom: "90%" }}
                    className="restheaders"
                  >
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
                      Sort by Month
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                {CustomLabels()}
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
                    <span className="title">Order Placed</span>
                    <span className="bold">48</span>
                    <ArrowForwardIosIcon fontSize="small" className="icon" />
                  </div>
                  <div className="statusitems">
                    <FactCheckIcon className="goldIcon" />
                    <span className="title">Approved</span>
                    <span className="bold">12</span>
                    <ArrowForwardIosIcon fontSize="small" className="icon" />
                  </div>
                  <div className="statusitems">
                    <LocalShippingIcon className="goldIcon" />
                    <span className="title">Shipped</span>
                    <span className="bold">28</span>
                    <ArrowForwardIosIcon fontSize="small" className="icon" />
                  </div>
                  <div className="statusitems">
                    <CreditCardIcon className="goldIcon" />
                    <span className="title">Delivered</span>
                    <span className="bold">8</span>
                    <ArrowForwardIosIcon fontSize="small" className="icon" />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="credit-card">
                  <div className="credit-card-content">
                    <div className="max-credit">
                      <p>Maximum Credit</p>
                      <h2>₹30,000</h2>
                    </div>
                    <div className="amounts">
                      <div className="used-amount">
                        <p>Used Amount</p>
                        <h3>₹20,000</h3>
                      </div>
                      <div className="balance-credits">
                        <p>Balance credits</p>
                        <h3>₹10,000</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dueamount">
                  <PendingActionsIcon
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ fontWeight: "400" }}>Due Amount</span>
                  <span style={{ fontSize: "larger", fontWeight: "bolder" }}>
                    ₹40,000
                  </span>
                </div>
                <div className="totalamount" style={{ padding: "10px" }}>
                  <span style={{ fontSize: "16.77px" }}>Total Amount</span>
                  <span style={{ fontSize: "36.92px", fontWeight: "800" }}>
                    1,00,000
                  </span>

                  <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                    style={{ color: "#21A945" }}
                  />
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
