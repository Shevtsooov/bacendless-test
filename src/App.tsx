import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';

const LazyDummyTable = lazy(() => import('./components/DummyTable/DummyTable'));
const LazyDummyChart = lazy(() => import('./components/DummyChart/DummyChart'));
const LazyDummyList = lazy(() => import('./components/DummyList/DummyList'));
const LazyPageNotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route 
          path="tabs/dummyTable.js"
          element={
            <Suspense>
              <LazyDummyTable />
            </Suspense>
          }
        />

        <Route
          path="tabs/dummyChart.js"
          element={
            <Suspense>
              <LazyDummyChart />
            </Suspense>
          }
        />

        <Route
          path="tabs/dummyList.js"
          element={
            <Suspense>
              <LazyDummyList />
            </Suspense>
          }
        />

        <Route
          path="/"
          element={
            <Navigate to="tabs/dummyList.js" />
          } 
        />

        <Route
          path="*"
          element={
            <Suspense>
              <LazyPageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

