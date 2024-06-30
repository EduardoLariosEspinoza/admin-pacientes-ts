// Selectores
export const pacienteInput = document.querySelector<HTMLInputElement>('#paciente')
export const propietarioInput = document.querySelector<HTMLInputElement>('#propietario')

//export const emailInput = document.querySelector<HTMLInputElement>('#email')
export const emailInput = document.querySelector('#email') as HTMLInputElement // With this syntax you secure to typescript that the element is an input element and is not going to be null

//export const fechaInput = document.querySelector<HTMLInputElement>('#fecha')
export const fechaInput = document.querySelector('#fecha') as HTMLInputElement

//export const sintomasInput = document.querySelector<HTMLInputElement>('#sintomas')
export const sintomasInput = document.querySelector('#sintomas') as HTMLInputElement

export const formulario = document.querySelector<HTMLFormElement>('#formulario-cita')

//export const formularioInput = document.querySelector<HTMLInputElement>('#formulario-cita input[type="submit"]')
export const formularioInput = document.querySelector('#formulario-cita input[type="submit"]') as HTMLInputElement

export const contenedorCitas = document.querySelector<HTMLDivElement>('#citas')
