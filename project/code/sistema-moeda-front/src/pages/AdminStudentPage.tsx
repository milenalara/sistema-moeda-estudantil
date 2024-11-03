import React from "react";
import DataTable from "../components/DataTable";
import AdminAppBar from "../components/AdminAppBar";

const AdminStudentPage: React.FC = () => {
  return (
    <div>
      <AdminAppBar />
      <DataTable />
    </div>
  );
};

export default AdminStudentPage;
