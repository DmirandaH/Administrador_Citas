import Notificacion from "./classes/notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { citaObj, editando } from "./variables.js";
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, telInput, fechaInput, sintomasInput } from "./selectores.js";


const citas = new AdminCitas()

export function datosCita (event) {
   citaObj[event.target.name] = event.target.value;
 

};

export function submitCita(event) {
   event.preventDefault();



  

// Validar los campos del formulario
 
/*const { paciente, propietario, email, fecha, sintomas } = citaObj

   if (paciente.trim() === '' || propietario.trim() === '' || email.trim() === '' || fecha.trim() === '' || sintomas.trim() === '') {
      console.log("Todos los campos son obligatorios")
      return
   }
*/

// Validar los campos del formulario optimizando el código anterior  (Object.values)
// .some

if(Object.values(citaObj).some(valor => valor.trim() === '')) {
   new Notificacion({
      texto: 'Todos los campos son obligatorios',
      tipo: 'error'
   })
 
   return

   }

   if (editando.value) {
      citas.editar({...citaObj})
      new Notificacion({
       texto: 'Guardado Correctamente',
       tipo: 'exito'
   })
   } else {
       citas.agregar({...citaObj})
       new Notificacion({
       texto: 'Paciente registrado',
       tipo: 'exito'
   })

   }

   formulario.reset()
   reiniciarObjetoCita()
   formularioInput.value = 'Registrar Paciente'
   editando.value = false

   

}

export function reiniciarObjetoCita() {

   //Reiniciar el objeto 
   //citaObj.id = generarId(),
   //citaObj.paciente = '';
  // citaObj.propietario = '';
   //citaObj.email = '';
  // citaObj.fecha = '';
  // citaObj.sintomas = '';

  Object.assign(citaObj, {
   id: generarId(),
   paciente: '',
   propietario: '',
   email: '',
   telefono: '',
   fecha: '',
   sintomas: ''

  })

}


  // Genera un ID unico sin la necesidad de instalar librerias de npm

export function generarId() {
   return Math.random().toString(36).substring(2) + Date.now();


  }


export function cargarEdicion (cita) {
   Object.assign(citaObj, cita)

   pacienteInput.value = cita.paciente
   propietarioInput.value = cita.propietario
   emailInput.value = cita.email
   telInput.value = cita.telefono
   fechaInput.value = cita.fecha
   sintomasInput.value = cita.sintomas

   editando.value = true

   formularioInput.value = 'Guardar Cambios'

   

}