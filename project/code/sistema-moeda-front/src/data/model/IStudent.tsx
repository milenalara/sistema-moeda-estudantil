import ICourse from "./ICourse";
import IEducationalInstitution from "./IEducationalInstitution";

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

export default IStudent;
