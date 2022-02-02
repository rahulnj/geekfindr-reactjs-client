import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { AuthState } from './models';

import { Layout } from './components';
import { AuthScreen, EditDetailsScreen, HomeScreen, PageNotFound, ProfileScreen } from './screens'

import { useTypedSelector } from './hooks/useTypedSelector';


const App: React.FC = () => {

  const navigate = useNavigate()
  let { data, loading }: AuthState = useTypedSelector(
    (state) => state.UserSignin
  )

  let { user: signUpData, loading: signUpLoading }: AuthState = useTypedSelector(
    (state) => state.UserSignup
  )

  if (!data) {
    data = signUpData;
    loading = signUpLoading;
  }

  useEffect(() => {
    if (!loading && !data) {
      navigate('/auth')
    }
  }, [data, loading, navigate])


  return (
    <>
      <Routes>
        <Route path='/' element={
          <Layout>
            <HomeScreen />
          </Layout>
        }>
        </Route>
        <Route path='/auth' element={
          <AuthScreen />
        }>
        </Route>
        <Route path='/profile/:id' element={
          <Layout>
            <ProfileScreen />
          </Layout>
        }>
        </Route>
        <Route path='/editprofile/:id' element={
          <EditDetailsScreen />
        }>
        </Route>
        <Route path='*' element={
          <PageNotFound />
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
