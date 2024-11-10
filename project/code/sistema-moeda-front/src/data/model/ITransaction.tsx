interface ITransaction {
  id: number;
  studentId: number;
  advantageId: number;
  cost: number;
  studentBalance: number;
  dateTime: string;
}

export default ITransaction;
