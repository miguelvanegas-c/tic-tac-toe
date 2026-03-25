# Tic Tac Toe
## Fuente del tutorial
Este juego fue creado con base en el siguiente tutorial:
[Tutorial Tic Tac Toe de React](https://react.dev/learn/tutorial-tic-tac-toe)

## Desarrollo
El proyecto fue desarrollado con React y Vite, aplicando componentes reutilizables para organizar la lógica y la interfaz del juego.

### `App`
Es el componente principal de la aplicación. Se encarga de renderizar el tablero y de iniciar la experiencia del juego.

![Imagen de App](imgs/image.png)

### `Board`
Es el componente central del juego. Administra el estado de las casillas, controla los turnos de los jugadores, registra los movimientos y determina si existe un ganador.

![Imagen de board](imgs/image-1.png)

### `Square`
Representa cada casilla del tablero. Recibe el valor de la posición y la función que se ejecuta al hacer clic.

![Imagen de Square](imgs/image-2.png)

### `GameInfo`
Muestra el historial de movimientos realizados durante la partida.

![Game Info](imgs/image-3.png)

### `calculateWinner`
Función auxiliar usada para evaluar las combinaciones posibles y determinar si algún jugador ganó la partida.

## Cómo correr
Deben tener instalado node.js
1. Instalar dependencias:
	```bash
	npm install
	```

2. Ejecutar el proyecto en modo desarrollo:
	```bash
	npm run dev
	```

3. Abrir la URL que aparece en la terminal.

## Funcionalidad

![funcionalidad](imgs/image-4.png)

El juego funciona por turnos, lista los movimientos y cuando encuentra un ganador lo muestra en la parte superior.