
import { generarId } from "./funciones.js";

let editando =  { 
    value:   false

}
  

// Objeto de Cita 

const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    telefono: '',
    fecha: '',
    sintomas: ''
}


export {
    editando,
    citaObj
}



