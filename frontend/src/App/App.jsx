import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from '../store/storeContext';


import HomePage from "../pages/HomePage/HomePage"



export const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
};