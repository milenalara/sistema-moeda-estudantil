import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import axios, { AxiosError } from "axios";
import IStudent from "../data/model/IStudent";
import { UserContext } from "./UserContext";

interface StudentContextProps {
  student: IStudent | null;
  refreshStudent: () => void;
}

const StudentContext = createContext<StudentContextProps | undefined>(undefined);

interface StudentProviderProps {
  children: ReactNode;
}

export const StudentProvider: React.FC<StudentProviderProps> = ({ children }) => {
  const [student, setStudent] = useState<IStudent | null>(null);
  const userContext = useContext(UserContext);

  const fetchStudent = async () => {
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

  useEffect(() => {
    if (userContext?.userId) {
      fetchStudent();
    }
  }, [userContext?.userId]);

  return (
    <StudentContext.Provider value={{ student, refreshStudent: fetchStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
};