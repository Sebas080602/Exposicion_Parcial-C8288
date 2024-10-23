// isp-example.ts

// Sin ISP: Una interfaz grande obliga a implementar métodos que una clase no necesita.
interface Trabajador {
    programar(): void;
    administrar(): void;
    vender(): void;
}

// Implementación incorrecta: Desarrollador no debería tener que implementar todos los métodos.
class Desarrollador implements Trabajador {
    programar() {
        console.log('Estoy programando');
    }

    administrar() {
        // No debería tener este método
    }

    vender() {
        // No debería tener este método
    }
}

// Aplicando ISP: separamos las interfaces en roles específicos.
interface Programador {
    programar(): void;
}

interface Administrador {
    administrar(): void;
}

interface Vendedor {
    vender(): void;
}

// Implementaciones correctas según ISP
class DesarrolladorISP implements Programador {
    programar() {
        console.log('Estoy programando');
    }
}

class Gerente implements Administrador {
    administrar() {
        console.log('Estoy administrando');
    }
}

class Comerciante implements Vendedor {
    vender() {
        console.log('Estoy vendiendo');
    }
}

// Ejemplo de uso
const dev = new DesarrolladorISP();
dev.programar();  // Estoy programando

const manager = new Gerente();
manager.administrar();  // Estoy administrando

const vendedor = new Comerciante();
vendedor.vender();  // Estoy vendiendo
