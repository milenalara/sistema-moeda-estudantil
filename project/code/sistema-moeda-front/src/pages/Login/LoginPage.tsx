import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../context/UserContext";
import benefits from "../../assets/benefits.png";
import { Beenhere } from "@mui/icons-material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          email,
          password,
        }
      );
      if (userContext) {
        userContext.setUserId(response.data.id);
        userContext.setUserType(response.data.userType);

        if (response.data.userType === "Admin") navigate("/admin");
        if (response.data.userType === "Professor") navigate("/professor");
        if (response.data.userType === "Student") navigate("/aluno");
      }
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 400,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={benefits} style={{ width: "100px", paddingTop: "35px" }} />
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

export default LoginPage;
