import { Route, Routes } from 'react-router-dom';
import AdicionarRestaurante from './pages/Administracao/Restaurantes/AdicionarRestaurante';
import AdministrarRestaurante from './pages/Administracao/Restaurantes/AdministrarRestaurante';
import Home from './pages/Home';
import VitrineRestaurantes from './pages/VitrineRestaurantes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministrarRestaurante />} />
      <Route path="/admin/restaurantes/novo" element={<AdicionarRestaurante />} />
      <Route path="/admin/restaurantes/:id" element={<AdicionarRestaurante />} />
    </Routes>
  );
}
