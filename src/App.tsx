import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './_app.scss';

import { AuthState, Children } from './models';

import { AuthScreen, EditDetailsScreen, HomeScreen, PageNotFound, ProfileScreen } from './screens'
import { Header, Sidebar } from './components';

import { useTypedSelector } from './hooks/useTypedSelector';




const Layout = ({ children }: Children) => {
  const [sidebar, setSidebar] = useState<boolean>(false)
  const handleToggleSidebar = () => {
    setSidebar(value => !value)
  }
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app_container'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        {children}
      </div>
    </>
  )
}



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
