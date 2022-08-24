import { estado } from "./estado";

export class contacto {

    Nombre = '';
    Apellido = '';
    Email = '';
    Conectado = estado.conectado;

    constructor (Nombre, Apellido, Email, Conectado){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Conectado = Conectado
    }
}