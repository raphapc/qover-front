import axios from 'axios';
import { SERVER_BASE_URL } from '../constants';
import { ICarMakers } from '../pages/InsuranceQuote/InsuranceQuote';
import { LoginAttempt } from '../pages/Login/types';
import { GetPlan, PlanResponse } from '../pages/Plans/Plans';

const _apiUrl = SERVER_BASE_URL;

export const repositoryLogin = async (loginData: LoginAttempt) => {
  return await axios.post(_apiUrl + '/auth/login', loginData);
};

export const repositoryGetPlans = async (getPlan: GetPlan) => {
  return await axios.post<PlanResponse[]>(_apiUrl + '/insurance/plans', { params: getPlan });
};
export const repositoryGetMakers = async () => {
  return await axios.get<ICarMakers[]>(_apiUrl + '/cars');
};
