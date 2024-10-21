import { Usuario, UsuarioPremium, Pedido } from '../src/refactor';

// Test para verificar la creación de un usuario y obtener su información.
test('Debería crear un usuario y obtener su información', () => {
  const usuario = new Usuario(1, 'John Doe', 'john@example.com', 'admin');
  
  // Capturamos el console.log con un mock
  const consoleSpy = jest.spyOn(console, 'log');
  
  // Ejecutamos el método
  usuario.obtenerInfoUsuario();
  
  // Verificamos que el mensaje correcto haya sido impreso en la consola
  expect(consoleSpy).toHaveBeenCalledWith('Usuario: John Doe, Correo: john@example.com, Rol: admin');

  // Limpiamos el mock
  consoleSpy.mockRestore();
});

// Test para verificar la creación de un usuario premium y el canje de puntos.
test('Debería crear un usuario premium y canjear puntos', () => {
  const usuarioPremium = new UsuarioPremium(2, 'Jane Smith', 'jane@example.com', 'premium', 150);
  
  // Capturamos el console.log con un mock
  const consoleSpy = jest.spyOn(console, 'log');
  
  // Ejecutamos los métodos
  usuarioPremium.obtenerInfoUsuario();
  usuarioPremium.canjearPuntos();
  
  // Verificamos que los mensajes correctos hayan sido impresos en la consola
  expect(consoleSpy).toHaveBeenCalledWith('Usuario: Jane Smith, Correo: jane@example.com, Rol: premium');
  expect(consoleSpy).toHaveBeenCalledWith('Puntos de lealtad: 150');
  expect(consoleSpy).toHaveBeenCalledWith('Jane Smith ha canjeado 150 puntos.');

  // Limpiamos el mock
  consoleSpy.mockRestore();
});

// Test para validar un pedido correctamente
test('Debería validar un pedido correctamente', () => {
  const pedido = new Pedido(999);
  
  // Capturamos el console.log con un mock para verificar el mensaje.
  const consoleSpy = jest.spyOn(console, 'log');

  // Ejecutamos el método
  pedido.validarPedido();

  // Verificamos que el mensaje correcto haya sido impreso en la consola
  expect(consoleSpy).toHaveBeenCalledWith('Pedido 999 es válido.');

  // Limpieza del mock
  consoleSpy.mockRestore();
});
