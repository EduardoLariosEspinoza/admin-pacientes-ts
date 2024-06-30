import { generarId } from "./funciones.js"
import type { Cita } from "./types.js"

let editando = {
    value: false
}

// Objeto de Cita
const citaObj: Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}