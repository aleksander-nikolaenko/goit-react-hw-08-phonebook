import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routesPaths } from 'routerSettings/routesPaths';
import { ProtectedRoute } from 'utils/ProtectedRoute';

// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from './ResponsiveAppBar';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);

const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);

export const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={routesPaths.homePage}
          element={
            <Suspense fallback={<div>Loading...</div>}>
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
              <Suspense fallback={<div>Loading...</div>}>
                <ContactsPage />
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
