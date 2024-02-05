import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

/**    COMPONENTES    */
import Cabecera from './components/cabecera/cabecera';
import Home from './paginas/home/home';
import Alumno from './paginas/alumno/alumno';
import CentroEducativo from './paginas/centroEducativo/centroEducativo';
import Empresa from './paginas/empresa/empresa';
import BusquedaProyectos from './paginas/busquedaProyectos/busquedaProyectos';

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

            <Route path="/empresas" element={<Empresa/>}></Route>
            <Route path="/empresas/proyectos" element={<BusquedaProyectos/>}></Route>
            <Route path="/empresas/alumnos" element={<Empresa/>}></Route>

            <Route path="/centroeducativos"  element={<CentroEducativo/>}></Route>
            <Route path="/alumnos"  element={<Alumno/>}></Route>
          </Routes>
      </IdiomaSeleccionadoContext.Provider>
    </div>
  )
}

export default App
