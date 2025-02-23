import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { People, BusinessCenter, CalendarToday, EventNote, ExitToApp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import LogoutModal from "../Logout/Logout";

const Sidebar = () => {
  const [openLogout, setOpenLogout] = useState(false);
  const navigate = useNavigate();

  // Function to open modal
  const handleOpenLogout = () => setOpenLogout(true);

  // Function to close modal
  const handleCloseLogout = () => setOpenLogout(false);

  // Function to log out
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove auth token
    navigate("/login"); // Redirect to login page
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <Typography variant="h6" className={styles.logo2}> ☐ <span>Logo</span></Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        size="small"
        className={styles.searchInput}
      />

      {/* Recruitment Section */}
      <Typography className={styles.sidebarMenuTitle}>Recruitment</Typography>
      <nav className={styles.sidebarMenu}>
        <Link to="/dashboard"><People /> Candidates</Link>
      </nav>

      {/* Organization Section */}
      <Typography className={styles.sidebarMenuTitle}>Organization</Typography>
      <nav className={styles.sidebarMenu}>
        <Link to="/employees"><BusinessCenter /> Employees</Link>
        <Link to="/attendance"><CalendarToday /> Attendance</Link>
        <Link to="/leaves"><EventNote /> Leaves</Link>
      </nav>

      {/* Push Logout to Bottom */}
      <div className={styles.sidebarFooter}>
        <Typography className={styles.sidebarMenuTitle}>Others</Typography>
        <nav className={styles.sidebarMenu}>
          <Link to="#" onClick={handleOpenLogout} className={styles.logoutLink}>
            <ExitToApp /> Logout
          </Link>
        </nav>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal open={openLogout} handleClose={handleCloseLogout} handleLogout={handleLogout} />
    </aside>
  );
};

export default Sidebar;
