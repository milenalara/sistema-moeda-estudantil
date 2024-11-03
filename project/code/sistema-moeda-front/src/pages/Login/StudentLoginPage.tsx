import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/student/login",
        {
          email,
          password,
        }
      );
      navigate("/aluno");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError;
        alert(
          `${error.response?.data}\nStatus: ${error.response?.status} - ${error.code}`
        );
      } else {
        console.log(err);
        alert("Falha ao executar o login: " + (err as Error).message);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 250,
          height: 400,
        },
      }}
    >
      <Paper elevation={3}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            <Stack spacing={1} sx={{ width: "100%" }}>
              <TextField
                required
                id="email"
                name="email"
                type="email"
                label="E-mail"
                placeholder="email@example.com"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                fullWidth
              />
              <TextField
                required
                id="password"
                name="password"
                type="password"
                label="Senha"
                variant="standard"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
              />
              <Button id="login" variant="contained" type="submit" fullWidth>
                Login
              </Button>
              <Button id="signup" variant="text" fullWidth>
                Cadastro
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default StudentLogin;
