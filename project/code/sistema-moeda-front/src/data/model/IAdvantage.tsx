import ICompany from "./ICompany";

interface IAdvantage {
  id: number;
  name: string;
  description: string;
  cost: number;
  company: ICompany;
}

export default IAdvantage;
