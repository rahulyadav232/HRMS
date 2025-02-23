import React from "react";
// import Dashboard from "../Dashboard/Dashboard";
import Main from "../Main/Main";

const Employee = () => {
  return (
    <Main
      title="Employees"
      apiUrl="http://localhost:5000/api/employees"
      showStatusFilter={false}
      tableHeaders={["Name", "Email", "Phone", "Position"]}
    />
  );
};

export default Employee;
