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
import AccionAsignarIdiomaContext from './contexts/accionAsignarIdiomaContext';

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

      <AccionAsignarIdiomaContext.Provider value={asignarIdiomaSeleccionado}>
        <Cabecera></Cabecera>
      </AccionAsignarIdiomaContext.Provider>

      <Routes>
        <Route path="/" element={<Home idioma={idioma}></Home>}></Route>
        <Route path="/empresa" element={<Empresa titulo={idioma.secciones.emp}></Empresa>}> </Route>
        <Route path="/centroeducativo"  element={<CentroEducativo titulo={idioma.secciones.esc}></CentroEducativo>}></Route>
        <Route path="/alumno"  element={<Alumno titulo={idioma.secciones.alu}></Alumno>}> </Route>
      </Routes>

    </div>
  )
}

export default App
