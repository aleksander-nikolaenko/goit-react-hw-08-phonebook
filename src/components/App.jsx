import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routesPaths } from 'routerSettings/routesPaths';
import { ProtectedRoute } from 'utils/ProtectedRoute';
import ResponsiveAppBar from './ResponsiveAppBar';
import LoaderPage from './LoaderPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);

const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "register-page" */)
);

const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "login-page" */)
);

export const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<LoaderPage />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routesPaths.homePage}
          element={
            <Suspense fallback={<LoaderPage />}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path={routesPaths.contactsPage}
          element={
            <ProtectedRoute
              redirectPath={routesPaths.homePage}
              isAllowed={true}
            >
              <Suspense fallback={<LoaderPage />}>
                <ContactsPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path={routesPaths.registerPage}
          element={
            <ProtectedRoute
              redirectPath={routesPaths.homePage}
              isAllowed={true}
            >
              <Suspense fallback={<LoaderPage />}>
                <RegisterPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path={routesPaths.loginPage}
          element={
            <ProtectedRoute
              redirectPath={routesPaths.homePage}
              isAllowed={true}
            >
              <Suspense fallback={<LoaderPage />}>
                <LoginPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={routesPaths.homePage} />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

// import { Container } from './Container';
// import { ContactForm } from './ContactForm';
// import { ContactsList } from './ContactsList';
// import { Filter } from './Filter';

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactsList />
//
//     </Container>
//   );
// };
