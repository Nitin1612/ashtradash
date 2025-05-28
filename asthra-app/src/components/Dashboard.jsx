import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Groups2Icon from "@mui/icons-material/Groups2";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {
  Avatar,
  Badge,
  badgeClasses,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  LinearProgress,
  linearProgressClasses,
  ListItemIcon,
  Menu,
  OutlinedInput,
  styled,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
  return <StackOrderDemo />;
}
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#A79F9FAD",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#21A945",
  },
}));
function Dashboard() {
  const menuItems = [
    { icon: <HomeIcon />, name: "Dashboard" },
    { icon: <ShoppingCartIcon />, name: "Order Summary" },
    { icon: <QueryStatsIcon />, name: "Purchase Analysis" },
    { icon: <FormatBoldIcon />, name: "Brand" },
    { icon: <Groups2Icon />, name: "Vendor" },
    { icon: <CategoryIcon />, name: "Category" },
    { icon: <CreditCardIcon />, name: "Transaction" },
    { icon: <WidgetsIcon />, name: "Products" },
    { icon: <StoreIcon />, name: "Requested Products" },
    { icon: <LogoutIcon />, name: "Logout" },
  ];

  const [close, setClose] = React.useState(true);

  const sideMenuTabs = (name, icon) => {
    return (
      <div className="white hover hovEff">
        <div
          className={`menuItem ${!close && "close"}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="menuIcon  ">
            <span className="menuborder">{icon}</span>{" "}
            {!close && (
              <span className="hoverMenu">
                {name == "Dashboard" ? "Home" : name}
              </span>
            )}{" "}
          </span>
          {close && <span className="menuName">{name}</span>}
        </div>
      </div>
    );
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [actMenu, setActMenu] = React.useState(null);
  const openGPO = Boolean(anchorEl);
  const openHOS = Boolean(anchorE2);
  const openACT = Boolean(actMenu);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
              <>
                <div className="gpowrapper">
                  <Button
                    className="gpodrop"
                    onClick={handleClick}
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      marginRight: "10px",
                    }}
                  >
                    GPO
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      style={{ position: "absolute", right: 10 }}
                    />
                  </Button>
                  <Menu
                    id="gpo-positioned-menu"
                    aria-labelledby="gpo-positioned-button"
                    anchorEl={anchorEl}
                    open={openGPO}
                    onClose={() => setAnchorEl(null)}
                    // anchorOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                    // transformOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                  >
                    <div style={{ backgroundColor: "black", color: "white" }}>
                      <MenuItem
                        className="gposelect"
                        style={{
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontSize: "13px",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "black";
                          e.target.style.color = "white";
                        }}
                        onClick={() => setAnchorEl(null)}
                      >
                        GPO
                      </MenuItem>
                      <MenuItem
                        className="gposelect"
                        style={{
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontSize: "13px",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "black";
                          e.target.style.color = "white";
                        }}
                        onClick={() => setAnchorEl(null)}
                      >
                        Non GPO
                      </MenuItem>
                    </div>
                  </Menu>
                </div>
              </>

              <>
                <div className="hoswrapper">
                  <Button
                    className="hosdrop"
                    onClick={(e) => setAnchorE2(e.currentTarget)}
                    startIcon={
                      <SearchIcon
                        style={{ paddingRight: "10px", paddingLeft: "10px" }}
                      />
                    }
                  >
                    Kaveri Hospital
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      style={{ position: "absolute", right: 10 }}
                    />
                  </Button>
                  <Menu
                    id="hos-positioned-menu"
                    aria-labelledby="hos-positioned-button"
                    anchorEl={anchorE2}
                    open={openHOS}
                    onClose={() => setAnchorE2(null)}
                    style={{ padding: "0px", margin: "0px" }}
                    // anchorOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                    // transformOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "210px",
                      }}
                    >
                      <MenuItem
                        style={{
                          fontFamily: "poppins",
                          fontWeight: 400,
                          fontSize: "15px",
                          margin: "0px",
                          paddingRight: "5px",
                          paddingLeft: "5px",
                        }}
                        onClick={() => setAnchorE2(null)}
                      >
                        <FormControl fullWidth>
                          <OutlinedInput
                            style={{
                              width: "100%",
                              height: "30px",
                              borderRadius: "5%",
                              marginRight: "10px",
                              paddingRight: "0px",
                            border:'1px solid #EFEEEE',
                            zoom:'95%'
                            }}
                            placeholder="Search"
                            startAdornment={
                              <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </MenuItem>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "5px",
                          marginLeft: "5px",
                          marginBottom: "15px",
                          borderRadius: "10px",
                          border:"1px solid #EFEEEE"
                        }}
                      >
                        <MenuItem
                          style={{
                            fontFamily: "poppins",
                            fontWeight: 400,
                            fontSize: "13px",
                            width: "100%",
                            margin: "0px",
                            paddingRight: "5px",
                            paddingLeft: "5px",
                          }}
                          onClick={() => setAnchorE2(null)}
                        >
                          <div
                            style={{
                              justifyContent: "start",
                              alignItems: "center",
                              display: "flex",
                              marginRight: "10px",
                            }}
                          >
                            <LocalHospitalIcon className="hosIconWrap "/>
                          </div>
                          Non GPO
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "poppins",
                            fontWeight: 400,
                            fontSize: "13px",
                            width: "100%",
                            margin: "0px",
                            paddingRight: "5px",
                            paddingLeft: "5px",
                          }}
                          onClick={() => setAnchorE2(null)}
                        >
                          <div
                            style={{
                              justifyContent: "start",
                              alignItems: "center",
                              display: "flex",
                              marginRight: "10px",
                            }}
                          >
                            <LocalHospitalIcon className="hosIconWrap" />
                          </div>
                          Non GPO
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "poppins",
                            fontWeight: 400,
                            fontSize: "13px",
                            margin: "0px",
                            paddingRight: "5px",
                            paddingLeft: "5px",
                            width: "100%",
                          }}
                          onClick={() => setAnchorE2(null)}
                        >
                          <div
                            style={{
                              justifyContent: "start",
                              alignItems: "center",
                              display: "flex",
                              marginRight: "10px",
                            }}
                          >
                            <LocalHospitalIcon className="hosIconWrap " />
                          </div>
                          Non GPO
                        </MenuItem>
                      </div>
                    </div>
                  </Menu>
                </div>
              </>

              <IconButton className="notIcon">
                <NotificationsActiveIcon />
                <CartBadge
                  badgeContent={2}
                  color="success"
                  overlap="circular"
                />
              </IconButton>

              <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                onClick={(e) => setActMenu(e.currentTarget)}
              >
                N
              </Avatar>
            </div>
          </div>
          <Menu
            anchorEl={actMenu}
            open={openACT}
            onClose={() => setActMenu(null)}
            onClick={() => setActMenu(null)}
            style={{ display: "flex", width: "auto", borderRadius: "15px"}}
          >
            <div style={{ backgroundColor: "white", padding: "10px"}}>
              <MenuItem
                onClick={() => setActMenu(null)}
                style={{
                  fontFamily: "poppins",
                  fontWeight: "400",
                  fontSize: "15px",
                  zoom: "80%",
                }}
              >
                <ListItemIcon>
                  <LocalHospitalIcon fontSize="small" />
                </ListItemIcon>
                Kaveri Hospital
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => setActMenu(null)}
                style={{
                  fontFamily: "poppins",
                  fontWeight: "400",
                  fontSize: "15px",
                  zoom: "80%",
                }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </div>
          </Menu>
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
                    <div className="g1 order">
                      <div className="leftportion">
                        <AddShoppingCartIcon
                          className="logoIcon order-icon"
                          style={{ backgroundColor: "#FF7308" }}
                        />
                        <span className="label">Total Order</span>
                        <span className="count">300</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ShoppingCartIcon className="rightIconFade" />
                      </div>
                    </div>
                    <div className="g2 transac">
                      <div className="leftportion">
                        <MultipleStopIcon
                          className="logoIcon order-icon"
                          style={{ backgroundColor: "#0077B6" }}
                        />
                        <span className="label">Total Transactions</span>
                        <span className="count">250</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CurrencyRupeeIcon className="rightIconFade" />
                      </div>
                    </div>
                  </div>
                  <div className="left">
                    <div className="g3 pending">
                      <div className="leftportion">
                        <PendingActionsIcon
                          className="logoIcon order-icon"
                          style={{ backgroundColor: "#EA232B" }}
                        />
                        <span className="label">Approval Pending</span>
                        <span className="count">50</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AccessTimeIcon className="rightIconFade" />
                      </div>
                    </div>
                    <div className="g4 request">
                      <div className="leftportion">
                        <ChatIcon
                          className="logoIcon order-icon"
                          style={{ backgroundColor: "#FF7308" }}
                        />
                        <span className="label">Request Received</span>
                        <span className="count">20</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChatIcon className="rightIconFade" />
                      </div>
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
                      Orders Approval Pending
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
                    className="activedot"
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
                      <h2>
                        <span
                          style={{
                            fontFamily: "fantasy",
                            fontSize: "15px",
                            paddingRight: "2px",
                          }}
                        >
                          ₹
                        </span>
                        30,000
                      </h2>
                    </div>
                    <div className="amounts">
                      <div className="used-amount">
                        <p>Used Amount</p>
                        <h3>
                          <span
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "14px",
                              paddingRight: "2px",
                            }}
                          >
                            ₹
                          </span>
                          20,000
                        </h3>
                      </div>
                      <div className="balance-credits">
                        <p>Balance credits</p>
                        <h3>
                          <span
                            style={{
                              fontFamily: "fantasy",
                              fontSize: "14px",
                              paddingRight: "2px",
                            }}
                          >
                            ₹
                          </span>{" "}
                          10,000
                        </h3>
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
                      height: "35.38px",
                      width: "35.38px",
                      padding: "7.5px",
                      zoom: "65%",
                    }}
                  />
                  <span style={{ fontWeight: "400" }}>Due Amount</span>
                  <span style={{ fontSize: "larger", fontWeight: "bolder" }}>
                    <span
                      style={{
                        fontFamily: "fantasy",
                        fontSize: "14px",
                        paddingRight: "2px",
                      }}
                    >
                      ₹
                    </span>{" "}
                    40,000
                  </span>
                </div>
                <div className="totalamount" style={{ padding: "10px" }}>
                  <span style={{ fontSize: "16.77px" }}>Total Balance</span>
                  <span style={{ fontSize: "36.92px", fontWeight: "600" }}>
                    1,00,000
                  </span>

                  <BorderLinearProgress
                    variant="determinate"
                    value={70}
                    style={{ marginTop: "15px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                      fontFamily: "poppins",
                      fontSize: "14px",
                    }}
                  >
                    <div>70%</div>
                    <div>30%</div>
                  </div>
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
