import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentAppBar from "./StudentAppBar";
import { StudentProvider, useStudent } from "../../context/StudentContext";
import ExchangeAdvantages from "./ExchangeAdvantages";
import Statement from "./Statement";
import MyAdvantages from "./MyAdvantages";

const StudentPage = () => {
  const { student, refreshStudent } = useStudent();

  return (
    <>
      <StudentAppBar student={student} />
      <Routes>
        <Route path="/" element={<MyAdvantages />} />
        <Route path="vantagens" element={<ExchangeAdvantages />} />
        <Route path="extrato" element={<Statement />} />
      </Routes>
    </>
  );
};

export default StudentPage;
