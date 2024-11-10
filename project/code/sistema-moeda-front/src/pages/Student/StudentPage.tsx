import React from "react";
import { Button } from "@mui/material";
import StudentAppBar from "./StudentAppBar";
import { StudentProvider } from "../../context/StudentContext";
import { useStudent } from "../../context/StudentContext";

import ExchangeAdvantages from "./ExchangeAdvantages";

const StudentPage = () => {
  const { student, refreshStudent } = useStudent();

  return (
      <>
        <StudentAppBar student={student} />
        <ExchangeAdvantages />
      </>

  );
};

export default StudentPage;
