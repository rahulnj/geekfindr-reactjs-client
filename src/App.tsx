import React, { useState } from 'react';
import './_app.scss';

import { AuthScreen, HomeScreen, ProfileScreen } from './pages'
import { Header, Sidebar } from './components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Children } from './models/Model';




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
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
