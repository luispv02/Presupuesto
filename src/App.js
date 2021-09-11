/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment,useState, useEffect } from 'react';
import PreguntaPresupuesto from './components/PreguntaPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import PresupuestoRestante from './components/PresupuestoRestante';

function App() {

  const [presupuesto,guardarPresupuesto] = useState('')
  const [restante,guardarRestante] = useState('')
  const [mostrarpregunta, GuardarMostrarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto ] = useState({})

  const almacenarGastos = gasto => {
    guardarGastos([...gastos, gasto])
  }

  useEffect(() => {
    guardarRestante(restante - gasto.preciogasto)
  },[gasto])

  return (
    <Fragment>
      <h1>Gasto Semanal</h1>

      <div className="contenedor">

          {mostrarpregunta 
          ? 
            <PreguntaPresupuesto 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            GuardarMostrarPregunta={GuardarMostrarPregunta}
            /> 
          :
            <div className="container">
              <div className="row">
                <div className="col">
                    <Formulario 
                      guardarGastos={guardarGastos}
                      almacenarGastos={almacenarGastos}
                      guardarGasto={guardarGasto}
                    />
                </div>

                <div className="col">

                    <h2>Lista de Gastos</h2>
                    {gastos.map(gastoIndividual => (
                      <Listado
                        key={gastoIndividual.id}
                        gastoIndividual={gastoIndividual}
                      />
                    ))}
                    
                    <PresupuestoRestante 
                      presupuesto={presupuesto}
                      restante={restante}
                      gasto={gasto}
                    />
                </div>
              </div>
            </div>
          }
      </div>
    </Fragment>
  );
}

export default App;
