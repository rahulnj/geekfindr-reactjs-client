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
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <Layout>
              <HomeScreen />
            </Layout>
          </Suspense>

        } />
        <Route path='/auth' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <AuthScreen />
          </Suspense>
        } />
        <Route path='/profile/:id' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <Layout>
              <ProfileScreen />
            </Layout>
          </Suspense>
        } />
        <Route path='/userprofile/:userId' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <Layout>
              <ProfileScreen userProfile />
            </Layout>
          </Suspense>
        } />
        <Route path='/editprofile/:id' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <EditDetailsScreen />
          </Suspense>
        } />
        <Route path='/editpost/:postId' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <Layout>
              <ProfileScreen />
            </Layout>
          </Suspense>
        } />
        <Route path='/project/:projectId' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <Layout project>
              <ProjectScreen />
            </Layout>
          </Suspense>
        } />
        <Route path='/chat' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <Layout project>
              <ChatScreen />
            </Layout>
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={<Spinner loader={true} />}>
            <PageNotFound />
          </Suspense>
        } />
      </Routes>
    </>
  );
}

export default App;
