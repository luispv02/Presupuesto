import React, {Fragment,useState} from 'react';
import Alerta from './Alerta';


const PreguntaPresupuesto = ({guardarPresupuesto,guardarRestante,GuardarMostrarPregunta}) => {

    const [presupuesto, actualizarPresupuesto] = useState('')
    const [alerta, guardarAlerta] = useState(false)

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar el input
        if(presupuesto === '' || isNaN(presupuesto)){
            guardarAlerta(true)
            return;
        }
        guardarAlerta(false)

        guardarPresupuesto(presupuesto)
        guardarRestante(presupuesto)
        GuardarMostrarPregunta(false)


    }

    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            <Alerta 
                alerta={alerta}
                mensaje='Presupuesto Incorrecto'
            />

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    placeholder="Ingresa tu Presupuesto"
                    className="w-100"
                    onChange={e => actualizarPresupuesto(parseInt(e.target.value))}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100 mt-4"
                >Definir Presupuesto</button>

            </form>
        </Fragment>
     );
}
 
export default PreguntaPresupuesto;