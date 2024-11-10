import { useEffect, useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import Button from "@mui/material/Button";
import IAdvantage from "../../data/model/IAdvantage";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { UserContext } from "../../context/UserContext";
import ITransaction from "../../data/model/ITransaction";
import { useStudent } from "../../context/StudentContext";



const Statement = () => {
  return (
    <></>
  );
}

export default Statement;