import React, {Fragment, useState} from 'react';
import Alerta from './Alerta';
import shortid from 'shortid'


const Formulario = ({guardarGastos,almacenarGastos, guardarGasto}) => {

    const [nombregasto, guardarNombreGasto] = useState('')
    const [preciogasto, guardarPrecioGasto] = useState(0)
    const [alerta, guardarAlerta] = useState(false)


    const agregarGasto = e => {
        e.preventDefault();

        if(nombregasto === '' || preciogasto <= 0 || isNaN(preciogasto)){
            guardarAlerta(true)
            return;
        }

        const gasto = {
            nombregasto,
            preciogasto,
            id: shortid.generate()
        }

        guardarAlerta(false)
        guardarGastos(gasto)
        almacenarGastos(gasto)
        guardarGasto(gasto)

    
        guardarNombreGasto('')
        guardarPrecioGasto(0)
    }



    return ( 
        <Fragment>
            <h2>Agregar Gastos</h2>
        
            {alerta ? <Alerta alerta={alerta} mensaje='Todos los campos son obligatorios o cantidad incorrecta'/> : null}

            <form
                onSubmit={agregarGasto}
            >
                <div>
                    <label>Nombre del Gasto</label>
                    <input 
                        type="text"
                        placeholder="Ej. Comida"
                        className="w-100 mb-4"
                        onChange={e => guardarNombreGasto(e.target.value)}
                        value={nombregasto}
                    />
                </div>

                <div>
                    <label>Precio del Gasto</label>
                    <input 
                        type="number"
                        placeholder="0"
                        className="w-100"
                        onChange={e => guardarPrecioGasto(parseInt(e.target.value, 10))}
                        value={preciogasto}
                    />
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary w-100 mt-3"
                >Agregar Gasto</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;