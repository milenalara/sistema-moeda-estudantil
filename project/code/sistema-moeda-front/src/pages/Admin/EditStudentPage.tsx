import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

interface IStudent {
  id: number;
  name: string;
  password: string;
  email: string;
  CPF: string;
  RG: string;
  balance: number;
  educationalInstitution: IEducationalInstitution;
  course: ICourse;
}

interface IEducationalInstitution {
  id: number;
  name: string;
}

interface IUpdatedStudent {
  name: string;
  password: string;
  email: string;
  CPF: string;
  RG: string;
  balance: number;
  educationalInstitutionId: number;
  courseId: number;
}

interface ICourse {
  id: number;
  name: string;
}

const EditStudentPage = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<IStudent | null>(null);
  const [updatedStudent, setUpdatedStudent]= useState<IUpdatedStudent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get<IStudent>(
          `http://localhost:8080/api/student/${id}`
        );
        setStudent(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (student) {
      setStudent({
        ...student,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSave = async () => {
    if (student) {
      const updatedStudent = {
        name: student.name,
        password: student.password,
        email: student.email,
        CPF: student.CPF,
        RG: student.RG,
        balance: student.balance,
        educationalInstitutionId: student.educationalInstitution.id,
        courseId: student.course.id
      }

      try {
        await axios.put(`http://localhost:8080/api/student/${id}`, updatedStudent, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        alert("Dados do(a) aluno(a) atualizados com sucesso");
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "80%" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="name"
          label="Nome"
          defaultValue={student?.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="password"
          type="password"
          label="Senha"
          defaultValue={student?.password || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="email"
          label="E-mail"
          defaultValue={student?.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="cpf"
          label="CPF"
          defaultValue={student?.CPF || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="rg"
          label="RG"
          defaultValue={student?.RG || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="balance"
          label="balance"
          defaultValue={student?.balance || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="educational-institution"
          label="Instituição de Ensino"
          defaultValue={student?.educationalInstitution.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="course"
          label="Curso"
          defaultValue={student?.course.name || ""}
          onChange={handleChange}
        />
      </div>
      <Button variant="contained" onClick={handleSave}>
        Salvar
      </Button>
    </Box>
  );
};

export default EditStudentPage;
