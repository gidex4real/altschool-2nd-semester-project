import { Route, Routes } from "react-router-dom";
import './App.css'
import { Home, Repo, NewRepo, ErrorFallback, ErrorPage } from './component';
import {ErrorBoundary} from 'react-error-boundary';

function App() {

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="repo">
            <Route index element={<Repo />}/>
            <Route path=":id" element={<NewRepo />}/>
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
