import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentAppBar from "./StudentAppBar";
import { useStudent } from "../../context/StudentContext";
import ExchangeAdvantages from "./ExchangeAdvantages";

const StudentPage = () => {
  const { student, refreshStudent } = useStudent();

  return (
    <>
      <StudentAppBar student={student} />
      <Routes>
        <Route path="/" element={<div>Home Content</div>} />
        <Route path="vantagens" element={<ExchangeAdvantages />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
};

export default StudentPage;