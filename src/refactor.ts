// 1. Creamos una clase para gestionar pedidos (Aplicando SRP)
export class Pedido {
    idPedido: number;

    constructor(idPedido: number) {
        this.idPedido = idPedido;  // Inicializa el ID del pedido.
    }

    // Método para validar un pedido, determina si es válido o no.
    validarPedido() {
        if (this.idPedido < 1000) {
            console.log(`Pedido ${this.idPedido} es válido.`);
        } else {
            console.log(`Pedido ${this.idPedido} no es válido.`);
        }
    }
}

// 2. Creamos una clase para enviar correos (Aplicando SRP)
export class ServicioCorreo {
    enviarCorreo(correo: string, asunto: string, mensaje: string) {
        console.log(`Enviando correo a ${correo} con asunto: ${asunto}`);
    }
}

// 3. Definimos una interfaz para el comportamiento de los usuarios (Aplicando OCP)
interface IUsuario {
    obtenerInfoUsuario(): void;
}

// 4. Clase Usuario que implementa la interfaz IUsuario
export class Usuario implements IUsuario {
    id: number;
    nombre: string;
    correo: string;
    rol: string;

    constructor(id: number, nombre: string, correo: string, rol: string) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
    }

    // Método que cumple con la interfaz IUsuario.
    obtenerInfoUsuario() {
        console.log(`Usuario: ${this.nombre}, Correo: ${this.correo}, Rol: ${this.rol}`);
    }
}

// 5. Clase UsuarioPremium que extiende Usuario y mantiene el principio de LSP
export class UsuarioPremium extends Usuario {
    puntosLealtad: number;

    constructor(id: number, nombre: string, correo: string, rol: string, puntosLealtad: number) {
        super(id, nombre, correo, rol);  // Llama al constructor de Usuario
        this.puntosLealtad = puntosLealtad;  // Asigna los puntos de lealtad
    }

    // Sobrescribe el método obtenerInfoUsuario sin romper LSP.
    obtenerInfoUsuario() {
        super.obtenerInfoUsuario();  // Muestra la información base del usuario.
        console.log(`Puntos de lealtad: ${this.puntosLealtad}`);  // Añade los puntos de lealtad.
    }

    // Método para canjear puntos de lealtad, específico de UsuarioPremium.
    canjearPuntos() {
        console.log(`${this.nombre} ha canjeado ${this.puntosLealtad} puntos.`);
    }
}

// 6. Creamos instancias de las clases refactorizadas

// Creamos una instancia de un pedido y validamos si es válido.
const pedido1 = new Pedido(999);
pedido1.validarPedido();  // Pedido 999 es válido.

// Creamos una instancia de un usuario y mostramos su información.
const usuario = new Usuario(1, "Sebas", "sebas@example.com", "admin");
usuario.obtenerInfoUsuario();  // Usuario: John Doe, Correo: john@example.com, Rol: admin

// Creamos una instancia de un usuario premium y mostramos su información.
const usuarioPremium = new UsuarioPremium(2, "Gonzalo", "gonzalo@example.com", "premium", 150);
usuarioPremium.obtenerInfoUsuario();  // Usuario Premium: Jane Smith, Puntos: 150
usuarioPremium.canjearPuntos();  // Jane Smith ha canjeado 150 puntos.

// Creamos una instancia del servicio de correo y enviamos un correo.
const servicioCorreo = new ServicioCorreo();
servicioCorreo.enviarCorreo("sebas@example.com", "Bienvenida", "¡Bienvenida a nuestro sistema!");  // Enviando correo a jane@example.com con asunto: Bienvenida
