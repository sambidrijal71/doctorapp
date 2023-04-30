import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './Pages/auth/Register/RegisterPage';
import LoginPage from './Pages/auth/Login/LoginPage';
import HomePage from './Pages/HomePage';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Doctors from './Pages/Admin/Doctors';
import Users from './Pages/Admin/Users';
import ApplyDoctor from './Pages/User/ApplyDoctor';
import Appointments from './Pages/User/Appointments';
import ProfilePage from './Pages/ProfilePage';
import NotificationPage from './Pages/NotificationPage';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/doctors'
            element={
              <ProtectedRoute>
                <Doctors />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/users'
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path='/apply-doctor'
            element={
              <ProtectedRoute>
                <ApplyDoctor />
              </ProtectedRoute>
            }
          />
          <Route
            path='/appointments'
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path='/notification'
            element={
              <ProtectedRoute>
                <NotificationPage />
              </ProtectedRoute>
            }
          />

          <Route
            path='/register'
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
