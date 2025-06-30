import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../hooks/useGlobalContext';

const ProtectedLayout = () => {
  const {result} = useGlobalContext();

  return result ? <Outlet/> : <Navigate to={'/questionnaire'}/>
}

export default ProtectedLayout
