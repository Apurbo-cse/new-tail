import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { Master } from './components/layouts/Master';
import NotFound from './views/NotFound';

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
