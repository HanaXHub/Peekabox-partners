import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AccountForm from '../Sections/SignupForm/Account/AccountForm';
import BrandForm from '../Sections/SignupForm/Brand/BrandForm';
import BranchForm from '../Sections/SignupForm/Branch/BranchForm';
import SurpriseBagForm from '../Sections/SignupForm/SurpriseBag/SurpriseBagForm';
import AccountPage from './AccountPage';
import BrandCreated from './BrandCreated';
import VerifyEmail from '../Sections/SignupForm/Account/VerifyEmail';
import Password from '../Sections/SignupForm/Account/Password';

import SurpriseBagCreated from '../pages/SurpriseBagCreated';
import Login from '../Sections/Login/Login'

const SignupForm: React.FC = () => {
  const [accountData, setAccountData] = useState<any>(null);
  const [brandData, setBrandData] = useState<any>(null);
  const [branchData, setBranchData] = useState<any>(null);
  const [totalStores, setTotalStores] = useState<number | null>(null);
  const [password, setPassword] = useState<string>('');

  const handleAccountNext = (data: any) => {
    setAccountData(data);
  };

  const handleBrandNext = (data: any) => {
    setBrandData(data);
    setTotalStores(data.totalStores);
  };

  const handleBranchNext = (data: any) => {
    setBranchData(data);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword); 
  };

  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<AccountForm onNext={handleAccountNext} />} />
          <Route path="/brand" element={<BrandForm onNext={handleBrandNext} />} />
          <Route
            path="/branches"
            element={totalStores !== null ? <BranchForm totalStores={totalStores} onNext={handleBranchNext} /> : <Navigate to="/brand" />}
          />
          
          <Route path="/account" element={<AccountPage />} />
          <Route path="/Verify-Email" element={<VerifyEmail/>} />
          <Route path="/Password" element={<Password password={password} onChange={handlePasswordChange} />} />
          

          
          <Route path="/brand-created" element={<BrandCreated />} />
          
          <Route path="/Store_SurpriseBag" element={<SurpriseBagCreated />} />
          <Route path="/login" element={<Login/>} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default SignupForm;
