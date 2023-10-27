import './App.css';

import Formulario from './components/Formulario/Formulario';
import { CadastroProvider } from './context/cadastroInfo';

function App() {
  return (
    <CadastroProvider>
      <Formulario />
    </CadastroProvider>
  );
}

export default App;
