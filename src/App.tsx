import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { AuthState } from './models';

import { Layout, Spinner } from './components';

import { useTypedSelector } from './hooks/useTypedSelector';

const HomeScreen = lazy(() => import('./screens/HomeScreen/HomeScreen'))
const AuthScreen = lazy(() => import('./screens/AuthScreen/AuthScreen'))
const ChatScreen = lazy(() => import('./screens/ChatScreen/ChatScreen'))
const EditDetailsScreen = lazy(() => import('./screens/EditDetailsScreen/EditDetailsScreen'))
const ProfileScreen = lazy(() => import('./screens/ProfileScreen/ProfileScreen'))
const ProjectScreen = lazy(() => import('./screens/ProjectScreen/ProjectScreen'))
const PageNotFound = lazy(() => import('./screens/PageNotFoundScreen/PageNotFound'))

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
      <Suspense fallback={<Spinner loader={true} />}>
        <Routes>
          <Route path='/' element={
            <Layout>
              <HomeScreen />
            </Layout>
          } />
          <Route path='/auth' element={
            <AuthScreen />
          } />
          <Route path='/profile/:id' element={
            <Layout>
              <ProfileScreen />
            </Layout>
          } />
          <Route path='/userprofile/:userId' element={
            <Layout>
              <ProfileScreen userProfile />
            </Layout>
          } />
          <Route path='/editprofile/:id' element={
            <EditDetailsScreen />
          } />
          <Route path='/editpost/:postId' element={
            <Layout>
              <ProfileScreen />
            </Layout>
          } />
          <Route path='/project/:projectId' element={
            <Layout project>
              <ProjectScreen />
            </Layout>
          } />
          <Route path='/chat' element={
            <Layout project>
              <ChatScreen />
            </Layout>
          } />
          <Route path='*' element={
            <PageNotFound />
          } />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
