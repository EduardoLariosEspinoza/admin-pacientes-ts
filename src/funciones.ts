import Notificacion from './classes/Notificacion.js';
import AdminCitas from './classes/AdminCitas.js';
import { citaObj, editando } from './variables.js'
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput } from './selectores.js'
import type { Cita } from './types.js';

const citas = new AdminCitas()

export function datosCita(e: Event) {
    const target = e.target as HTMLInputElement
    citaObj[target.name] = target.value
}

export function submitCita(e: Event) {
    e.preventDefault();
    
    if( Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return
    }

    if(editando.value) {
        citas.editar({...citaObj})
        new Notificacion({
            texto: 'Guardado Correctamente',
            tipo: 'exito'
        })
    } else {
        citas.agregar({...citaObj})
        new Notificacion({
            texto: 'Paciente Registrado',
            tipo: 'exito'
        })
    }    
    formulario?.reset()
    reiniciarObjetoCita()
    formularioInput ? formularioInput.value = 'Registrar Paciente' : null;
    editando.value = false
}


export function reiniciarObjetoCita() {
    // Reiniciar el objeto
    // citaObj.id = generarId()
    // citaObj.paciente = '';
    // citaObj.propietario = '';
    // citaObj.email = '';
    // citaObj.fecha = '';
    // citaObj.sintomas = '';

    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now()
}

export function cargarEdicion(cita: Cita) {
    Object.assign(citaObj, cita)
    editando.value = true

    pacienteInput ? pacienteInput.value = cita.paciente : null;
    propietarioInput ? propietarioInput.value = cita.propietario : null;
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas
    formularioInput.value = 'Guardar Cambios'
}