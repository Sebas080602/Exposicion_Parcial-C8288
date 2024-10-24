# Proyecto: Refactorización y Mejora de Código Legacy

## Descripción

Este proyecto tiene como objetivo refactorizar un código base con problemas de mantenibilidad, aplicando los principios **SOLID**, identificando **code smells** y mejorando el rendimiento. Además, se añaden **pruebas unitarias** para asegurar el correcto funcionamiento de las mejoras realizadas.

## Objetivos

- **Identificar code smells** y aplicar refactorización utilizando principios **SOLID**.
- **Mejorar el rendimiento** aplicando optimizaciones de código.
- Añadir **pruebas unitarias** para asegurar que todas las funcionalidades pasen.
- **Documentar** los cambios realizados y justificar las decisiones técnicas.
- Utilizar herramientas de **análisis estático de código** para mantener la calidad del código.

## Principios SOLID

Los **principios SOLID** son un conjunto de cinco principios fundamentales de diseño de software orientado a objetos que buscan mejorar la mantenibilidad, flexibilidad y escalabilidad del código.

1. **Single Responsibility Principle (SRP)**: Cada clase debe tener una única responsabilidad o razón para cambiar.
2. **Open/Closed Principle (OCP)**: Las clases deben estar abiertas para la extensión pero cerradas para la modificación.
3. **Liskov Substitution Principle (LSP)**: Las clases derivadas deben poder sustituir a sus clases base sin alterar el comportamiento correcto del programa.
4. **Interface Segregation Principle (ISP)**: Los clientes no deberían depender de interfaces que no utilizan.
5. **Dependency Inversion Principle (DIP)**: Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

Explicaremos cada uno de estos principios en el proyecto de refactorización **(SRP, OCP, LSP)**, así como en ejemplos específicos **(ISP, DIP)**, esto para que se logre entender mejor.

## Code Smells

Los **code smells** son indicios de posibles problemas en el código que no necesariamente causan errores, pero afectan negativamente la mantenibilidad y escalabilidad del sistema. En el código base se detectaron los siguientes code smells:

- **Responsabilidades múltiples en una sola clase**: La clase `Usuario` tiene métodos que no deberían pertenecer a ella, como `enviarCorreo` y `validarPedido`, lo que viola el principio SRP.
- **Falta de extensibilidad**: El método `esAdmin()` limita el uso de roles y requiere modificaciones cada vez que se agregan nuevos roles, lo que viola el principio OCP.
- **Comportamiento inconsistente**: La clase `UsuarioPremium` sobrescribe el método `obtenerInfoUsuario()` y altera su comportamiento, violando el principio LSP.

## Paso 1: Configuración del entorno y estructura del proyecto.

#### Inicialización del proyecto

Como paso previo, tenemos que inicializar el proyecto, y para eso ejecutamos el siguiente comando:

```bash
npm init -y
```

#### Instalación de las dependencias necesarias

El primer paso fue configurar el entorno de desarrollo, instalando las herramientas necesarias para trabajar con TypeScript, realizar pruebas unitarias y aplicar análisis estático de código.

#### Comando utilizado para instalar TypeScript, ts-node y nodemon:
```bash
npm install typescript ts-node nodemon --save-dev
```

- Typescript: Nos permite escribir código en TypeScript y luego compilarlo a JavaScript.
- ts-node: Herramienta para ejecutar archivos TypeScript sin necesidad de compilarlos manualmente.
- nodemon: Monitorea los cambios en los archivos y reinicia automáticamente la aplicación en desarrollo.
  
#### Inicialización de TypeScript
Para configurar TypeScript en el proyecto, se utilizó el siguiente comando para generar el archivo `tsconfig.json`:
```bash
npx tsc --init
```
- El archivo `tsconfig.json` permite configurar la compilación del proyecto TypeScript. En nuestro caso, nos aseguramos de que el código sea compatible con ECMAScript 2020 y que el sistema de módulos sea ESNext.

#### Instalación de ESLint para Análisis Estático
Instalamos ESLint para analizar y mejorar la calidad del código.
```bash
npm install eslint --save-dev
```
Explicación:

- ESLint es una herramienta que ayuda a encontrar problemas en el código, desde errores de sintaxis hasta malas prácticas de programación.
- Se instaló como dependencia de desarrollo.

Después, inicializamos la configuración de ESLint con:
```bash
npx eslint --init
```
Durante el proceso, configuramos ESLint para trabajar con TypeScript y definimos que el código se ejecutará en Node.js. Esto generó el archivo `eslint.config.mjs` con las reglas de análisis.

#### Instalación de Jest para Pruebas Unitarias
Para realizar pruebas unitarias, instalamos Jest y las herramientas relacionadas:
```bash
npm install jest @types/jest ts-jest --save-dev
```
Explicación:
- jest: Herramienta de pruebas unitarias.
- @types/jest: Definiciones de tipos para que TypeScript reconozca las funciones de Jest.
- ts-jest: Permite ejecutar archivos TypeScript en Jest sin necesidad de compilarlos previamente.

#### Inicialización de la Configuración de Jest
Creamos el archivo de configuración de Jest para que trabaje correctamente con TypeScript:
```bash
npx ts-jest config:init
```
Este comando generó el archivo `jest.config.js` que permite definir configuraciones como:
- Ubicación de los archivos de pruebas.
- Configuración de preprocesadores para manejar archivos .ts.

#### Estructura del Proyecto
La estructura del proyecto se organizó de la siguiente manera:

PROYEC_EXPO/
- src/
  - index.ts 
  - refactor.ts
  - refactor.js
  - dip-example.ts
  - isp-example.ts
- tests/
  - index.test.ts
- jest.config.js 
- package.json 
- tsconfig.json
- eslint.config.mjs 
- README.md

Hasta este punto, el proyecto ha sido configurado correctamente, y estamos listos para comenzar con la refactorización del código base aplicando los principios SOLID. Sin embargo, antes, veremos los principios ISP y DIP, ya que complementan los tres primeros principios que serán explicados en el transcurso del proyecto.

#### Código del principio ISP: `isp-example.ts`
##### 1. Principio de Segregación de Interfaces (ISP)
- **Archivo**: `src/isp-example.ts`
- **Descripción**: Vemos que en cambio de una única interfaz grande que obliga a las clases a implementar métodos innecesarios, hemos creado interfaces pequeñas y específicas para que cada clase implemente solo lo que necesita.
- **Uso**:
```bash
npx ts-node src/isp-example.ts
```
#### Código del principio DIP: `dip-example.ts`
##### 2. Principio de Inversión de Dependencias (DIP)
- **Archivo**: `src/dip-example.ts`
- **Descripción**: Aquí nos muestra que, en lugar de depender de implementaciones concretas, la clase `ComputadoraDIP` depende de la abstracción `Teclado`. Esto permite flexibilidad para cambiar entre diferentes tipos de teclados sin modificar el código de la computadora.
- **Uso**:
```bash
npx ts-node src/dip-example.ts
```
---
Habiendo definido y explicado estos principios fundamentales, es hora de implementarlos en nuestro proyecto. **Let's start!** 
## Paso 2: Refactorización del código base y aplicación de los principios SOLID

#### Análisis inicial del código base

El código base, el cual se encontraba en el archivo `index.ts`, tenía varios problemas de diseño que violaban los principios SOLID. El análisis inicial identificó los siguientes **code smells**:

1. **Responsabilidades múltiples (SRP)**: 
    - La clase `Usuario` gestionaba no solo la información del usuario, sino también el envío de correos y la validación de pedidos. Esto rompe el principio de **Responsabilidad Única (SRP)**, ya que una clase debería tener solo una razón para cambiar.
   
2. **Dificultad para extender (OCP)**: 
    - El método `esAdmin()` dentro de `Usuario` validaba solo dos roles (admin y no admin). Si se añadieran más roles, el código tendría que modificarse, violando el principio de **Abierto/Cerrado (OCP)**, el cual indica que el código debería ser abierto para extensión, pero cerrado para modificación.
   
3. **Comportamiento inconsistente (LSP)**: 
    - La clase `UsuarioPremium` sobrescribía métodos de la clase `Usuario` cambiando el comportamiento, lo que violaba el principio de **Sustitución de Liskov (LSP)**. Esto genera inconsistencias al cambiar la funcionalidad esperada.

---

## Refactorización realizada en `refactor.ts`

Para mejorar el diseño del código y solucionar los problemas detectados, se creó un nuevo archivo `refactor.ts` donde se implementó la refactorización aplicando los principios SOLID:

### Cambios realizados:

1. **Aplicación de SRP (Responsabilidad Única)**:
    - Se crearon clases separadas como `ServicioCorreo` para enviar correos y `Pedido` para gestionar los pedidos. De esta forma, cada clase tiene una única responsabilidad.
    - Ahora, la clase `Usuario` solo se encarga de gestionar la información del usuario.

2. **Aplicación de OCP (Abierto/Cerrado)**:
    - Se introdujo una interfaz `IUsuario` que permite extender diferentes tipos de usuarios (`Usuario` y `UsuarioPremium`) sin modificar las clases existentes.
    - La clase `Usuario` permanece cerrada para modificaciones, pero abierta a nuevas extensiones a través de la interfaz.

3. **Aplicación de LSP (Sustitución de Liskov)**:
    - La clase `UsuarioPremium` sobrescribe el método `obtenerInfoUsuario` de manera que mantiene el comportamiento esperado y no cambia la naturaleza del método base.
    - Además, se añadió un método exclusivo `canjearPuntos` en `UsuarioPremium`, que tiene sentido solo para usuarios premium y no afecta el comportamiento de los usuarios regulares.

---

## Principios SOLID aplicados en `refactor.ts`:

1. **SRP (Responsabilidad Única)**:
    - La lógica de los pedidos y el envío de correos se separó en clases específicas, dejando la clase `Usuario` con una única responsabilidad.

2. **OCP (Abierto/Cerrado)**:
    - Se implementaron interfaces (`IUsuario`) y clases derivadas (`UsuarioPremium`) para facilitar la extensión sin modificar el código original de `Usuario`.

3. **LSP (Sustitución de Liskov)**:
    - `UsuarioPremium` respeta la naturaleza del método `obtenerInfoUsuario` y agrega funcionalidad adicional sin alterar la clase base `Usuario`.

---

## Código inicial en `index.ts`:

Antes de la refactorización, el archivo `index.ts` contenía las siguientes violaciones a los principios SOLID:

- La clase `Usuario` tenía varias responsabilidades (gestionar pedidos, enviar correos).
- La clase `UsuarioPremium` sobrescribía métodos clave de manera inconsistente.
- No se hacía uso de interfaces o clases abstractas, lo que dificultaba la extensibilidad.

---

## Refactorización en `refactor.ts`:

El nuevo archivo `refactor.ts` organiza el código aplicando correctamente los principios SOLID:

- Cada clase tiene una responsabilidad única (por ejemplo, `Pedido` solo valida pedidos, `ServicioCorreo` solo envía correos).
- Se emplean interfaces para asegurar la extensibilidad sin modificar las clases existentes.
- La clase `UsuarioPremium` añade funcionalidades específicas (canje de puntos) sin romper el comportamiento esperado de `Usuario`.

Hasta este punto, hemos logrado mejorar significativamente el código en cuanto a su **mantenibilidad**, **extensibilidad** y **coherencia**.

---

Hasta aquí, el código ha sido refactorizado para cumplir con los principios **SOLID** y estar mejor estructurado. El siguiente paso es implementar pruebas unitarias para validar su correcto funcionamiento.

## Paso 3: Optimización del rendimiento y pruebas unitarias

### Optimización del rendimiento

Tras la refactorización del código, realizamos algunas optimizaciones de rendimiento en el sistema. Aunque el sistema refactorizado era más mantenible y modular, aún había áreas donde se podían aplicar mejoras en cuanto a la eficiencia del código:

### Mejoras implementadas:

1. **Optimización del manejo de pedidos**:
    - Se mejoró la lógica de validación de pedidos en la clase `Pedido` para evitar cálculos innecesarios.
    - Se agregaron mensajes de consola más detallados para ayudar a identificar rápidamente si el pedido es válido o no sin realizar múltiples validaciones.

2. **Optimización del canje de puntos**:
    - Se optimizó el método `canjearPuntos` de la clase `UsuarioPremium` para reducir la cantidad de operaciones y hacer el código más eficiente.

### Herramientas de análisis de rendimiento utilizadas:
    
1. **ESLint**:
    - Se utilizó **ESLint** para asegurar que el código sigue las mejores prácticas en cuanto a rendimiento y legibilidad. Además de ayudar a mantener un código limpio, ESLint también detectó áreas que podían ser optimizadas.
    
2. **Jest**:
    - Durante las pruebas unitarias (descritas más adelante), también se midió el rendimiento de algunas funciones críticas para asegurar que las optimizaciones no impacten negativamente en el tiempo de ejecución.

---

## Pruebas unitarias

Una parte fundamental de la refactorización fue añadir pruebas unitarias para validar el correcto funcionamiento del código refactorizado. Usamos **Jest** para escribir y ejecutar estas pruebas.

### Archivos de prueba:

- **`index.test.ts`**: Este archivo contiene todas las pruebas unitarias que validan el funcionamiento de las clases `Usuario`, `UsuarioPremium`, `Pedido` y `ServicioCorreo`.

### Tests cubiertos:

1. **Test para creación y validación de usuarios**:
    - Se probó la creación de usuarios regulares y premium, validando que las funciones `obtenerInfoUsuario` y `canjearPuntos` funcionen correctamente.
    
2. **Test para validación de pedidos**:
    - Se probó que el método `validarPedido` en la clase `Pedido` valide correctamente un pedido según su ID, diferenciando entre pedidos válidos e inválidos.

### Ejecución de pruebas:

Las pruebas unitarias se ejecutaron con el siguiente comando:

```bash
npm run test
```
### Resultados de las pruebas:
Todas las pruebas unitarias pasaron correctamente, validando que las refactorizaciones y optimizaciones realizadas no rompieron la funcionalidad esperada del sistema.

### Cobertura de las pruebas:
Además, se generó un reporte de cobertura que nos ayudó a identificar si había partes del código que no estaban siendo probadas. Para generar el reporte de cobertura se utilizó el siguiente comando:
```bash
npm run test -- --coverage
```
---

Hasta este punto, hemos completado la optimización del código y las pruebas unitarias. En el próximo paso, implementaremos la explicación final de los cambios y el análisis de código estático para asegurar la calidad del proyecto.

## Paso 4: Documentación de cambios y análisis estático de código

### Documentación de los cambios realizados

Durante la refactorización y mejora del proyecto, se implementaron varios cambios importantes para mejorar la mantenibilidad, rendimiento y calidad del código. A continuación, detallamos los cambios clave realizados:

#### 1. Refactorización aplicando principios SOLID

- **Separación de responsabilidades (SRP)**:
    - Se crearon clases separadas para manejar la lógica de pedidos (`Pedido`) y el envío de correos (`ServicioCorreo`), que antes estaban innecesariamente incluidas dentro de la clase `Usuario`.
    - Esto asegura que cada clase tiene una única responsabilidad, lo que facilita el mantenimiento y la escalabilidad.

- **Principio de Abierto/Cerrado (OCP)**:
    - La clase `Usuario` ahora implementa una interfaz (`IUsuario`), lo que permite extender sus funcionalidades (por ejemplo, la clase `UsuarioPremium`) sin modificar la clase base.
    - Se eliminaron los métodos que dependían de roles específicos y se delegó esta responsabilidad a las clases derivadas.

- **Principio de Sustitución de Liskov (LSP)**:
    - La clase `UsuarioPremium` ahora hereda de `Usuario` correctamente, sin modificar el comportamiento esperado de los métodos que se sobreescriben, como `obtenerInfoUsuario`.
    - Esto asegura que los objetos de las clases derivadas puedan sustituir a los de la clase base sin alterar la funcionalidad.

- **Principio de Segregación de Interfaces (ISP)**:
    - Se implementó la interfaz `IUsuario`, asegurando que cada clase solo implemente los métodos que realmente necesita.

- **Principio de Inversión de Dependencias (DIP)**:
    - La clase `Usuario` ahora depende de una abstracción (interfaz `IUsuario`) en lugar de depender directamente de clases concretas, lo que mejora la flexibilidad y testabilidad.

#### 2. Optimización de rendimiento

- **Lógica de validación de pedidos optimizada**:
    - Se redujo la cantidad de operaciones necesarias para validar pedidos en la clase `Pedido`, mejorando la eficiencia del código.
    
- **Optimización en el canje de puntos de usuarios premium**:
    - El método `canjearPuntos` fue optimizado para evitar cálculos innecesarios y mejorar el rendimiento en situaciones con múltiples usuarios premium.

#### 3. Pruebas unitarias

- Se añadieron pruebas unitarias con **Jest** para validar el correcto funcionamiento de las clases `Usuario`, `UsuarioPremium`, `Pedido` y `ServicioCorreo`.
- Las pruebas validaron la creación de usuarios, el canje de puntos, y la validación de pedidos.

---

## Análisis estático de código

Para asegurar que el código sigue las mejores prácticas y no contiene errores potenciales, se utilizó **ESLint** como herramienta de análisis estático. Este análisis nos permitió identificar problemas de estilo de código y posibles bugs antes de ejecutar el proyecto.

### Herramienta utilizada:

- **ESLint**:
    - Se configuró ESLint en el proyecto para seguir un conjunto de reglas estrictas que garantizan que el código sea limpio y mantenga un estilo consistente.
    - Además, se utilizaron configuraciones específicas para **TypeScript**, asegurando que no se cometieran errores comunes al trabajar con este lenguaje.

### Configuración de ESLint:

Se creó y configuró un archivo `eslint.config.mjs` que contiene las reglas y ajustes para el proyecto.

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
```
#### Comando para ejecutar el análisis estático:
Para ejecutar ESLint en el proyecto y detectar posibles problemas, se utilizó el siguiente comando:
```bash
npx eslint .
```
Este comando ejecuta ESLint en todos los archivos del proyecto, revisando posibles errores y mostrando advertencias en caso de que se encuentre algo que pueda mejorarse o corregirse.

### Resultados del análisis:
- ESLint detectó algunas áreas de mejora relacionadas con el uso de variables no utilizadas y el manejo de promesas.
- Todos los problemas fueron corregidos, garantizando que el código es consistente, seguro y fácil de mantener.

### Conclusión
- El proyecto ha sido completamente refactorizado y optimizado siguiendo los principios SOLID. 
- Las pruebas unitarias se han añadido para garantizar que el código funcione como se espera, y se ha utilizado ESLint para mantener la calidad del código a través de análisis estático.

---


### Referencias

##### Artículos en línea en la carpeta `Pruebas con Jest`:
1. [Pirámide de pruebas prácticas - Martin Fowler](https://martinfowler.com/articles/practical-test-pyramid.html)
2. [Unit Testing in Node.js](https://brightsec.com/blog/unit-testing-in-nodejs/)

##### Repositorio del curso:
1. [Actividades - Semana 4](https://github.com/kapumota/Actividades-C8288/blob/main/Semana4/Ejemplos.ts)
2. [Código de Clase - Semana 3](https://github.com/kapumota/Actividades-C8288/blob/main/Semana3/CodigoClase.ts)

##### Lecturas del curso:
1. **Carpeta JavaScript** - *Actividad 2: Creación y configuración de un proyecto node.js con Express.js*: `Actividad2.pdf`
2. **Carpeta JavaScript** - *Actividad 4: Fundamentos de JavaScript*: `Actividad4.pdf`
3. **Carpeta TypeScript** - *Tipos, interfaces, POO*: `Tipos-POO.pdf`

---
**Autor**: Sebastián Saldaña Rodríguez