import React, { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import StudentAppBar from "./StudentAppBar";
import IStudent from "../../data/model/IStudent";
import { UserContext } from "../../context/UserContext";

const StudentPage = () => {
  const [student, setStudent] = useState<IStudent | null>(null);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get<IStudent>(
          `http://localhost:8080/api/student/${userContext?.userId}`
        );
        setStudent(response.data);
      } catch (err: any) {
        const error = err as AxiosError;
        console.error(`Error: ${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`);
      }
    };

    fetchStudents();
  }, [userContext?.userId]);

  return (
    <>
      <StudentAppBar />
      Você tem pontos {student?.balance} para trocar
    </>
  );
};

export default StudentPage;
