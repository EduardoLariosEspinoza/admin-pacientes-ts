// [key: string]: string; is a type that allows to have any key with a string value
export interface Cita {
  [key: string]: string;
  id: string;
  paciente: string;
  propietario: string;
  email: string;
  fecha: string;
  sintomas: string;
}