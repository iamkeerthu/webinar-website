import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebinarDetailPage from './pages/WebinarDetailPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webinars/:id" element={<WebinarDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}