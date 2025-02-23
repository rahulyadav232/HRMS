import React from "react";
import Main from "../Main/Main";

const Attendance = () => {
  return (
    <Main
      title="Attendance"
      apiUrl="http://localhost:5000/api/attendance"
      showStatusFilter={false}
      tableHeaders={["Name", "Date", "Check-in", "Check-out"]}
    />
  );
};

export default Attendance;
