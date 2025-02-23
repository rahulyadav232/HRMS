import React from "react";
// import Dashboard from "../Dashboard/Dashboard";
import Main from "../Main/Main";

const Leave = () => {
  return (
    <Main
      title="Leaves"
      apiUrl="http://localhost:5000/api/leaves"
      showStatusFilter={false}
      tableHeaders={["Name", "Leave Type", "Start Date", "End Date"]}
    />
  );
};

export default Leave;
