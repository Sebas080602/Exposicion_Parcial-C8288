/*
Simular un sistema de gestión de usuarios con algunos comportamientos 
adicionales, como enviar correos, 
validar pedidos y canjear puntos de lealtad para usuarios premium. 
*/

// Definimos la clase "Usuario" que contiene información básica de un usuario
class Usuario {
    id: number;  // ID del usuario
    nombre: string;  // Nombre del usuario
    correo: string;  // Correo electrónico del usuario
    rol: string;  // Rol del usuario (admin, premium, etc.)

    // El constructor inicializa las propiedades del usuario
    constructor(id: number, nombre: string, correo: string, rol: string) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
    }

    // Método para mostrar la información del usuario
    obtenerInfoUsuario() {
        console.log(`Usuario: ${this.nombre}, Correo: ${this.correo}, Rol: ${this.rol}`);
    }

    // Problema: Este método se encarga de enviar correos, lo cual no debería ser responsabilidad de la clase Usuario
    enviarCorreo(asunto: string, mensaje: string) {
        console.log(`Enviando correo a ${this.correo} con asunto: ${asunto}`);
    }

    // Problema: Este método valida pedidos, lo cual no es responsabilidad de la clase Usuario
    validarPedido(idPedido: number) {
        if (idPedido < 1000) {
            console.log(`Pedido ${idPedido} es válido.`);
        } else {
            console.log(`Pedido ${idPedido} no es válido.`);
        }
    }

    // Problema: Este método determina si el usuario es administrador, pero está limitado a solo dos roles. 
    // Si se agregan más roles, habría que modificar este método, lo que viola el Principio Abierto/Cerrado (OCP)
    esAdmin() {
        return this.rol === 'admin';
    }
}

// Clase hija "UsuarioPremium" que extiende de la clase Usuario.
// Esta clase representa a un usuario premium, con puntos de lealtad.
class UsuarioPremium extends Usuario {
    puntosLealtad: number;  // Puntos de lealtad del usuario premium

    // Constructor que inicializa un usuario premium
    constructor(id: number, nombre: string, correo: string, rol: string, puntosLealtad: number) {
        super(id, nombre, correo, rol);  // Llamamos al constructor de la clase padre Usuario
        this.puntosLealtad = puntosLealtad;  // Asignamos los puntos de lealtad
    }

    // Sobrescribimos el método obtenerInfoUsuario, pero cambiamos el comportamiento, lo que viola el Principio de Sustitución de Liskov (LSP)
    obtenerInfoUsuario() {
        console.log(`Usuario Premium: ${this.nombre}, Puntos: ${this.puntosLealtad}`);
    }

    // Problema: Este método debería estar en una clase separada. 
    // La lógica de canje de puntos no debería estar en la clase UsuarioPremium, ya que mezcla responsabilidades.
    canjearPuntos() {
        console.log(`${this.nombre} ha canjeado ${this.puntosLealtad} puntos.`);
    }
}

// Creamos una instancia de un usuario regular
const usuario = new Usuario(1, "John Doe", "john@example.com", "admin");
usuario.obtenerInfoUsuario();  // Muestra la información del usuario en la consola
usuario.enviarCorreo("Bienvenido", "¡Bienvenido a la plataforma!");  // Simula el envío de un correo
usuario.validarPedido(999);  // Valida si el pedido es válido o no

// Creamos una instancia de un usuario premium
const usuarioPremium = new UsuarioPremium(2, "Jane Smith", "jane@example.com", "premium", 150);
usuarioPremium.obtenerInfoUsuario();  // Muestra la información del usuario premium
usuarioPremium.canjearPuntos();  // Canjea los puntos de lealtad
usuarioPremium.validarPedido(1500);  // Valida un pedido (esto no tiene sentido en un usuario premium)