import './App.css';
import Home from './components/pages/Home';
import Users from './components/Users';
import NestedRoute from './components/pages/NestedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Product from './components/Product';
import NotFound from './components/pages/NotFound';
import TryAgain from './components/TryAgain';

function App() {
  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role='alert'>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='App'>
        <Router>
          <Home />

          <Routes>
            <Route path='error' element={<TryAgain />} />
            <Route path='/notFound' element={<NotFound />} />
            <Route path='/users' element={<Users />} />
            <Route path='product' element={<Product />}>
              <Route path='nestedRoute' element={<NestedRoute />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
