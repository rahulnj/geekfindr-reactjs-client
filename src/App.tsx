import React, { useEffect, useState } from 'react';
import './_app.scss';

import { AuthScreen, HomeScreen, ProfileScreen } from './pages'
import { Header, Sidebar } from './components';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { Children } from './models/Model';
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
  let { data, loading } = useTypedSelector(
    (state) => state.UserSignin
  )

  let { user: signUpData, loading: signUpLoading } = useTypedSelector(
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
        <Route path='/profile' element={
          <Layout>
            <ProfileScreen />
          </Layout>
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
