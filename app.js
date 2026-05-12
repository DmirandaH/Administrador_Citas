// Selectores

const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelectorAll('#sintomas');


// Objeto de Cita 

const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

// Eventos

pacienteInput.addEventListener('change', (event) => {
   citaObj[event.target.name] = event.target.value

   console.log(citaObj);
});

propietarioInput.addEventListener('change', (event) => {
   citaObj[event.target.name] = event.target.value

   console.log(citaObj);
});
