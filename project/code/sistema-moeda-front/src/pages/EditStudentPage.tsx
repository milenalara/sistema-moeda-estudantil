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

interface ICourse {
  id: number;
  name: string;
}

const EditStudentPage = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<IStudent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
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

    fetchStudent();
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
      try {
        await axios.put(`http://localhost:8080/api/student/${id}`, student, {
          headers: {
            "Content-Type": "application/json",
          },
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
          value={student?.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="password"
          label="Password"
          value={student?.password || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="email"
          label="E-mail"
          value={student?.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="CPF"
          label="CPF"
          value={student?.CPF || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="RG"
          label="RG"
          value={student?.RG || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="balance"
          label="Balance"
          value={student?.balance || 0}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="educationalInstitutionId"
          label="Instituição de Ensino"
          value={student?.educationalInstitution.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          required
          id="courseId"
          label="Curso"
          value={student?.course.id || ""}
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
