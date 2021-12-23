import React, { useState } from 'react';
import Login from './pages/Login';
import Plans, { PlanResponse } from './pages/Plans/Plans';
import InsuranceQuote from './pages/InsuranceQuote';

function App() {
  const [page, setPage] = useState<string>('login');
  const [plans, setPlans] = useState<PlanResponse[]>();
  const handleSuccesfulLogin = () => {
    setPage('insurance-quote');
  };
  const handleInsurance = (plans: PlanResponse[]) => {
    setPlans(plans);
    setPage('plans');
  };
  return (
    <>
      {page === 'login' && <Login onSuccesfulLogin={handleSuccesfulLogin} />}
      {page === 'insurance-quote' && <InsuranceQuote onApprovedQuote={handleInsurance} />}
      {page === 'plans' && <Plans planRes={plans} />}
    </>
  );
}

export default App;
