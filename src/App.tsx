import { Route, Routes } from 'react-router-dom';
import AdicionarRestaurante from './pages/Administracao/Restaurantes/AdicionarRestaurante';
import AdministrarRestaurante from './pages/Administracao/Restaurantes/AdministrarRestaurante';
import PaginaBaseAdmin from './pages/Administracao/PaginaBaseAdmin';
import Home from './pages/Home';
import VitrineRestaurantes from './pages/VitrineRestaurantes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin" element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<AdministrarRestaurante />} />
        <Route path="restaurantes/novo" element={<AdicionarRestaurante />} />
        <Route path="restaurantes/:id" element={<AdicionarRestaurante />} />
      </Route>
    </Routes>
  );
}
