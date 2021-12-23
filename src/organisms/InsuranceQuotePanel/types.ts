import { IOption } from "../../atoms/Select/types";
import { GetPlan } from '../../pages/Plans/Plans';

export interface IError {
  key?: string;
  message?: string;
}

export interface ISurveyPanel {
  makers: IOption[];
  errors?: IError[];
  onSubmit: (dto: GetPlan) => void;
}
