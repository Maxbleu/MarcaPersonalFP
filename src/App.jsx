import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

/**    COMPONENTES    */
import Cabecera from './components/cabecera/cabecera';
import Home from './paginas/home/home';
import Alumno from './paginas/alumno/alumno';
import CentroEducativo from './paginas/centroEducativo/centroEducativo';
import Empresa from './paginas/empresa/empresa';

/**    MOOCKS    */
import spanish from './mocks/idiomas/mock-spanish';
import english from './mocks/idiomas/mock-english';

/**    CONTEXTS    */
import IdiomaSeleccionadoContext from './contexts/idiomaSeleccionadoContext';

function App() {

  //  Este hoock se encargará de almacenar
  //  el idioma que ha seleccionado el usuario.
  //  Aunque inicialmente el idioma de la página será
  //  el español
  const [idioma, setIdioma] = useState(spanish);

  /**
   * Este método se encargará de insertar
   * el idioma que ha seleccionado el usuario
   * @param idioma 
   */
  function asignarIdiomaSeleccionado(idioma){
    setIdioma(idioma === "es" ? spanish : english);
  }

  return (
    <div className='container-fluid'>
      <Cabecera asignarIdiomaSeleccionado={asignarIdiomaSeleccionado}></Cabecera>
      <IdiomaSeleccionadoContext.Provider value={idioma}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/empresa" element={<Empresa/>}></Route>
            <Route path="/centroeducativo"  element={<CentroEducativo/>}></Route>
            <Route path="/alumno"  element={<Alumno/>}></Route>
          </Routes>
      </IdiomaSeleccionadoContext.Provider>
    </div>
  )
}

export default App
