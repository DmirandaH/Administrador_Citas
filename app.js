// Selectores

const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

const contenedorCitas = document.querySelector('#citas');


// Eventos

pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);



// Objeto de Cita 

const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
};

// Clase


class Notificacion {

   constructor ({texto, tipo}) {
      this.texto = texto
      this.tipo = tipo

      this.mostrar()

   }

   //Método

   mostrar() {
      //Crear la notificación
      const alerta = document.createElement('DIV');
      alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm')


      //Eliminar alertas duplicadas

      /*const alertaPrevia = document.querySelector('.alert') 
      if(alertaPrevia) {
         alertaPrevia.remove();
      }*/

      //Encadenamiento opcional para eliminar las alertas duplicadas

      const alertaPrevia = document.querySelector('.alert') 
      alertaPrevia?.remove();
      




      //Si es de tipo error, agrega una clase, usamos el operador ternario '?'
      this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');


      // Mensaje de error
      alerta.textContent = this.texto

      // Insertar en el DOM
      formulario.parentElement.insertBefore(alerta, formulario);


      // Quitar la alerta despúes de 3 segundos.

      setTimeout(() => {
         alerta.remove()
         
      }, 3000);


   }

}


class AdminCitas {
   constructor () {
      this.citas = []     
   }

   // Método
   agregar(cita) {
      this.citas = [...this.citas, cita]
      this.mostrar()
      
   }

   mostrar() {
      //Limpiar HTML

      while(contenedorCitas.firstChild) {
         contenedorCitas.removeChild(contenedorCitas.firstChild);
      }

      // Generando las citas 
      this.citas.forEach( cita => {
         const divCita = document.createElement('DIV');
         divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl');

         const paciente = document.createElement('p')
         paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
         paciente.innerHTML = `<span class="font-bold uppercase"> Paciente: </span> ${cita.paciente}`


         const propietario = document.createElement('p');
         propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
         propietario.innerHTML = `<span class="font-bold uppercase"> Propietario: </span> ${cita.propietario}`

         const email = document.createElement('p');
         email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
         email.innerHTML = `<span class="font-bold uppercase"> Email: </span> ${cita.email}`


         //Inyectar al HTML
         divCita.appendChild(paciente);
         divCita.appendChild(propietario);
         divCita.appendChild(email);

         contenedorCitas.appendChild(divCita);

      })
   }
}



// Funtion 

function datosCita (event) {
   citaObj[event.target.name] = event.target.value;
 

};

const citas = new AdminCitas()
function submitCita(event) {
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

   citas.agregar(citaObj)

};




