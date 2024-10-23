// dip-example.ts

// Sin DIP: Computadora depende directamente de una implementación concreta (TecladoMecanico).
class TecladoMecanico {
    getTeclaPresionada() {
        return 'Tecla A';
    }
}

class ComputadoraSinDIP {
    private teclado: TecladoMecanico;

    constructor(teclado: TecladoMecanico) {
        this.teclado = teclado;
    }

    detectarEntrada() {
        console.log(`Tecla presionada: ${this.teclado.getTeclaPresionada()}`);
    }
}

// Aplicando DIP: La clase Computadora depende de una abstracción (Teclado), no de una implementación concreta.
interface Teclado {
    getTeclaPresionada(): string;
}

export class TecladoMecanicoDIP implements Teclado {
    getTeclaPresionada() {
        return 'Tecla A';
    }
}

export class TecladoMembranaDIP implements Teclado {
    getTeclaPresionada() {
        return 'Tecla B';
    }
}

export class ComputadoraDIP {
    private teclado: Teclado;

    constructor(teclado: Teclado) {
        this.teclado = teclado;
    }

    detectarEntrada() {
        console.log(`Tecla presionada: ${this.teclado.getTeclaPresionada()}`);
    }
}

// Ejemplo de uso
const tecladoMecanico = new TecladoMecanicoDIP();
const tecladoMembrana = new TecladoMembranaDIP();

const pc1 = new ComputadoraDIP(tecladoMecanico);
const pc2 = new ComputadoraDIP(tecladoMembrana);

pc1.detectarEntrada();  // Tecla presionada: Tecla A
pc2.detectarEntrada();  // Tecla presionada: Tecla B
