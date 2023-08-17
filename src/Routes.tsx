import { Route, Routes } from 'react-router-dom';
import PaginaBaseAdmin from './pages/Administracao/PaginaBaseAdmin';
import AdicionarRestaurante from './pages/Administracao/Restaurantes/AdicionarRestaurante';
import AdministrarRestaurante from './pages/Administracao/Restaurantes/AdministrarRestaurante';
import Home from './pages/Home';
import AdicionarPratos from './pages/Pratos/AdicionarPratos';
import AdministrarPratos from './pages/Pratos/AdministrarPratos';
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

        <Route path="pratos" element={<AdministrarPratos />} />
        <Route path="pratos/novo" element={<AdicionarPratos />} />
        <Route path="pratos/:id" element={<AdicionarPratos />} />
      </Route>
    </Routes>
  );
}
