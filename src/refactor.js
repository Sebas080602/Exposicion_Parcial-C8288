"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioPremium = exports.Usuario = exports.ServicioCorreo = exports.Pedido = void 0;
// 1. Creamos una clase para gestionar pedidos (Aplicando SRP)
var Pedido = /** @class */ (function () {
    function Pedido(idPedido) {
        this.idPedido = idPedido; // Inicializa el ID del pedido.
    }
    // Método para validar un pedido, determina si es válido o no.
    Pedido.prototype.validarPedido = function () {
        if (this.idPedido < 1000) {
            console.log("Pedido ".concat(this.idPedido, " es v\u00E1lido."));
        }
        else {
            console.log("Pedido ".concat(this.idPedido, " no es v\u00E1lido."));
        }
    };
    return Pedido;
}());
exports.Pedido = Pedido;
// 2. Creamos una clase para enviar correos (Aplicando SRP)
var ServicioCorreo = /** @class */ (function () {
    function ServicioCorreo() {
    }
    ServicioCorreo.prototype.enviarCorreo = function (correo, asunto, mensaje) {
        console.log("Enviando correo a ".concat(correo, " con asunto: ").concat(asunto));
    };
    return ServicioCorreo;
}());
exports.ServicioCorreo = ServicioCorreo;
// 4. Clase Usuario que implementa la interfaz IUsuario
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, correo, rol) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
    }
    // Método que cumple con la interfaz IUsuario.
    Usuario.prototype.obtenerInfoUsuario = function () {
        console.log("Usuario: ".concat(this.nombre, ", Correo: ").concat(this.correo, ", Rol: ").concat(this.rol));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
// 5. Clase UsuarioPremium que extiende Usuario y mantiene el principio de LSP
var UsuarioPremium = /** @class */ (function (_super) {
    __extends(UsuarioPremium, _super);
    function UsuarioPremium(id, nombre, correo, rol, puntosLealtad) {
        var _this = _super.call(this, id, nombre, correo, rol) || this; // Llama al constructor de Usuario
        _this.puntosLealtad = puntosLealtad; // Asigna los puntos de lealtad
        return _this;
    }
    // Sobrescribe el método obtenerInfoUsuario sin romper LSP.
    UsuarioPremium.prototype.obtenerInfoUsuario = function () {
        _super.prototype.obtenerInfoUsuario.call(this); // Muestra la información base del usuario.
        console.log("Puntos de lealtad: ".concat(this.puntosLealtad)); // Añade los puntos de lealtad.
    };
    // Método para canjear puntos de lealtad, específico de UsuarioPremium.
    UsuarioPremium.prototype.canjearPuntos = function () {
        console.log("".concat(this.nombre, " ha canjeado ").concat(this.puntosLealtad, " puntos."));
    };
    return UsuarioPremium;
}(Usuario));
exports.UsuarioPremium = UsuarioPremium;
// 6. Creamos instancias de las clases refactorizadas
// Creamos una instancia de un pedido y validamos si es válido.
var pedido1 = new Pedido(999);
pedido1.validarPedido(); // Pedido 999 es válido.
// Creamos una instancia de un usuario y mostramos su información.
var usuario = new Usuario(1, "John Doe", "john@example.com", "admin");
usuario.obtenerInfoUsuario(); // Usuario: John Doe, Correo: john@example.com, Rol: admin
// Creamos una instancia de un usuario premium y mostramos su información.
var usuarioPremium = new UsuarioPremium(2, "Jane Smith", "jane@example.com", "premium", 150);
usuarioPremium.obtenerInfoUsuario(); // Usuario Premium: Jane Smith, Puntos: 150
usuarioPremium.canjearPuntos(); // Jane Smith ha canjeado 150 puntos.
// Creamos una instancia del servicio de correo y enviamos un correo.
var servicioCorreo = new ServicioCorreo();
servicioCorreo.enviarCorreo("jane@example.com", "Bienvenida", "¡Bienvenida a nuestro sistema!"); // Enviando correo a jane@example.com con asunto: Bienvenida
