import React, { useState } from 'react';
import './_app.scss';

import { HomeScreen } from './pages'
import { Header, Sidebar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

interface Props {
  children: JSX.Element[] | JSX.Element

}



const Layout = ({ children }: Props) => {

  const [sidebar, setSidebar] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
  }
  return (
    <>
      <Header />
      <div className='app_container'>
        <Sidebar />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
