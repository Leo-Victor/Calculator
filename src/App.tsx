import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Calculator from './pages/Calculator.tsx';


// HashRouter: dùng cho GitHub Pages vì không cần server config
// Mỗi Route tương ứng 1 trang trong app
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/calculator" replace />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      {/* Các trang khác */}
    </HashRouter>
  );
}

export default App;
