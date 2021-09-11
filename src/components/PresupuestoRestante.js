import React, {Fragment} from 'react';
import {calcularRestante} from '../helper'


const PresupuestoRestante = ({presupuesto, restante}) => {

    return ( 
        <Fragment>
            <p className="presupuesto">Presupuesto: $ {presupuesto}</p>
            <p className={calcularRestante(presupuesto, restante)}>Restante: $ {restante}</p>
        </Fragment>
     );
}
 
export default PresupuestoRestante;