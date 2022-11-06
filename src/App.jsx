import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import { Home, NewRepo, ErrorFallback, ErrorPage } from './component';
import {ErrorBoundary} from 'react-error-boundary';

const Repo = lazy(() => import('./component/Repo'));

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<h1>Still Loading Profile Image...</h1>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="repo">
              <Route index element={<Repo />}/>
              <Route path=":id" element={<NewRepo />}/>
            </Route>
            <Route path='error' element={<ErrorFallback/>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;
