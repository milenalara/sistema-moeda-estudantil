import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentAppBar from "./StudentAppBar";
import { useStudent } from "../../context/StudentContext";
import ExchangeAdvantages from "./ExchangeAdvantages";
import Statement from "./Statement";

const StudentPage = () => {
  const { student, refreshStudent } = useStudent();

  return (
    <>
      <StudentAppBar student={student} />
      <Routes>
        <Route path="/" element={<div>Home Content</div>} />
        <Route path="vantagens" element={<ExchangeAdvantages />} />
        <Route path="extrato" element={<Statement />} />
      </Routes>
    </>
  );
};

export default StudentPage;